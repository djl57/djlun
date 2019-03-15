<template>
  <article  >
    <h2>什么是cookie？</h2>
    <p>（1）cookie保存在浏览器客户端</p>
    <p>（2）可以让我们用同一个浏览器访问同一个域名的时候共享数据</p>

    <h2>cookie能干什么？</h2>
    <p>（1）保存用户信息【比如我登录了淘宝，那我在浏览其他页面是都是登录状态】（http是无状态协议。服务器无法识别这是同一个浏览器在浏览同一个网站。每次访问，都是没有任何关系的。）</p>
    <p>（2）浏览的历史记录【淘宝的浏览的商品历史记录】</p>
    <p>（3）猜你喜欢的功能</p>
    <p>（4）10天免登陆</p>
    <p>（5）多个页面数据传递</p>
    <p>（6）cookie实现购物车功能</p>

    <h2>怎么用？</h2>
    <p>不需要安装第三方模块。</p>
    <h3>设置cookie：</h3>
    <p>ctx.cookies.set('name', value, [options])</p>
    <h3>获取cookie：</h3>
    <p>ctx.cookies.get('name')</p>

    <h2>后面三分之二没看</h2>
  </article>
</template>

<script>
export default {
  name: 'koajsCookie',
  data() {
    return {
      createTime: '2019-03-14 10:11:00'
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
