<template>
  <div
    ref="toastElement"
    class="toast-item-wrap flex items-center w-full max-w-xs p-4 rounded-lg shadow text-gray-400 bg-gray-800 border-l-2"
    :class="{
      'border-success': props.type === 'success',
      'border-error': props.type === 'error',
      'border-info': props.type === 'info',
      'border-warning': props.type === 'warning',
      'focus:ring': isFocused,
    }"
    role="alert"
    tabindex="0"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <div
      class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg"
      :class="{
        'bg-success/30 text-success': props.type === 'success',
        'bg-error/30 text-error': props.type === 'error',
        'bg-info/30 text-info': props.type === 'info',
        'bg-warning/30 text-warning': props.type === 'warning',
      }"
    >
      <Icon :name="iconName" size="80%" />
    </div>
    <div class="ml-3 text-sm font-normal">
      {{ props.message }}
    </div>
    <button
      v-if="!props.hideCloseButton"
      class="btn btn-square btn-ghost btn-sm"
      aria-label="Close"
      @click="controls.stop()"
    >
      <Icon name="material-symbols:close" size="100%" />
    </button>

    <div v-if="!props.hideProgressBar" class="toast-progress-bar">
      <div
        class="toast-progress-bar-fill"
        :class="{
          'bg-success': props.type === 'success',
          'bg-error': props.type === 'error',
          'bg-info': props.type === 'info',
          'bg-warning': props.type === 'warning',
        }"
        :style="{ width: `${progress}%` }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useInterval, useElementHover, useWindowFocus } from '@vueuse/core';
import { useToaster } from '~/composables/toaster';
import { Toast } from '~/types/Toaster';

const toaster = useToaster();

const props = withDefaults(defineProps<Toast>(), {
  autoClose: true,
  hideCloseButton: false,
  hideProgressBar: false,
  pauseOnWindowFocusLoss: true,
  pauseOnHover: true,
  showTimeSeconds: 10,
  pauseOnFocus: true,
});

const toastElement = ref<HTMLButtonElement>();
const isHovered = useElementHover(toastElement, {
  delayEnter: 0,
  delayLeave: 600,
});
const isWindowFocused = useWindowFocus();
const isFocused = ref(false);

watch(
  [isHovered, isWindowFocused, isFocused],
  ([hovered, windowFocused, focused]) => {
    if (
      (props.pauseOnHover && hovered) ||
      (props.pauseOnWindowFocusLoss && !windowFocused) ||
      (props.pauseOnFocus && focused)
    ) {
      controls.pause();
    } else {
      controls.resume();
    }
  }
);

const intervalPollMs = 100;
const progress = ref(100);
const totalCycles = computed(() =>
  Math.round((props.showTimeSeconds * 1000) / intervalPollMs)
);

const interval = useInterval(intervalPollMs, {
  controls: true,
  immediate: false,
});

const controls = {
  /** Pause the toast */
  pause: () => {
    interval.pause();
  },
  /** Resume the toast */
  resume: () => {
    interval.resume();
  },
  /** Stop and destroy the toast */
  stop: () => {
    interval.pause();

    setTimeout(() => {
      toaster.deleteToast(props.id);
    }, 300);
  },
};

watch(interval.counter, (count) => {
  if (count >= totalCycles.value) {
    progress.value = 0;
    controls.pause();
    if (props.autoClose) {
      // Only stop when autoclose is true
      controls.stop();
    }
    return;
  }
  progress.value = Math.ceil(100 - (count / totalCycles.value) * 100);
});

onMounted(() => {
  // Only start when window is focused
  if (isWindowFocused.value) controls.resume();
});

const iconName = computed(() => {
  switch (props.type) {
    case 'success':
      return 'mdi:check';
    case 'error':
      return 'material-symbols:chat-error-outline';
    case 'info':
      return 'mdi:information-variant';
    case 'warning':
      return 'mdi:alert';
  }
});

defineExpose({ controls });
</script>

<style scoped>
.toast-item-wrap {
  position: relative;
  min-height: 80px;
}
.toast-progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  border-radius: 0.5rem;
  overflow: hidden;
}

.toast-progress-bar-fill {
  height: 100%;
  border-radius: 0.5rem;
  transition: width 0.3s ease-in-out;
}

.toast-focused {
  border-color: var(--color-primary);
}
</style>
