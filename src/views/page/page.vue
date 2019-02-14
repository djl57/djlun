<template>
  <div class="page">
    <div class="page-count" @click="gotoHome">
      跳转 {{ count }} s
    </div>
    <div class="page-content">
      <div class="left">
        <div v-for="item in left" :key="item" class="left-item">{{ item }}：</div>
      </div>
      <div class="right">
        <div v-for="item in right" :key="item">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page',
  data() {
    return {
      left: ['UI来源', '代码编写'],
      right: ['晋江文学城', 'djlun'],
      count: 5
    }
  },
  mounted() {
    this.countDecrease()
  },
  components: {
    
  },
  methods: {
    countDecrease() {
      let time = setInterval(() => {
        this.count--
        if (!this.count) {
          clearInterval(time)
          setTimeout(() => {
            this.gotoHome()
          }, 1000)
        }
      }, 1000)
    },
    gotoHome() {
      this.$router.push({
        path: '/home'
      })
    }
  }
}
</script>

<style scoped lang="scss">
.page {
  min-height: 100vh;
  background-color: #ffffff;
  position: relative;
  .page-count {
    width: 70px;
    height: 20px;
    line-height: 20px;
    background-color: rgba(0, 0, 0, 0.3);
    color: #ffffff;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    margin: 10px;
    float: right;
  }
  .page-content {
    width: 200px;
    height: 200px;
    line-height: 32px;
    // background-color: #eeeeee;
    color: #7d7d7d;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -100px 0 0 -100px;
    display: flex;
    .left {
      width: 50%;
    }
    .right {
      width: 50%;
    }
  }
}
</style>
