<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view :key="key"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: 'none'
    }
  },
  computed: {
    key() {
      return this.$route.fullPath
    }
  },
  watch: {
    '$route' (to) {
      if (to.name !== 'page' 
       && to.name !== 'home' 
       && to.name !== undefined) {
        this.transitionName = 'slide-right'
        // const toDepth = to.path.split('/').length
        // const fromDepth = from.path.split('/').length
        // this.transitionName = toDepth < fromDepth ? 'slide-bottom' : 'slide-right'
      } else {
        this.transitionName = 'none'
      }
    }
  }
}
</script>

