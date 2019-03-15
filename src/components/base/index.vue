<template>
  <article-layout>
    <router-view></router-view>
  </article-layout>
</template>

<script>
import ArticleLayout from '@/components/articleLayout'
export default {
  name: 'htmlBases',
  components: {
    ArticleLayout
  }
}
</script>
