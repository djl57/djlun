<template>
  <div>
    <v-header></v-header>
    <bread-crumb></bread-crumb>
    <div class="article-layout">
      <div class="border-bottom article-box app-container">
        <slot></slot>
      </div>
      <nav-search></nav-search>
      <v-footer></v-footer>
    </div>
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
