module.exports = {
  "parserOptions": {
  "ecmaVersion": 2017,
  "sourceType": "module",
},
"parser": "babel-eslint",
"env": {
  "es6": true
},
  "extends": "google",
  "rules": {
    'no-unused-vars': [1, {args: 'none'}],
    'require-jsdoc': 0,
    'jsx-quotes': [2, 'prefer-double'],
    'no-invalid-this': 1,
    'eol-last': 0
  }
};

