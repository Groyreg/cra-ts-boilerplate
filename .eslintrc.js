module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  overrides: [
    // override "simple-import-sort" config
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // Packages `react` related packages come first.
              ['^react', '^@?\\w'],
              // Internal packages.
              ['^(@|components)(/.*|$)'],
              // Side effect imports.
              ['^\\u0000'],
              // Parent imports. Put `..` last.
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    react: {
      version: 'detect',
    },
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'simple-import-sort', 'sort-keys-fix', 'typescript-sort-keys', 'lint-local'],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    // return function type
    'import/extensions': [
      // initial config
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],

    'lint-local/custom-max-lines-per-function': [
      'error',
      {
        functionsMaxLines: 35,
        reactComponentMaxLines: 200,
        reactHooksCallbackMaxLines: 1,
      },
    ],
    'lint-local/group-hooks': ['error'],
    'lint-local/hooks-typings': 'error',
    'lint-local/no-inline-callbacks': 'error',
    'lint-local/no-literal-types': 'error',
    'lint-local/no-statement-inside-statements': 'error',
    'lint-local/sort-methods': 'error',
    'lint-local/spacing-control': 'error',
    'max-len': 'off',
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-unused-expressions': 'off',
    'no-use-before-define': 'off',
    'no-useless-return': 'error',
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {
          array: true,
          object: true,
        },
        VariableDeclarator: {
          array: true,
          object: true,
        },
      },
      {
        enforceForRenamedProperties: true,
      },
    ],
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts', '.js', '.jsx'] }], // initial config
    'react/jsx-one-expression-per-line': 'off', // conflict with prettier
    'react/jsx-sort-props': 'error',
    'react/react-in-jsx-scope': 'off', // initial config
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'sort-keys': ['error', 'asc', {
      allowLineSeparatedGroups: true, caseSensitive: true, minKeys: 2, natural: true,
    }],
    'sort-keys-fix/sort-keys-fix': 'error',
    'typescript-sort-keys/interface': 'error',
    'typescript-sort-keys/string-enum': 'error',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
