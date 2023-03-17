<template>
  <div>Edit Page</div>
</template>

<script setup lang="ts">
import { useSchemaStore } from '~~/stores/schema';

const schemaStore = useSchemaStore();
if (!schemaStore.currentData) {
  // Redirect to root when we do not have currentData
  console.log('currentData not present');
}
</script>
