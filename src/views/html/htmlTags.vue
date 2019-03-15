<template>
  <ul  >
    <li v-for="item in tags" :key="item.tagName">
      <router-link :to="item.tagName">{{ item.content }} <span class="color2 index-item">{{ item.action }}</span></router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'htmlTags',
  computed: {
    ...mapGetters([
      'tags'
    ])
  }
}
</script>

<style scoped lang="scss">
.index-item {
  float: right;
  padding-right: 5px;
}
</style>
