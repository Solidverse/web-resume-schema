<template>
  <div class="flex flex-col min-h-screen">
    <SchemaFetchError />

    <NavBar />

    <main>
      <div class="container mx-auto px-5 md:max-w-screen-lg mt-20 md:mt-36">
        <slot />
      </div>
    </main>

    <Footer class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import { useSchemaStore } from '~~/stores/schema';

// Fetch schema
const schemaStore = useSchemaStore();
await schemaStore.getSchema();
</script>
