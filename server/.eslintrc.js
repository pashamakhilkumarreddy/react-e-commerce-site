module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2020': true,
    'node': true,
    'mongo': true,
  },
  'extends': [
    'google',
  ],
  'parserOptions': {
    'ecmaVersion': 11,
  },
  'rules': {
    'indent': ['error', 2],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
  },
};
