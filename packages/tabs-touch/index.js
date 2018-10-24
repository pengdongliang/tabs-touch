// 导入组件
import tabsTouch from './src/tabs-touch.vue'

// 为组件提供 install 安装方法，供按需引入
tabsTouch.install = function (Vue) {
  Vue.component(tabsTouch.name, tabsTouch)
}

// 默认导出组件
export default tabsTouch