#!/bin/bash

# Create a temporary directory to download the JSON schema file
mkdir -p schematemp

# Download the JSON schema file into the temp directory
wget https://raw.githubusercontent.com/Solidverse/web-resume-schema/main/schema.json -O schematemp/schema.json

# Generate TypeScript types from the schema
npx quicktype -s schema schematemp/schema.json -o schema/schemaImplementation.ts --top-level SchemaImplementation
npx quicktype --src schematemp/schema.json --out schema/schema.ts

# Cleanup the temporary directory
rm -rf schematemp