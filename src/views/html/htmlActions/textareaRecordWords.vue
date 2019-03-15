<template>
  <article  >
    <textarea ref="text" cols="30" rows="10" maxlength="100" 
    v-model="text" placeholder="请输入不超过100个字符"></textarea>
    <span>已输入{{ text.length }}/100</span>
    <p style="height:300px;"></p>
  </article>
</template>

<script>
export default {
  name: 'textareaRecordWords',
  data() {
    return {
      createTime: '2019-03-14 13:43:00',
      text: ''
    }
  },
  components: {
    
  },
  mounted() {
    
  },
  computed: {
    
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">

</style>
