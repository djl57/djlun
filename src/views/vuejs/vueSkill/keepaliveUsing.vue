<template>
  <div class="app-container">
    <pre><code>{{ code }}</code></pre>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      code: `<keep-alive exclude="moviesDetail">
   <router-view></router-view>
</keep-alive>`
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
      'articleTitle'
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
