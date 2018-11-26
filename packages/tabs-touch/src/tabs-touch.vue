<template>
  <div class="main_tabs_touch">
    <!-- Tab切换（高度自适应） -->
    <div id="tabBox1" class="tabBox flex_1 flex flex_v"  v-if="navMsg.length">
      <div class="tab_container" :style="'height:' + tabHeight + 'px;' + (scrollFixed ? 'position: fixed; top: 0; left: 0; width: 100%;' : '')">
        <div class="nav_tabs_container">
          <div ref="nav_box" class="nav_box">
            <div v-for="(item, index) in navMsg" :key="item" class="nav_tabs_item vux-center" :style="(navMsg.length > 2 && showRightMore && index === (navMsg.length - 1)? 'margin-right:' + navItemWidth + 'px;' : '') + (navIndex === index ? 'color: red;' : 'color: #333;') + 'width:' + navItemWidth + 'px;' + navItemCssText" @click="navIndex = index">
              <div class="flex flex_pack_center flex_align_center" :ripple="true">{{item}}</div>
            </div>
            <div class="nav_tabs_line transition_ease_in_out_fast" :style="'left:' + ((navItemWidth - navLineWidth) / 2 + (navIndex * navItemWidth)) + 'px; width: ' + navLineWidth + 'px;' + navLineCssText"></div>
          </div>
        </div>
        <div v-if="showMoreChannel" class="channel_container flex flex_align_center flex_pack_justify_between padding16 overflow_boxsizing font_24">
          <div style="padding-left: 20px;">{{allTabsTitle}}</div>
        </div>
        <!-- 右箭头 -->
        <div class="flex tab_right_btn" v-if="showRightMore">
          <div class="channel_box channel_opacity"></div>
          <div class="channel_box flex flex_align_center flex_pack_center" style="position: relative; z-index: 99999;" @click="changeChannelState">
            <div :class="[showMoreChannel ? 'ios-arrow-isUp' : '', 'flex', 'flex_align_center']">
              <svg type="ios-arrow-down" size="30" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512" class="vux-x-icon vux-x-icon-ios-arrow-down">
                <path d="M396.6 160l19.4 20.7L256 352 96 180.7l19.3-20.7L256 310.5z"></path>
              </svg>
            </div>
          </div>
        </div>
        <!-- 全部列表 -->
        <div class="more_channel_list_container" @touchmove.prevent v-show="showMoreChannel" @click="closeChannel">
          <transition name="move" mode="out-in" :appear="true">
            <div class="more_channel_list_box" v-show="showMoreChannel">
              <div class="channel_item line_over_1" :style="{'border-color': navIndex === index ? 'rgb(252, 55, 140)' : '#e3e4e3'}" v-for="(item, index) in navMsg" :key="index" @click="changeNavSlide(index)">
                {{item}}
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="tempWrap flex_1" :style="'overflow:hidden; overflow-y: auto; position:relative;' + (scrollFixed ? 'padding-top:' + tabHeight +'px;' : '')">
        <!-- 高度自适应需添加外层 -->
        <div class="bd" id="tabBox1-bd" style="height: 100%;">
          <!-- 添加id，js用到 -->
          <div class="con">
            <slot name="indexpage"></slot>
          </div>
          <div class="con" v-for="(nodeItem, nodeIndex) in navMsg" v-if="nodeIndex > 0" :key="nodeIndex">
            <vue-lazy-component direction="horizontal" :viewport="$parent.$el" style="height: 100%;" class="vue_lazy_container">
              <slot v-bind:otherpage="nodeItem" v-show="nodeIndex === navIndex || nodeIndex === (navIndex - 1) || nodeIndex === (navIndex + 1)"></slot>
            </vue-lazy-component>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>
@import "./assets/common.css";
.main_tabs_touch{
  overflow: hidden;
  height: 100%;
  box-sizing: border-box;
}
.main_tabs_touch > .tabBox{
  height: 100%;
}
/* 页面滑动切换tab start*/
.tabBox .bd ul {
  padding: 10px;
}
.tabBox .bd ul li {
  border-bottom: 1px dotted #ddd;
}
.tabBox .bd li a {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
} /* 去掉链接触摸高亮 */
.readMore {
  display: block;
  height: 30px;
  line-height: 30px;
  margin: 10px auto 20px auto;
  text-align: center;
  text-decoration: underline;
}
/* 页面滑动切换tab end*/
.tab_container {
  color: #333;
  position: relative;
  z-index: 8;
}
.nav_tabs_container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid #eee;
  background-color: #fff;
}
.nav_tabs_container > div {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  height: 120%;
}
.nav_tabs_item {
  display: inline-block;
  height: 100%;
  font-size: 28px;
}
.nav_tabs_item > div {
  width: 100%;
  height: 80%;
}
.nav_tabs_line {
  position: absolute;
  left: 0;
  top: 75%;
  z-index: 9;
}
.vux-tab-wrap {
  padding-top: 88px;
}
.channel_container {
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 88px;
  z-index: 9999;
}
.channel_box {
  width: 88px;
  height: 88px;
  background-color: #fff;
}
.channel_opacity {
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1)
  );
}
.vux-x-icon-ios-arrow-down {
  fill: #999999;
  transition: all 0.3s ease-in;
}
.tab_right_btn {
  background-color: #fff;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 88px;
  z-index: 9999;
  background-color: transparent;
  width: 176px;
}
.ios-arrow-isUp {
  transform: rotateZ(180deg);
}
/* 全部频道 */
.more_channel_list_container {
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 99;
}
.more_channel_list_box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #fff;
  padding: 0 20px 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.1s ease-in;
}
.channel_item {
  font-size: 26px;
  color: #808080;
  padding: 10px 4px;
  box-sizing: border-box;
  border-radius: 10px;
  border: 1px solid rgb(227, 228, 227);
  width: 20%;
  text-align: center;
  margin: 20px 2.5% 0;
}
.move-enter,
.move-leave-to {
  top: -200px;
}
.move-enter-to,
.move-leave {
  top: 0;
}
/*涟漪*/
.btn_nav_tabs {
  position: relative;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
</style>


<script>
import Vue from "vue";
import TouchSlide from "./utils/TouchSlide.js";
import VueLazyComponent from "@xunlei/vue-lazy-component";
Vue.use(VueLazyComponent);

export default {
  name: "tabsTouch",
  props: {
    allTabsTitle: {
      type: String,
      default: "全部"
    },
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
      default:
        "border-radius: 16px; background-color: #f00;height: 3px; top: 77%;"
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
  },
  components: {
  },
  watch: {
    navIndex(newVal, oldVal) {
      this.$refs.nav_box.scrollLeft =
        this.$refs.nav_box.children[newVal].offsetLeft -
        (document.body.clientWidth - this.navItemWidth) / 2;
    }
  },
  data() {
    return {
      navIndex: 0, //当前选中的下标
      showMoreChannel: false //是否全部频道
    };
  },
  methods: {
    changeChannelState() {
      this.showMoreChannel = !this.showMoreChannel;
    },
    changeNavSlide(idx) {
      this.$refs.nav_box.children[idx].click();
    },
    closeChannel(e) {
      if (e.target.className === "more_channel_list_box") {
        return;
      }
      this.showMoreChannel = false;
    }
  },
  created() {
    document.addEventListener(
      "click",
      function(e) {
        var target = e.target;
        var hasClass = target.attributes.getNamedItem("ripple");
        var isShowRipple = hasClass !== null && hasClass.nodeValue;
        if (!isShowRipple) return false;
        target.classList += " btn_nav_tabs"
        var rect = target.getBoundingClientRect();
        var ripple = target.querySelector(".ripple");
        if (!ripple) {
          ripple = document.createElement("span");
          ripple.className = "ripple";
          ripple.style.height = ripple.style.width =
            Math.max(rect.width, rect.height) + "px";
          target.appendChild(ripple);
        }
        ripple.classList.remove("show");
        var top =
          e.pageY -
          rect.top -
          ripple.offsetHeight / 2 -
          document.body.scrollTop;
        var left =
          e.pageX -
          rect.left -
          ripple.offsetWidth / 2 -
          document.body.scrollLeft;
        ripple.style.top = top + "px";
        ripple.style.left = left + "px";
        ripple.classList.add("show");
        return false;
      },
      false
    );
  },
  mounted() {
    TouchSlide({
      noTouchIndex: this.noTouchIndex,
      slideCell: "#tabBox1",
      titCell: ".vux-center",
      defaultIndex: this.navIndex,
      vueSlide: "navIndex",
      vueObj: this,
      endFun: function(i) {
        //高度自适应
        var bd = document.getElementById("tabBox1-bd");
        bd.parentNode.style.height =
          bd.children[i].children[0] &&
          bd.children[i].children[0].offsetHeight + "px";
        if (i > 0) bd.parentNode.style.transition = "200ms"; //添加动画效果
      }
    });
  }
};
</script>
