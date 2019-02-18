<template>
  <div class="app-container">
    <div v-for="item in firstLevel" :key="item.title" v-show="item.path !== '/home'">
      <div class="first-title">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </div>
      <div class="second-title">
        <div v-for="list in curSecondLevel(item.name)" :key="list.title" class="second-item">
          <router-link :to="list.path">【{{ list.meta.title }}>>】</router-link>
          <div v-for="ele in curArticleTitle(list.name)" :key="ele.title">
            <router-link :to="ele.path" class="article-title">{{ ele.meta.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'titleBlock',
  mounted() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'firstLevel',
      'secondLevel',
      'articleTitle',
      'curBread'
    ]),
  },
  methods: {
    getList() {
      this.$store.dispatch('GetList')
      this.$store.dispatch('GetCurBread')
    },
    curSecondLevel(name) {
      return this.secondLevel.filter(el => el.meta.type === name)
    },
    curArticleTitle(name) {
      let articles = this.articleTitle.filter(el => el.meta.type === name)
      return articles.slice(0, 5)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';

.app-container {
  line-height: 25px;
  .first-title {
    background-color: $themeBg;
    height: 25px;
    margin: 3px 0;
    padding: 0 6px;
    font-weight: 600;
  }
  .second-title {
    display: flex;
    flex-wrap: wrap;
    .second-item {
      padding: 0 10px;
      width: 50%;
      &:nth-child(odd) {
        position: relative;
        &::after {
          content: '';
          width: 1px;
          position: absolute;
          top: 28px;
          right: 0;
          bottom: 3px;
          background-color: rgba(187, 187, 187, 0.6);
        }
        .article-title {
          color: $ttColor;
        }
      }
      &:nth-child(even) {
        .article-title {
          color: $ttColor2;
        }
      }
    }
  }
}
</style>
