<template>
  <div class="second-title border-bottom">
    <div v-for="ele in curArticleTitle" :key="ele.path">
      <router-link :to="ele.path" class="article-title">{{ ele.meta.title }}</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'secondTitleBlock',
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'articleTitle',
      'curBread'
    ]),
    curArticleTitle() {
      const len = this.curBread.length - 1
      return this.articleTitle.filter(el => el.meta.type === this.curBread[len].name)
    },
  },
  methods: {
    getList() {
      this.$store.dispatch('GetList')
      this.$store.dispatch('GetCurBread')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';

.second-title {
  line-height: 25px;
  padding-left: 12px;
  min-height: calc(100vh - 140px);
  .article-title {
    color: $ttColor;
  }
}
</style>
