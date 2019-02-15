<template>
  <div class="app-container">
    <div>北京时间：{{ date }}</div>
    <div>@djlun</div>
  </div>
</template>

<script>
import { dateFormat } from '@/utils'
export default {
  name: 'vFooter',
  data() {
    return {
      date: dateFormat(new Date())
    }
  }
}
</script>

<style scoped lang="scss">
.app-container {
  height: 60px;
  line-height: 30px;
}
</style>
