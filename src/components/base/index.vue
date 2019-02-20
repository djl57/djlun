<template>
  <article-layout>
    <router-view class="app-container"></router-view>
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
