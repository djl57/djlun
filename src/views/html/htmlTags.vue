<template>
  <ul class="index">
    <li v-for="item in tags" :key="item.tagName">
      <router-link :to="item.tagName" class="color2">{{ item.content }} - {{ item.action }}</router-link>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
    }
  },
  components: {
    
  },
  mounted() {
    this.getList()
  },
  computed: {
    ...mapGetters([
      'firstLevel',
      'secondLevel',
      'articleTitle',
      'tags'
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

</style>
