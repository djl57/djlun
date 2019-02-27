<template>
  <div class="app-box">
    <h1>{{ curArticle[0].title }}</h1>
    <p class="color2">总字数：{{ fontsize }}（包括标点符号）</p>
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
    ]),
    fontsize() {
      let p = this.curArticle[0].content
      let sum = 0
      for (let prop of p) {
        sum = sum + prop.length
      }
      return sum
    }
  },
  methods: {
    getList() {
      this.$store.dispatch('GetCurArticle')
    },
  }
}
</script>
