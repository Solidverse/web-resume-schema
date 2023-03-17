<template>
  <div>
    <h4 class="mt-10 mb-3 text-xl font-bold">Validation errors:</h4>

    <div
      v-if="'validationErrors' in error"
      class="validation-error-window overflow-auto"
    >
      <div
        v-for="(err, i) in error.validationErrors"
        :key="i"
        class="my-3 card card-side bg-base-100 shadow-xl text-left"
      >
        <div class="card-body">
          <div class="card-actions justify-center">
            <div class="badge badge-lg badge-error">
              {{ i + 1 }}
            </div>
          </div>

          <h2 class="card-title">{{ error.message }}</h2>
          <div class="prose">
            <ol v-if="err.inner && err.inner.length">
              <li
                v-for="(innerErr, innerIndex) in err.inner || []"
                :key="`${i}.${innerIndex}`"
              >
                {{ innerErr.message }}
              </li>
            </ol>
          </div>

          <div class="card-actions justify-center">
            <button class="btn btn-primary mt-5" @click="modal = true">
              Show Full Error
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal" :class="{ 'modal-open': modal }">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Full Error</h3>
      <p class="py-4">Below is the full error in JSON format.</p>

      <div class="mockup-code">
        <!-- TODO: Find something with proper JSON highlighting -->
        <code>{{ errorJSON }}</code>
      </div>
      <div class="modal-action">
        <button class="btn" @click="modal = false">Close</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SchemaValidationError } from '~~/composables/schemaValidator';

const props = defineProps({
  error: {
    type: SchemaValidationError,
    required: true,
  },
});
const errorJSON = computed(() => {
  return JSON.stringify(props.error);
});
const modal = ref(false);
</script>

<style scoped>
.validation-error-window {
  min-height: 10em;
  max-height: 20em;
}
</style>
