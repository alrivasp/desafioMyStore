module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'productoion' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'productoion' ? 'warn' : 'off'
  }
}
