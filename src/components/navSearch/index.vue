<template>
  <div class="app-container">
    <div class="nav">
      <div class="scroll">
        <span v-for="item in firstLevel" :key="item.path">
          <router-link :to="item.path">{{ item.meta.title }}</router-link>
        </span>
      </div>
    </div>
    <div class="search">
      搜索
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'navSearch',
  mounted() {
    this.getList()
  },
  components: {
    
  },
  computed: {
    ...mapGetters([
      'firstLevel'
    ])
  },
  methods: {
    getList() {
      this.$store.dispatch('GetList')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../styles/variables.scss';

.app-container {
  height: 60px;
  .nav, .search {
    height: 30px;
    line-height: 30px;
  }
  .nav {
    // overflow-y: hidden;
    overflow-x: auto;
    color: $ttColor;
    .scroll {
      white-space: nowrap;
      span {
        padding-right: 10px;
      }
    }
  }
  .search {

  }
}
</style>
