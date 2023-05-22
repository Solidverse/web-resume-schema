<template>
  <TransitionGroup class="toaster-wrapper" name="toaster-list" tag="div">
    <Toast
      v-for="toast in limitedToasts"
      :key="toast.id"
      class="toaster-item"
      v-bind="toast"
    />
  </TransitionGroup>
</template>

<script setup lang="ts">
import { useToaster } from '~/composables/toaster';

const toaster = useToaster();

const limit = 3; // Limit of toasts

const limitedToasts = computed(() => {
  return toaster.toasts.value.slice(0, limit);
});
</script>

<style scoped>
.toaster-wrapper {
  z-index: 9999;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.toaster-item {
  padding: 10px;
  margin-bottom: 10px;
}

.toaster-list-move,
.toaster-list-enter-active,
.toaster-list-leave-active {
  transition: all 0.5s ease;
}

.toaster-list-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.toaster-list-leave-to {
  opacity: 0;
  transform: translateY(-100px);
}

.toaster-item.toaster-list-leave-active:not(:only-child) {
  position: absolute;
}
</style>
