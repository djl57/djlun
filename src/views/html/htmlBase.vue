<template>
  <div  >
    <ul v-for="item in items" :key="item.head" class="index">
      <div class="bold">{{ item.head }}</div>
      <li v-for="(el,index) in item.eles" :key="index">
        <router-link v-if="typeof el === 'object'" :to="el.link" class="color">{{ el.content }}</router-link>
        <span v-else>{{ el }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      items: [
        {
          head: '一个 html 元素包括：',
          eles: [
            '    1.开始标签',
            '    2.结束标签',
            '    3.标签属性',
            '    4.文本内容'
          ]
        },
        {
          head: '一个完整的 html 页面包括：',
          eles: [
            '    1.文档类型 -- <!DOCTYPE html>',
            '    2.<html> 元素 -- <html></html>，根元素，包含了整个页面的内容。',
            '    3.<head> 元素 -- <head></head>',
            '    4.<meta charset="utf-8"> -- 这个元素指定了当前文档使用 UTF-8 字符编码',
            '    5.<title> 元素 -- <title></title>。这个元素设置页面的标题，显示在浏览器标签页上，同时作为收藏网页的描述文字。',
            '    6.<body> 元素 -- <body></body>。'
          ]
        },
        {
          head: '可用于<head>元素内的元素有: ',
          eles: [
            '    1.<title>',
            '    2.<base>',
            '    3.<link>',
            '    4.<style>',
            '    5.<meta>',
            '    6.<script>',
            '    7.<noscript>',
            '    8.<command>'
          ]
        }
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
.index {
  white-space: pre-wrap;
}
</style>
