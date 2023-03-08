<template>
  <div
    class="modal"
    :class="{ 'modal-open': schemaStore.didFetchSchema && !schemaStore.schema }"
  >
    <div class="modal-box">
      <h3 class="font-bold text-lg">Could not fetch Resume Schema</h3>
      <p class="py-4">
        An error has occured while fetching the schema. If this keeps happening,
        please contact submit a bug report.
      </p>

      <div v-if="schemaStore.schemaFetchError" class="mockup-code">
        <code>{{ schemaStore.schemaFetchError }}</code>
      </div>
      <div class="modal-action">
        <label class="btn" @click="refresh">Refresh</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSchemaStore } from '~~/stores/schema';

const schemaStore = useSchemaStore();

const refresh = () => {
  location.reload();
};
</script>
