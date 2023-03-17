<template>
  <div>Edit Page</div>
</template>

<script setup lang="ts">
import { useSchemaStore } from '~~/stores/schema';

const schemaStore = useSchemaStore();
schemaStore.$subscribe((mutation, state) => {
  if (!state.importedData) {
    executeNoImportedData();
  }
});

const executeNoImportedData = () => {
  console.warn('No data uploaded, redirecting to home.');
  navigateTo('/');
};

if (!schemaStore.importedData) {
  executeNoImportedData();
}
</script>
