<template>
  <div class="app-container">
    <div>北京时间：{{ date }}</div>
    <div>&copy; djlun</div>
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
  height: 50px;
  line-height: 25px;
}
</style>
