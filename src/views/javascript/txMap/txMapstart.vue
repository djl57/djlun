<template>
  <article class="app-box">
    <pre><code>{{ map01 }}</code></pre>
  </article>
</template>

<script>
export default {
  name: 'txMapstart',
  data() {
    return {
      createTime: '2019-03-22 15:55:00',
      map01: `uh {      // qq.maps.event.addListener(map, 'click', function(e) {console.log(e)});
  cursorPixel: {       // 鼠标点击的位置，相对于浏览器屏幕
    x: 436, 
    y: 233
  }
  latLng: {      // 以纬度和经度表示的地理坐标点
    lat: 40.54720023441049, 
    lng: 116.4495849609375
  }
  pixel: {      // 不知道什么意思，但是值和鼠标点击的位置（cursorPixel）一样
    x: 436, 
    y: 233
  }
  _a: {      // 不知道什么意思，但是值和地理坐标点（latLng）一样
    lat: 40.54720023441049,
    lng: 116.4495849609375
  }
  __proto__: Object
}`
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
