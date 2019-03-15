<template>
  <div>
    <v-header></v-header>
    <bread-crumb></bread-crumb>
    <div class="article-layout">
      <morning-main class="border-bottom article-box app-container"></morning-main>
      <nav-search></nav-search>
      <v-footer></v-footer>
    </div>
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
