/* eslint-env node */
// require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  //   root: true,
  //   extends: [
  //     'plugin:vue/vue3-essential',
  //     'eslint:recommended',
  //     '@vue/eslint-config-prettier/skip-formatting'
  //   ],
  //   parserOptions: {
  //     ecmaVersion: 'latest'
  //   }
  parserOptions: {
    ecmaVersion: 2020, // 你可以設置為你需要的 ECMAScript 版本
    sourceType: 'module' // 這個選項允許你使用 import/export 語法
  }
}
