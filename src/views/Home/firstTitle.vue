<template>
  <div>
    <div class="article-main">
      <v-header></v-header>
      <bread-crumb></bread-crumb>
      <first-title-block></first-title-block>
    </div>
    <nav-search></nav-search>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import BreadCrumb from '@/components/breadCrumb'
import FirstTitleBlock from '@/components/firstTitleBlock'
import NavSearch from '@/components/navSearch'
import VFooter from '@/components/vFooter'

export default {
  name: 'firstTitle',
  data() {
    return {
      
    }
  },
  components: {
    VHeader,
    BreadCrumb,
    FirstTitleBlock,
    VFooter,
    NavSearch
  },
  methods: {
    
  }
}
</script>
