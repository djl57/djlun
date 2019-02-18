<template>
  <div class="article-layout">
    <div class="article-main">
      <v-header></v-header>
      <bread-crumb></bread-crumb>
      <slot></slot>
    </div>
    <nav-search></nav-search>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '@/components/header'
import BreadCrumb from '@/components/breadCrumb'
import NavSearch from '@/components/navSearch'
import VFooter from '@/components/vFooter'

export default {
  name: 'article-layout',
  data() {
    return {
      
    }
  },
  components: {
    VHeader,
    BreadCrumb,
    VFooter,
    NavSearch
  },
  methods: {
    
  }
}
</script>
