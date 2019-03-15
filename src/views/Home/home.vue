<template>
  <div class="home">
  <!-- <div class="home" @touchmove="navMove" @touchstart="navstart"> -->
    <div class="home-icon">
      <svg-icon :icon-class="iconClass" />
      <span class="home-left">Today is {{iconClass}}.</span>
    </div>
    <nav-search class="border-bottom"></nav-search>
    <!-- <msg-roll></msg-roll> -->
    <div class="home-box">
      <title-block></title-block>
      <div class="border-top">
        <v-footer></v-footer>
      </div>
    </div>
    <!-- <nav-search :class="topNavShow? 'top-nav' : 'top-nav-none'"></nav-search> -->
  </div>
</template>

<script>
import icons from './getIcons'
import NavSearch from '@/components/navSearch'
// import MsgRoll from '@/components/msgRoll'
import TitleBlock from '@/components/titleBlock'
import VFooter from '@/components/vFooter'
  
export default {
  name: 'home',
  components: {
    NavSearch,
    // MsgRoll,
    TitleBlock,
    VFooter
  },
  data() {
    return {
      icons: icons,
      startY: 0,
      endY: 0,
      moveY: 0,
      topNavShow: false
    }
  },
  computed: {
    iconClass() {
      return this.icons[new Date().getDate() % 19]
    }
  },
  methods: {
    navMove(ev) {
      /* 
       逻辑梳理:
       （1）头好痛，不管了
       */
      console.log('startY',this.startY)
      console.log('endY',this.endY)
      if (this.startY - this.endY > 0) {
        this.endY ? this.end = ev.targetTouches[0].screenY : null
        let distanch = this.startY - this.endY
        // console.log(distanch)
        distanch > 50 ? this.topNavShow = true : this.topNavShow = false
      } else {
        console.log('1')
        this.endY = this.startY
      }
    },
    navstart(ev) {
      this.startY = ev.targetTouches[0].screenY
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home-icon {
    height: 40px;
    line-height: 40px;
    margin: 0 10px;
    .svg-icon {
      vertical-align: middle;
    }
    .home-left {
      padding-left: 5px;
    }
    .home-right {
      float: right;
      padding-right: 5px;
    }
  }
  .top-nav-none {
    opacity: 0;
  }
  .top-nav {
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #ffffff;
  }
}
</style>
