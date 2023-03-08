<template>
  <!-- <div class="flex flex-col min-h-screen">
    <SchemaFetchError></SchemaFetchError>
    <NavBar></NavBar>
    <div>
      <slot />
    </div>

    <Footer></Footer>
  </div> -->
  <div class="flex flex-col min-h-screen">
    <SchemaFetchError />

    <NavBar />

    <main>
      <div class="container mx-auto px-5 md:max-w-screen-lg mt-20 md:mt-36">
        <slot />
      </div>
    </main>

    <!-- <footer
      class="w-full p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 mt-auto"
    >
      <span class="text-sm sm:text-center"
        >© 2022 <a href="#" class="hover:underline">ABC</a>. All Rights
        Reserved.
      </span>
    </footer> -->
    <Footer class="mt-auto" />
  </div>
</template>

<script setup lang="ts">
import { useSchemaStore } from '~~/stores/schema';

// Fetch schema
const schemaStore = useSchemaStore();
await schemaStore.getSchema();
</script>
