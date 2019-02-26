<template>
  <article class="app-box">
    <aside :class="aside? 'aside':'none-aside'">
      <h1 @click="showAside">{{ catalog }}</h1>
      <div class="bold">container：</div>
      <ol>
        <li v-for="item in catalogs[0]" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
        </li>
      </ol>
      <div class="bold">item：</div>
      <ol>
        <li v-for="item in catalogs[1]" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
        </li>
      </ol>
    </aside>
    <main @click="hideCatalog">
      <section>
        <h2>了解</h2>
        <p>Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p>
      </section>
      <section>
        <h2>使用</h2>
        <section>
          <h3>任何一个容器都可以指定为 Flex 布局。</h3>
          <pre><code>.box{
  display: flex;
}</code></pre>
          <h3>行内元素也可以使用 Flex 布局。</h3>
          <pre><code>.box{
  display: inline-flex;
}</code></pre>
        </section>
        <h2>container</h2>
        <section>
          <h3 id="ca1">决定主轴的方向（即项目的排列方向）</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  flex-direction: row（默认） 
                | row-reverse 
                | column 
                | column-reverse;
}</code></pre>
            <p>从左往右 | 从右往左 | 从上到下 | 从下到上</p>
            <div class="bold">示例 flex-direction: column;</div>
            <ul class="flex-direction">
              <li v-for="item in directions" :key="item">{{ item }}</li>
            </ul>
          </section>
          <h3 id="ca2">换行方式</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}</code></pre>
            <p>不换行 | 换行，第一行在上方 | 换行，第一行在下方</p>
          </section>
          <h3 id="ca3">同时设置 排列和换行方式</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  flex-flow: &lt;flex-direction&gt; || &lt;flex-wrap&gt;;
}</code></pre>
            <p>排列方式 | 换行方式</p>
          </section>
          <h3 id="ca4">对齐方式</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  justify-content: flex-start 
                 | flex-end 
                 | center 
                 | space-between 
                 | space-around;
}</code></pre>
            <p>左对齐 | 右对齐 | 居中 | 两端对齐 | 两侧对齐（每个item两侧的间距都一样）</p>
          </section>
          <h3 id="ca5">在交叉轴上的对齐方式</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  align-items: flex-start 
             | flex-end 
             | center 
             | baseline 
             | stretch;
}</code></pre>
            <p>与交叉轴的起点对齐 | 与交叉轴的终点对齐 | 与交叉轴的中点对齐 | 与项目的第一行文字的基线对齐 | 如果项目未设置高度或设为auto，将占满整个容器的高度</p>
          </section>
          <h3 id="ca6">在交叉轴上的对齐方式</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.box {
  align-content: flex-start 
               | flex-end 
               | center 
               | space-between 
               | space-around 
               | stretch（默认）;
}</code></pre>
            <p>与交叉轴的起点对齐 | 与交叉轴的终点对齐 | 与交叉轴的中点对齐 | 与交叉轴两端对齐 | 每根轴线两侧的间隔都相等 | 轴线占满整个交叉轴</p>
          </section>
        </section>
        <h2>item</h2>
        <section>
          <h3 id="item1">item的排列顺序</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.item {
  order: &lt;integer&gt;
}</code></pre>
            <p>数值越小，排列越靠前，默认为0</p>
          </section>

          <h3 id="item2">放大比例</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.item {
  flex-grow: &lt;number&gt;;
}</code></pre>
            <p>默认为0，即如果存在剩余空间，也不放大；都为1，则它们将等分剩余空间（如果有的话）；如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍</p>
          </section>

          <h3 id="item3">缩小比例</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.item {
  flex-shrink: &lt;number&gt;
}</code></pre>
            <p>默认为1，即如果空间不足，该项目将缩小；都为1，当空间不足时，都将等比例缩小；如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</p>
          </section>

          <h3 id="item4">在分配多余空间之前，项目占据的主轴空间</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.item {
  flex-basis: &lt;length&gt; | auto;
}</code></pre>
            <p>浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。</p>
            <p>它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。</p>
          </section>

          <h3 id="item5">放大比例、缩小比例、主轴空间</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.item {
  flex: none 
      | auto
      | [ &lt;'flex-grow'&gt; &lt;'flex-shrink'&gt;? || &lt;'flex-basis'&gt; ]
}</code></pre>
            <p>0 0 auto（不放大、不缩小、主轴空间为项目本来大小） | 1 1 auto（放大缩小1倍、主轴空间为项目本来大小） | 放大比例、缩小比例（可选）、主轴空间（可选）</p>
            <p>默认值为0 1 auto，后两个属性可选。</p>
          </section>

          <h3 id="item6">单个项目有与其他项目不一样的对齐方式</h3>
          <section>
            <div class="bold">代码</div>
            <pre><code>.item {
  align-self: auto 
            | flex-start 
            | flex-end 
            | center 
            | baseline 
            | stretch;
}</code></pre>
            <p>可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch</p>
          </section>
        </section>
      </section>
    </main>
    <footer>
      <h2>参考</h2>
      <p><a href="http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?utm_source=tuicool">Flex 布局教程：语法篇</a></p>
    </footer>
  </article>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      createTime: '2019-02-25 14:59:00',
      directions: [
        'item1','item2','item3'
      ],
      catalogs: [
        [
          { id: 'ca1', text: '排列方式' },
          { id: 'ca2', text: '换行方式' },
          { id: 'ca3', text: '排列和换行方式' },
          { id: 'ca4', text: '对齐方式' },
          { id: 'ca5', text: '在交叉轴上的对齐方式' },
          { id: 'ca6', text: '排列方式' },
        ],
        [
          { id: 'item1', text: '排列顺序' },
          { id: 'item2', text: '放大比例' },
          { id: 'item3', text: '缩小比例' },
          { id: 'item4', text: '在分配多余空间之前，项目占据的主轴空间' },
          { id: 'item5', text: '放大比例、缩小比例、主轴空间' },
          { id: 'item6', text: '单个项目有与其他项目不一样的对齐方式' },
        ]
      ],
      aside: false,
      catalog: '目录'
    }
  },
  methods: {
    showAside() {
      this.aside = !this.aside
      this.aside ? this.catalog = '隐藏' : this.catalog = '目录';
    },
    hideCatalog() {
      this.aside = false
      this.catalog = '目录'
    }
  }
}
</script>

<style scoped lang="scss">
.flex-direction {
  display: flex;
  flex-direction: column;
}

.aside, .none-aside {
  position: fixed;
  top: 70px;
  width: 150px;
  padding: 5px;
  background-color: rgba(0, 150, 136, 0.5);
  color: #ffffff;
  border-radius: 5px;
  transition: right 0.7s;
  h1 {
    position: absolute;
    top: 30%;
    padding: 10px 0;
    border-radius: 8px;
    width: 50px;
    left: -56px;
    background-color: rgba(0, 150, 136, 0.5);
    color: #ffffff;
  }
}
.aside {
  right: 0;
}
.none-aside {
  right: -150px;
}
</style>
