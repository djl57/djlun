<template>
  <article class='app-box'>
    <aside :class="aside? 'aside':'none-aside'">
      <h1 @click="showAside">{{ catalog }}</h1>
      <ul>
        <li v-for="item in catalogs" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
        </li>
      </ul>
    </aside>
    <header>
      <h1>申论的规矩</h1>
    </header>
    <main @click="hideCatalog">
      <section>
        <h2 id="ca1">考察四个能力</h2>
        <h3>1. 阅读理解能力</h3>
        <p>通过阅读获取信息、理解资料的能力。</p>
        <!-- <p>
          要求<span class="err">全面</span>把握给定资料的内容：不要遗漏信息点；
          <span class="err">正确</span>理解给定资料的含义，<span class="err">准确</span>提炼事实所包含的观点：
          作答要以资料为根本，呈现答案时优先用资料中的原词，完全脱离资料阐述自己的观点是不可取的。
        </p> -->
        <h3>2. 综合分析能力</h3>
        <p>在阅读的基础上对资料反映的事件、问题等有进一步思考、理解和剖析的能力。</p>
        <!-- <p>对给定资料的全部或部分内容、观点或问题进行<span class="err">分析和归纳</span>：</p>
        <p>多角度地思考资料内容，做出<span class="err">合理的推断或评价</span>：</p> -->
        <h3>3. 提出和解决问题能力</h3>
        <p>提出对策、解决困难的能力</p>
        <h3>4. 文字表达</h3>
        <P>运用语言文字阐明自己的观点、意见或抒发思想、感情的能力。</P>
      </section>
      <section>
        <h2 id="ca2">答题要素</h2>
        <p>在答题过程中，应先明确答题要素，以便更有针对性地在资料中寻找相关答案信息</p>
        <section>
          <h3>1. 问题</h3>
          <p>主要指负面的现象或事件。比如资料中揭露和抨击社会中的不良作风、腐化思想、错误行为、落后观念等内容。问题往往以消极的词汇来体现。</p>
          <div class="bold">词汇积累：</div>
          <p>{{ catalogs[1].vocabularies[0] }}</p>
        </section>
        <section>
          <h3>2. 危害</h3>
          <p>危害是指问题所带来的一些负面的、消极的、恶劣的社会影响，强调的是一种不好的结果。</p>
          <div class="bold">标志性表述：</div>
          <p>{{ catalogs[2].vocabularies[0] }}</p>
          <div class="bold">词汇积累</div>
          <p>{{ catalogs[2].vocabularies[1] }}</p>
        </section>
      </section>
    </main>
  </article>
</template>

<script>
export default {
  data() {
    return {
      catalogs: [
        { id: 'ca1', text: '考察四个能力' },
        { id: 'ca2', text: '答题要素', vocabularies: [
          `（处理、监督）不到位、（处理）不及时、（资金）不足、（法律）不完善、（规划）不科学、（监管）缺乏、
          （垃圾回收设施）少、（垃圾分类）意识薄弱、（规划）不合理、（选址）不当`
        ] },
        { id: 'ca3', text: '排列和换行方式', vocabularies: [
          `不利于（）、影响了（）、损害了（）、破坏了（）、引发（交通事故）、导致（）`,
          `产生（安全隐患）`
        ] },
        { id: 'ca4', text: '对齐方式' },
        { id: 'ca5', text: '在交叉轴上的对齐方式' },
        { id: 'ca6', text: '排列方式' },
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

<style lang='scss'>

</style>
