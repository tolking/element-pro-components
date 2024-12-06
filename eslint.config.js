import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import vuelint from 'eslint-plugin-vue'
import prettierRecommended from 'eslint-plugin-prettier/recommended'
import prettierConfig from 'eslint-config-prettier'

export default tseslint.config(
  { ignores: ['lib/**', 'dist/**', 'types/**'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  prettierRecommended,
  ...vuelint.configs['flat/recommended'],
  {
    files: ['**/*.{ts,js,vue}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      'no-console': 'error',
      'no-debugger': 'error',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      quotes: ['error', 'single'],
      semi: ['error', 'never'],
      'vue/multi-word-component-names': 'off',
    },
  },
  {
    files: ['build/**/*.ts', 'demo/**/*.vue', 'docs/**/*.vue'],
    rules: {
      'no-console': 'off',
      'no-debugger': 'off',
    },
  },
  prettierConfig,
)
