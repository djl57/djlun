<template>
  <div>
    <ul class="tags">
      <div><span class="bold">标签名：</span>{{ tagsRes[0].content }}</div>
      <div><span class="bold">作用：</span>{{ tagsRes[0].action }}</div>
      <div><span class="bold">属性：</span></div>
      <p v-for="(item, index) in tagsRes[0].prop" :key="item"> {{ index+1 }}、{{ item }}</p>
      <div><span class="bold">描述：</span></div>
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
  white-space: pre-wrap;
  margin: 5px;
}
</style>
