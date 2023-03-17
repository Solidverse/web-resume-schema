<template>
  <div v-if="!error">
    <!-- No error -->
    <div v-if="!chosenFile" class="card-body items-center text-center">
      <h2 class="card-title">Load</h2>
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
        <button class="btn mx-10" @click="deny">No</button>
      </div>
    </div>
  </div>
  <div v-else class="card-body items-center text-center">
    <!-- Error -->
    <div class="alert alert-error shadow-lg">
      <div>
        <Icon name="material-symbols:chat-error-rounded" />
        <span>An error has occured!</span>
      </div>
    </div>

    <h4 class="text-xl font-bold mt-5">Error Message:</h4>
    <code>
      {{ error.message }}
    </code>

    <SchemaValidationErrorWidget
      v-if="validationError"
      :error="validationError"
    />

    <div class="divider"></div>

    <div class="card-actions justify-end">
      <button class="btn mx-10 btn-primary" @click="dismissError">Back</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  useSchemaValidator,
  SchemaValidationError,
} from '~~/composables/schemaValidator';
import { useSchemaStore } from '~~/stores/schema';

const error = ref(null as null | Error | SchemaValidationError);
const validationError = computed((): SchemaValidationError | undefined => {
  return error.value && 'validationErrors' in error.value
    ? error.value
    : undefined;
});

const schemaStore = useSchemaStore();
const validator = useSchemaValidator();
const uploader = ref<HTMLInputElement | null>(null);
const chosenFile = ref(null as File | null);
const handleFileSelect = async () => {
  if (uploader.value && uploader.value.files && uploader.value.files.length) {
    chosenFile.value = uploader.value.files[0];
  } else {
    chosenFile.value = null;
  }
};

const confirm = async () => {
  // Parse file
  const file = await parseUploadToJson().catch((e) => {
    error.value = e;
  });

  if (!file) return;

  // Validate file
  const validated = validator.validate(file);

  if (!validated.success) {
    error.value = validated.error;
    return;
  }

  // Save validated file to store and redirect to /edit
  schemaStore.importedData = validated.data;
  navigateTo('/edit');
};

const deny = () => {
  chosenFile.value = null;
};

const parseUploadToJson = (): Promise<unknown> => {
  const temporaryFileReader = new FileReader();

  return new Promise((resolve, reject) => {
    const inputFile = chosenFile.value;
    if (!inputFile) {
      reject(new Error('No file is uploaded.'));
      return;
    }

    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort();
      reject(new Error('Problem parsing input file.'));
    };

    temporaryFileReader.onload = () => {
      let parsed: unknown = null;
      try {
        parsed = JSON.parse(String(temporaryFileReader.result));
        if (!parsed) throw new Error();
      } catch (e: unknown) {
        reject(new Error(`Could not parse uploaded file as JSON. ${e}`));
      }
      resolve(parsed);
    };

    temporaryFileReader.readAsText(inputFile);
  });
};

const dismissError = () => {
  error.value = null;
  chosenFile.value = null;
};
</script>
