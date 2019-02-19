<template>
  <div class="home">
    <div class="home-main">
      <div class="home-icon">
        <svg-icon :icon-class="iconClass" />
        <span class="home-left">Today is {{iconClass}}.</span>
        <!-- <span class="home-right">SUMMARY</span> -->
      </div>
      <nav-search></nav-search>
      <!-- <msg-roll></msg-roll> -->
      <title-block></title-block>
    </div>
    <v-footer></v-footer>
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
      icons: icons
    }
  },
  computed: {
    iconClass() {
      return this.icons[new Date().getDate() % 19]
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home-icon {
    height: 50px;
    line-height: 50px;
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
}
</style>
