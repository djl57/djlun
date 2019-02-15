<template>
  <div>
    <div class="article-main">
      <v-header></v-header>
      <bread-crumb></bread-crumb>
      <second-title-block></second-title-block>
    </div>
    <nav-search></nav-search>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import BreadCrumb from '@/components/breadCrumb'
import SecondTitleBlock from '@/components/secondTitleBlock'
import NavSearch from '@/components/navSearch'
import VFooter from '@/components/vFooter'

export default {
  name: 'secondTitle',
  data() {
    return {
      
    }
  },
  components: {
    VHeader,
    BreadCrumb,
    SecondTitleBlock,
    VFooter,
    NavSearch
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.app-container {}
</style>
