import ZSchema, { SchemaErrorDetail } from 'z-schema';
import { useSchemaStore } from '~~/stores/schema';
import { SchemaImplementation } from '~~/schema/schemaImplementation';

export type SchemaValidationResult =
  | SchemaValidationResultSuccess
  | SchemaValidationResultFailed;

type SchemaValidationResultSuccess = {
  success: true;
  data: SchemaImplementation;
};

type SchemaValidationResultFailed = {
  success: false;
  error: SchemaValidationError;
};

export class SchemaValidationError extends Error {
  validationErrors?: SchemaErrorDetail[];

  constructor(message: string, validationErrors?: SchemaErrorDetail[]) {
    super(`Validation error: ${message}`);
    this.name = 'SchemaValidationError';
    this.validationErrors = validationErrors;
  }
}

export const useSchemaValidator = () => {
  const schemaStore = useSchemaStore();

  const validate = (data: unknown): SchemaValidationResult => {
    const schema = schemaStore.schema;
    if (!schema) {
      return {
        success: false,
        error: new SchemaValidationError('No schema present in store'),
      };
    }

    const validator = new ZSchema({ strictMode: true });
    const valid = validator.validate(schema, data);
    const errors = validator.getLastErrors();
    console.log({ schema, data, valid, errors });
    if (!valid) {
      return {
        success: false,
        error: new SchemaValidationError('Schema validation failed', errors),
      };
    }

    return {
      success: true,
      data: data as SchemaImplementation,
    };
  };

  return { validate };
};
