<template>
  <div class="card bg-neutral text-neutral-content justify-center">
    <button
      class="btn btn-square btn-xs mx-3 my-3 btn-primary"
      :disabled="cardState === 'BEGIN'"
      @click="cardState = 'BEGIN'"
    >
      <Icon name="material-symbols:arrow-back" size="20px" />
    </button>
    <!-- BEGIN -->
    <div
      v-if="cardState === 'BEGIN'"
      class="card-body items-center text-center"
    >
      <h2 class="card-title">Get Started</h2>
      <p>Upload your <b>data.json</b> file or start a <b>new</b> data file.</p>
      <button
        class="btn btn-lg btn-primary mt-10"
        @click="cardState = 'UPLOAD'"
      >
        Load
      </button>
      <div class="divider">OR</div>
      <button class="btn btn-lg btn-secondary" @click="cardState = 'NEW'">
        New
      </button>
    </div>

    <!-- UPLOAD -->
    <GetStartedUpload v-if="cardState === 'UPLOAD'" />
    <!-- NEW -->
    <GetStartedNew v-if="cardState === 'NEW'" />
  </div>
</template>

<script setup lang="ts">
type CardState = 'BEGIN' | 'UPLOAD' | 'NEW';

const cardState = ref('BEGIN' as CardState);
</script>
