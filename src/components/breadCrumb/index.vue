<template>
  <div class="app-container">
    <span v-for="item in curBread" :key="item.name" class="breadCrumb-item">
      <router-link :to="item.path">{{ item.meta.title }}</router-link>
    </span> 
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'breadCrumb',
  mounted() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'firstLevel',
      'secondLevel',
      'articleTitle',
      'curBread'
    ])
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
@import '../../styles/variables';

.app-container {
  height: 30px;
  line-height: 30px;
  padding-left: 6px;
  background-color: $themeBg;
  .breadCrumb-item {
    &:first-child {
      color: $ttColor;
    }
    &:last-child {
      &::before {
        content: ' / '
      }
    }
  }
}
</style>
