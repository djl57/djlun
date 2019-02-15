<template>
  <div class="morningBooks">
    <div class="article-main">
      <v-header></v-header>
      <bread-crumb></bread-crumb>
      <morning-main></morning-main>
    </div>
    <nav-search></nav-search>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import BreadCrumb from '@/components/breadCrumb'
import MorningMain from './morningMain'
import NavSearch from '@/components/navSearch'
import VFooter from '@/components/vFooter'

export default {
  name: 'morningBooks',
  data() {
    return {
      
    }
  },
  components: {
    VHeader,
    BreadCrumb,
    VFooter,
    NavSearch,
    MorningMain
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
</style>
