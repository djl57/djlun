<template>
  <div class="home">
    <div class="home-icon">
      <svg-icon :icon-class="iconClass" />
      <span>Today is {{iconClass}}.</span>
    </div>
    <nav-search></nav-search>
    <msg-roll></msg-roll>
    <title-block></title-block>
  </div>
</template>

<script>
import icons from './getIcons'
import NavSearch from '@/components/navSearch'
import MsgRoll from '@/components/msgRoll'
import TitleBlock from '@/components/titleBlock'
  
export default {
  name: 'home',
  components: {
    NavSearch,
    MsgRoll,
    TitleBlock
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
    span {
      padding-left: 10px;
    }
  }
}
</style>
