import { defineStore } from 'pinia';
import { Schema } from '~~/schema/schema';
import { SchemaImplementation } from '~~/schema/schemaImplementation';

export const useSchemaStore = defineStore('schemastore', {
  state: () => ({
    schema: null as null | Schema,
    schemaImplementation: null as null | SchemaImplementation,
    /** Schema fetch error */
    schemaFetchError: null as null | Error,
    /** Did we fetch schema */
    didFetchSchema: false,
  }),
  actions: {
    async getSchema() {
      if (this.schema) return;

      const { data, error } = await useFetch<string>(
        'https://raw.githubusercontent.com/Solidverse/web-resume-schema/main/schema.json'
      );
      this.didFetchSchema = true;

      if (error.value) {
        this.schemaFetchError = new Error(
          `Fetching schema resulted in an error: ${error.value}`
        );
        return;
      } else if (!data) {
        this.schemaFetchError = new Error(
          'Could not fetch schema. Data empty.'
        );
        return;
      }
      const schema = JSON.parse(data.value as string) as Schema;
      this.schema = Object.freeze(schema);
    },
  },
});
