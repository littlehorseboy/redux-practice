module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
  ],
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'linebreak-style': [
      'error',
      'windows',
    ],
    // 'class-methods-use-this': ['error', {
    //   exceptMethods: [
    //     'render',
    //     'getInitialState',
    //     'getDefaultProps',
    //     'componentWillMount',
    //     'componentDidMount',
    //     'componentWillReceiveProps',
    //     'shouldComponentUpdate',
    //     'componentWillUpdate',
    //     'componentDidUpdate',
    //     'componentWillUnmount',
    //   ],
    // }],
  },
};
