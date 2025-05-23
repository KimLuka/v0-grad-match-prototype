import typescript from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import unusedImports from 'eslint-plugin-unused-imports'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import importPlugin from 'eslint-plugin-import'
import prettier from 'eslint-plugin-prettier'

export default [
  {
    ignores: [
      'dist',
      'webpack.*.js',
      'tsconfig.json',
      'public',
      'assets',
      '*.config.js',
      '*.config.ts',
      '*.config.mjs',
      '.next',
      'build',
      'node_modules',
      'coverage',
      '*.d.ts',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescript,
      react: react,
      'react-hooks': reactHooks,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
      import: importPlugin,
      prettier: prettier,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
      globals: {
        browser: true,
      },
    },
    settings: {
      react: {
        version: 'detect', // React 버전 자동 감지
      },
    },
    rules: {
      'no-var': 'error', // var 금지
      'no-multiple-empty-lines': 'error', // 여러 줄 공백 금지
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      eqeqeq: 'error', // 일치 연산자 강제
      'dot-notation': 'warn', // 점 표기법 강제
      'no-unused-vars': 'off', // 사용되지 않는 변수 금지
      '@typescript-eslint/no-unused-vars': ['error', { varsIgnorePattern: '_' }], // 사용되지 않는 변수 금지 (변수명 앞에 _ 붙이면 무시)
      'unused-imports/no-unused-imports': 'error', // 사용되지 않는 import 금지
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'react/react-in-jsx-scope': 'off', // React 네임스페이스 사용 금지
      'simple-import-sort/imports': 'error', // import문 자동 알파벳순 정렬
      'simple-import-sort/exports': 'error', // export문 자동 정렬
      'import/first': 'error', // import문 파일 상단에만 위치
      'import/newline-after-import': 'error', // import문 뒤 자동 줄 바꿈
      'import/no-duplicates': 'error', // 중복 import 금지
      'prettier/prettier': 'error',
    },
  },
]
