<template>
  <div>
    <ul class="tags">
      <div>标签名：{{ tagsRes[0].tagName }}</div>
      <div>作用：{{ tagsRes[0].action }}</div>
      <div>属性：</div>
      <p v-for="(item, index) in tagsRes[0].prop" :key="item">{{ index+1 }}、{{ item }}</p>
      <div>描述: </div>
      <p v-for="item in tagsRes[0].desc" :key="item" v-html="item"></p>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'tags',
  computed: {
    ...mapGetters([
      'tags'
    ]),
    tagsRes() {
      return this.tags.filter(el => el.tagName === this.$route.params.tagName)
    }
  }
}
</script>

<style scoped lang="scss">
.tags {
  line-height: 1.5em;
  white-space: pre-wrap;
  margin: 5px;
}
</style>
