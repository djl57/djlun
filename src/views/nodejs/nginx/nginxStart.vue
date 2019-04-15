<template>
  <article class="app-box">
    <h2>碰到的问题</h2>
    <p>内网能访问，外网访问不了。解决：服务器安全组设置一下。</p>
    <p>Systen占用80端口（windows 2012 r2 数据中心版）。解决：关闭实例后，更换了系统盘（Windows 2008 r2 企业版），简单粗暴。</p>
    <p class="p">https://blog.csdn.net/zhang8907xiaoyue/article/details/78982612</p>
    <p>https://www.cnblogs.com/firstdream/p/8057646.html</p>

    <h2>使用nginx</h2>

    <h3>下载</h3>
    <p>https://nginx.org/en/download.html</p>
    <h3>安装</h3>
    <p>https://www.cnblogs.com/loong-hon/p/9060515.html</p>

    <h3>命令</h3>
    <p class="p"><pre>start nginx : 启动nginx
      nginx -s reload  ：修改配置后重新加载生效
      nginx -s reopen  ：重新打开日志文件
      nginx -t -c /path/to/nginx.conf 测试nginx配置文件是否正确

      tasklist /fi "imagename eq nginx.exe" 查看启动了多少nginx

      关闭nginx：
      nginx -s stop  :快速停止nginx
      nginx -s quit  ：完整有序的停止nginx</pre></p>

    <h3>配置说明</h3>
    <p>https://www.cnblogs.com/loong-hon/p/9060515.html</p>
    <p class="p">https://www.cnblogs.com/mecity/archive/2011/06/17/2082786.html</p>

    <h3>其他说明</h3>
    <p>cmd打开 方便实时更新配置，直接点击exe打开 不会自动更新修改的配置。</p>
    <p>可在server的html那里改变root的地址，改成index.html所在文件目录。</p>

  </article>
</template>

<script>
export default {
  name: 'nginxStart',
  data() {
    return {
      createTime: '2019-04-15 13:07:00'
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
.p {
  width: 100%;
  overflow: auto;
}
</style>
