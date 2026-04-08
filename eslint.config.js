import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.js'],
    languageOptions: {
      globals: {
        window: 'readonly',
        document: 'readonly',
        alert: 'readonly',
        localStorage: 'readonly',
        fetch: 'readonly',
        console: 'readonly',
      },
    },
  },
];
