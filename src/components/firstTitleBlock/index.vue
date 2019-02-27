<template>
  <div class="app-container">
    <div class="second-title">
      <div v-for="list in curSecondLevel" :key="list.title" class="second-item">
        <router-link :to="list.path">【{{ list.meta.title }}>>】</router-link>
        <div v-for="ele in curArticleTitle(list.name)" :key="ele.title" class="ellipsis">
          <router-link :to="ele.path" class="article-title">{{ ele.meta.title }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'firstTitleBlock',
  created() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'secondLevel',
      'articleTitle',
      'curBread'
    ]),
    curSecondLevel() {
      return this.secondLevel.filter(el => el.meta.type === this.curBread[1].name)
    }
  },
  methods: {
    getList() {
      this.$store.dispatch('GetList')
      this.$store.dispatch('GetCurBread')
    },
    curArticleTitle(name) {
      return this.articleTitle.filter(el => el.meta.type === name).slice(0, 10)
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';

.app-container {
  line-height: 25px;
  .second-title {
    display: flex;
    flex-wrap: wrap;
    .second-item {
      padding: 0 10px;
      width: 50%;
      &:nth-child(odd) {
        .article-title {
          color: $ttColor;
        }
      }
      &:nth-child(even) {
        position: relative;
        &::after {
          content: '';
          width: 1px;
          position: absolute;
          top: 28px;
          left: 0;
          bottom: 3px;
          transform: scaleX(0.5);
          background-color: rgba(187, 187, 187, 0.6);
        }
        .article-title {
          color: $ttColor2;
        }
      }
    }
  }
}
</style>
