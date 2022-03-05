// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  presets: [
    ['taro', {
      framework: 'react',
      ts: true
    }],
    'linaria/babel'
  ],
  plugins: [
  ["import", {
    libraryName: "taro-ui",
    // libraryDirectory: "lib/components",
    // styleLibraryDirectory: "dist/style/components",
    customName: (name, file) => {
      const nameSection = name.split('-')
      if (nameSection.length === 4) {
        // 子组件的路径跟主组件一样
        nameSection.pop()
      }
  
      const path = nameSection.slice(1).join('-');
      // XXX: 如果报错，就在这里映射
      const fix = {
        'modal-content': 'modal/content',
        'modal-header': 'modal/header',
        'modal-action': 'modal/action',
      }[path]
      const fix1 = {
        'at-action-sheet-item': 'action-sheet/body/item'
      }[name]
      return `taro-ui/lib/components/${fix1 || fix || path}`;
    },
  }]
  ]
}
