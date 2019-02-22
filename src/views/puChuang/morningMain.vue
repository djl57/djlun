<template>
  <div class="app-container">
    <p v-show="curArticle" v-for="item in curArticle[0].content" :key="item" v-html="item"></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'morningMain',
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'curArticle'
    ])
  },
  methods: {
    getList() {
      this.$store.dispatch('GetCurArticle')
    }
  }
}
</script>

<style scoped lang="scss">
.app-container {
  white-space: pre-wrap;
}
</style>
