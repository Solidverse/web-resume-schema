<template>
  <div class="card w-96 bg-neutral text-neutral-content justify-center">
    <div v-if="!chosenFile" class="card-body items-center text-center">
      <h2 class="card-title">Get started</h2>
      <p>Upload your <b>data.json</b> file below.</p>
      <input
        ref="uploader"
        type="file"
        class="file-input file-input-bordered w-full max-w-xs mt-10"
        accept=".json"
        @change="handleFileSelect()"
      />
    </div>

    <div v-if="chosenFile" class="card-body items-center text-center">
      <h2 class="card-title">Chosen file:</h2>
      <p>
        <b>{{ chosenFile.name }}</b>
      </p>
      <div class="divider">Start editing?</div>

      <div class="card-actions justify-end">
        <button class="btn btn-primary mx-10" @click="confirm">Yes</button>
        <button class="btn btn-ghost mx-10" @click="deny">No</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const uploader = ref<HTMLInputElement | null>(null);
const chosenFile = ref(null as File | null);
const handleFileSelect = async () => {
  if (uploader.value && uploader.value.files && uploader.value.files.length) {
    chosenFile.value = uploader.value.files[0];
  } else {
    chosenFile.value = null;
  }
};

const confirm = () => {
  // Go to validating
  chosenFile.value = null;
};
const deny = () => {
  chosenFile.value = null;
};
</script>
