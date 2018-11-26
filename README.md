# tabs-touch

> 基于Vue的滑动切换页面和tab

[DEMO 演示](https://github.com/pengdongliang/tabs-touch)

## 安装

``` bash
$ npm install tabs-touch -S
```
```
vue-cli3安装推荐（ vue add tabs-touch ）
```
## 使用

在 `main.js` 文件中引入插件并注册

``` bash
# main.js
import tabstouch from 'tabs-touch'
Vue.use(tabstouch)
```

在项目中使用 tabstouch

```js
<template>
  <tabs-touch /*v-if="navMsg.length" navMsg="navMsg"*/>
    <!--第一页主页面-->
    <组件或者div slot="indexpage"> 
    <!--其他页面-->
    <组件或者div slot-scope="otherpage"> 
  </tabs-touch>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>
```
#props参数

```js
  props: {
    tabHeight: {
      //tab高度
      type: [String, Number],
      default: 44
    },
    scrollFixed: {
      //是否固定顶部
      type: Boolean,
      default: false
    },
    navLineWidth: {
      //tab下划线元素宽度
      type: [String, Number],
      default: 60
    },
    navLineCssText: {
      //tab下划线元素样式
      type: String,
      default: "border-radius: 16px; background-color: #f00;height: 3px; top: 77%;"
    },
    navItemCssText: {
      //tab元素样式
      type: String,
      default: "background-color: #fff;"
    },
    navItemWidth: {
      //tab元素宽度
      type: [String, Number],
      default: 100
    },
    showRightMore: {
      //是否展示右边的更多按钮
      type: Boolean,
      default: true
    },
    noTouchIndex: {
      //规定第几页不可以滑动
      type: Array,
      default: () => []
    },
    navMsg: {
      //tabs数据
      type: Array,
      default: () => []
    }
  }
```
## 特点
1. 简单易用，模仿原生APP手势滑动切换页面和tab
2. 提供以 `npm` 的形式安装提供全局组件

