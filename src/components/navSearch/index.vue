<template>
  <div class="nav-search">
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
.nav-search {
  margin: 0 10px;
  height: 70px;
  .nav, .search {
    height: 35px;
    line-height: 35px;
  }
  .nav {
    // overflow-y: hidden;
    overflow-x: scroll;
    .scroll {
      white-space: nowrap;
      span {
        padding: 0 10px;
      }
    }
  }
  .search {

  }
}
</style>
