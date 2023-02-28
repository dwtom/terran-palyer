/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  globals: {
    // 全局声明
    electronAPIs: 'readonly',
  },
  rules: {
    // 'prettier/prettier': 'off',
    // 2空格缩进
    indent: ['error', 2, { SwitchCase: 1 }],
    // 4空格缩进
    // indent: [2, 4],
    'no-console': 'warn',
    'no-debugger': 2,
    // 可以不以const为优先
    'prefer-const': 'off',
    // 关键字前后空格
    'keyword-spacing': [2, { before: true, after: true }],
    // 构造函数首字母大写
    'new-cap': [2, { newIsCap: true, capIsNew: false }],

    // vue相关
    // 要求组件名称始终为 “-” 链接的单词
    'vue/multi-word-component-names': 'off',

    // ts相关
    // 允许使用@ts-ignore 忽略ts报错
    '@typescript-eslint/ban-ts-comment': 'off',
    // 允许使用require语句
    '@typescript-eslint/no-var-requires': 'off',
    // 允许any
    '@typescript-eslint/no-explicit-any': 'off',
    // 允许使用特定类型 如object
    '@typescript-eslint/ban-types': 'off',
    // 允许使用namespace
    '@typescript-eslint/no-namespace': 'off',
    // 允许导出函数和类的公共类方法隐式返回(axios api函数传入泛型隐式返回)
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
};
