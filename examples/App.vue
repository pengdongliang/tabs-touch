<template>
  <div class="all_box">
    <!-- <div class="btn_div" :ripple="true">
      click me
    </div> -->
    <tabs-touch :navMsg="[1,2,3,4,5]">
      <index-channel-page slot="indexpage"></index-channel-page>
      <index-channel-page slot-scope="otherpage"></index-channel-page>
    </tabs-touch>
  </div>
</template>

<script>
const indexChannelPage = () =>
  import(/* webpackChunkName: "group-index" */ "./components/indexChannelPage.vue");

export default {
  components: {
    indexChannelPage
  },
  // mounted() {
  //   document.addEventListener(
  //     "click",
  //     function(e) {
  //       var target = e.target;
  //       var hasClass = target.attributes.getNamedItem("ripple")
  //       var isShowRipple = hasClass !== null && hasClass.nodeValue
  //       if(!isShowRipple) return false;
  //       var rect = target.getBoundingClientRect();
  //       var ripple = target.querySelector(".ripple");
  //       if (!ripple) {
  //         ripple = document.createElement("span");
  //         ripple.className = "ripple";
  //         ripple.style.height = ripple.style.width =
  //           Math.max(rect.width, rect.height) + "px";
  //         target.appendChild(ripple);
  //       }
  //       ripple.classList.remove("show");
  //       var top =
  //         e.pageY -
  //         rect.top -
  //         ripple.offsetHeight / 2 -
  //         document.body.scrollTop;
  //       var left =
  //         e.pageX -
  //         rect.left -
  //         ripple.offsetWidth / 2 -
  //         document.body.scrollLeft;
  //       ripple.style.top = top + "px";
  //       ripple.style.left = left + "px";
  //       ripple.classList.add("show");
  //       return false;
  //     },
  //     false
  //   );
  // }
};
</script>

<style>
.all_box {
  height: 300px;
}

.btn_div {
  position: relative;
  overflow: hidden;
  width: 160px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  font-size: 30px;
  margin: 40px auto;
  background-color: #fff;
  cursor: pointer;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}
/* .ripple {
  position: absolute;
  background: rgba(0, 0, 0, 0.15);
  border-radius: 100%;
  transform: scale(0);
  pointer-events: none;
}
.ripple.show {
  animation: ripple 0.75s ease-out;
}
@keyframes ripple {
  to {
    transform: scale(2);
    opacity: 0;
  }
} */
</style>
