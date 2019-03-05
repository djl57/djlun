<template>
  <article class="app-box">
    <header>
      <h1>移动端1px直线</h1>
    </header>
    <main>
      <section>
        <h2>问题</h2>
        <p>移动端1px直线显示较粗。</p>
      </section>
      <section>
        <h2>原因</h2>
        <section>
          <h3>前置知识</h3>
          <div class="bold">设备像素比</div>
          <code>window.devicePixelRatio</code>
          <div class="bold">定义</div>
          <blockquote>
            <p>window.devicePixelRatio是设备上物理像素和设备独立像素(device-independent pixels (dips))的比例。</p>
            <p>公式表示就是：window.devicePixelRatio = 物理像素 / dips</p>
          </blockquote>
        </section>
        <section>
          <h3>说明</h3>
          <p>在编写移动端页面时会添加代码：<code>{{ reason }}</code></p>
          <p>比如：iphone5的设备物理像素是640px，而它的设备独立像素为320px，所以它的devicePixelRatio为2。</p>
        </section>
      </section>
      <section>
        <h2>解决方法</h2>
        <section>
          <h3>说明</h3>
          <p>大多数设备的devicePixelRatio为2，所以想办法用css把1px的直线减半。</p>
        </section>
        <section>
          <h3>代码</h3>
          <div class="bold">方法一：</div>
          <pre><code>@mixin border-top($color) {
  position: relative;
  &amp;::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    transform: scaleY(0.5);
    background-color: $color;
  }
}</code></pre>
          <div class="box border-top border-bottom">这是一个100*100的框框，设置了上下边框。</div>
          <div class="bold">缺点：</div>
          <p>不能上下左右同时设置</p>
          <p>不能设置圆角</p>
          <p>适用于只需要一条边框的需求</p>
        </section>
        <section>
          <h3>方法二：</h3>
          <pre><code>@mixin border($color) {
  position: relative;
  &amp;::after {
    content: '';
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 0;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
    transform: scale(0.5,0.5);
    transform-origin: top left;
  }
}</code></pre>
          <div class="box border"></div> 对比
          <div class="box border2"></div>
          <div class="bold">优点：</div>
          <p>可以设置圆角</p>
        </section>
        <section>
          <h3>方法三：</h3>
          <pre><code>/* 2倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 2.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
    }
}
/* 3倍屏 */
@media only screen and (-webkit-min-device-pixel-ratio: 3.0) {
    .border-bottom::after {
        -webkit-transform: scaleY(0.33);
        transform: scaleY(0.33);
    }
}</code></pre>
          <p>终极方案，对移动端适配要求特别高时使用。</p>
        </section>
      </section>
    </main>
    <footer>
      <h2>摘抄</h2>
      <p><a href="https://www.zhangxinxu.com/wordpress/2012/08/window-devicepixelratio/">设备像素比devicePixelRatio简单介绍</a></p>
      <p><a href="https://www.jianshu.com/p/31f8907637a6">移动端 1px 像素问题及解决办法</a></p>
    </footer>
  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: '',
  data() {
    return {
      createTime: '2019-2-21 09:51:00',
      reason: '<meta name="viewport" content="width=device-width">'
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
.box {
  width: 100px;
  height: 100px;
  display: inline-block;
}
.border2 {
  display: inline-block;
  margin-left: 10px;
  border: 1px solid rgba(187, 187, 187, 0.6);
}
</style>
