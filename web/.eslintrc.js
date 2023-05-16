module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
    },
    env: {
        node: true
    },
    ignorePatterns: ['.eslintrc.js'],
    extends: [
        // 'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:vue/vue3-recommended',
        '@vue/typescript/recommended',
        // 'prettier'
        'plugin:prettier/recommended'
    ],
    rules: {
        'quotes': ['error', 'single'],
        'no-undef': 'off',
        'vue/multi-word-component-names': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'vue/component-name-in-template-casing': ['error', 'PascalCase']
    }
};
