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
    if (data?.constructor !== Object) {
      return {
        success: false,
        error: new Error('Invalid data. JSON file must be an object.'),
      };
    }

    const schema = schemaStore.schema;
    if (!schema) {
      return {
        success: false,
        error: new SchemaValidationError('No schema present in store'),
      };
    }

    // TODO: Check why setRemoteReference is not in ZSchema types
    const validator = new ZSchema({ strictMode: false }) as ZSchema & {
      setRemoteReference: (reference: string, val: unknown) => unknown;
    };

    validator.setRemoteReference(
      'https://raw.githubusercontent.com/Solidverse/web-resume-schema/main/schema.json',
      schema
    );

    const valid = validator.validate(data, schema);
    const errors = validator.getLastErrors();

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
