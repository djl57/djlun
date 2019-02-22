<template>
  <div class="app-container">
    <span v-for="item in curBread" :key="item.name" class="breadCrumb-item">
      <router-link :to="item.path" class="color"><span class="title">{{ item.meta.title }}</span></router-link>
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
    &:not(:last-child) {
      &::after {
        content: ' / '
      }
    }
    // .title {
    //   display: inline-block;
    //   width: 20%;
    //   overflow: hidden;
    //   white-space: nowrap;
    //   text-overflow: ellipsis;
    // }
  }
}
</style>
