<template>
  <ul>
    <li v-for="item in characters" :key="item.name" class="item">
      <div class="left"><span v-html="item.desc[0]"></span> {{ item.name }}</div>
      <div class="right color2">
        <span class="block">{{ item.desc[0] }}</span> or
        <span class="block">{{ item.desc[1] }}</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'character',
  data() {
    return {
      characters: [
        { name: '空格', desc: [ '&nbsp;', '&#160;' ] },
        { name: '小于', desc: ['&lt;', '&#60;'] },
        { name: '大于', desc: ['&gt;', '&#62;'] },
        { name: '符号', desc: ['&amp;', '&#38;'] },
        { name: '双引号', desc: ['&quot;', '&#34;'] },
        { name: '版权', desc: ['&copy;', '&#169;'] },
        { name: '注册商标', desc: ['&reg;', '&#174;'] },
        { name: '乘号', desc: ['&times;', '&#215;'] },
        { name: '除号', desc: ['&divide;', '&#247;'] }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  display: flex;
  padding-right: 5px;
  line-height: 2em;
}
.right,
.left {
  padding-left: 1em;
}
.left {
  flex: 0 0 100px;
}
.right {
  flex: 1;
  .block {
    display: inline-block;
    width: 40%;
    text-align: center;
  }
}
</style>
