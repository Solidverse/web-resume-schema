<template>
  <div class="flex flex-col min-h-screen">
    <div id="modals" class="prose" />
    <Toaster />
    <SchemaFetchError />

    <NavBar />

    <main>
      <div
        class="container mx-auto px-5 md:max-w-screen-lg mt-20 md:mt-36 pb-10 prose"
      >
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
