<template>
  <div class="app-container">
    <p v-for="item in Scores" :key="item.name">
      {{ item.name }} - {{ item.score }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      Scores: [
        { name: '2008行测1230', score: '47/130' }
      ]
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
