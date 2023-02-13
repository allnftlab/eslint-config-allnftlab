module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "jsx-a11y",
    "eslint-plugin-import-helpers"
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        'printWidth': 80,
        'tabWidth': 2,
        'singleQuote': true,
        'trailingComma': 'all',
        'arrowParens': 'always',
        'semi': false,
        'endOfLine': 'auto',
      },
    ],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".tsx",
          ".ts"
        ]
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": [
      "error"
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "interface",
        "format": [
          "PascalCase"
        ],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      }
    ],
    "@typescript-eslint/camelcase": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "ts": "never",
        "tsx": "never"
      }
    ],
    "react/react-in-jsx-scope": "off",
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always", // new line between groups
        "groups": [
          "module",
          "parent",
          "/contexts/",
          "/hooks/",
          "/services/",
          "/components/",
          "/utils/",
          "/assets/",
          [
            "sibling",
            "index"
          ]
        ],
        "alphabetize": {
          "order": "asc",
          "ignoreCase": true
        }
      }
    ]
  },
  "settings": {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
    },
  }
}
