<template>
  <div class="titleBlock">
    <div v-for="item in firstLevel" :key="item.title" v-show="item.path !== '/home'">
      <div class="first-title">
        <router-link :to="item.path">{{ item.meta.title }}</router-link>
      </div>
      <div class="second-title">
        <div v-for="list in secondLevel" :key="list.title" v-show="list.meta.type === item.name" class="second-item">
          <router-link :to="list.path">【{{ list.meta.title }}>>】</router-link>
          <div v-for="ele in articleTitle" :key="ele.title" v-show="ele.meta.type === list.name">
            <router-link :to="ele.path">{{ ele.meta.title }}</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'titleBlock',
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
@import '../../styles/variables.scss';
.titleBlock {
  margin: 0 10px;
  line-height: 25px;
  .first-title {
    background-color: $themeBg;
    height: 25px;
    margin: 3px 0;
    padding: 0 10px;
    font-weight: 600;
  }
  .second-title {
    display: flex;
    flex-wrap: wrap;
    .second-item {
      padding: 0 10px;
      width: 50%;
    }
  }
}
</style>
