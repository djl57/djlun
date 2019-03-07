<template>
  <div class="app-box">
    <aside :class="aside? 'aside':'none-aside'">
      <h1 @click="showAside">{{ catalog }}</h1>
      <ol>
        <li v-for="item in catalogs" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
          <div v-if="item.children">
            <div v-for="el in item.children" :key="el.id" class="padding-left10">
              <a :href="'#'+el.id">{{ el.text }}</a>
              <div v-if="el.items">
                <div v-for="list in el.items" :key="list.id">
                  <a :href="'#'+list.id">{{ list.text }}</a>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ol>
    </aside>
    <main @click="hideCatalog">
      <p>四大题型：1、图形推理；2、类比推理；3、定义判断；4、逻辑判断</p>
      <section>
        <h2 id="ca1">图形推理</h2>
        <div class="bold">命题形式：</div>
        <p>1、一组图：从左往右（优先），135，246；
          2、两组图：分开找规律，第一组图找到规律，第二组图运用规律；
          3、九宫格：横着90%（第一行找规律，第二行验证，第三行用）、竖着；
          4、分组分类：比如给六个图，123一类，456一类；
          5、空间类：</p>
        <div class="bold">考点：</div>
        <p>1、位置规律；2、样式规律；3、属性规律；4、数量规律；5、空间重构</p>
        <div class="bold">如何快速定位考点？</div>
        <p>观察 图形特征。</p>

        <h3 id="ch1-1">位置规律</h3>
        <div class="bold">特征：</div>
        <p>元素组成相同（比如都由小黑三角形和小白三角形组成）</p>
        <div class="bold">考点：</div>
        <p>1、平移：
          （1）方向：直线【上下、左右、斜对角线】；绕圈【顺逆时针】
          （2）方向确定后，看步数：恒定；递增【等差】
        </p>
        <p>2、旋转、翻转：
          （1）旋转：方向【顺、逆时针】；方向确定后，看常见角度【45、90、180】【肉眼可辩】
          （2）翻转：左右翻转一样【图形沿竖轴对称】；上下翻转一样【图形沿横轴对称】
        </p>

        <h3 id="ch1-2">样式规律</h3>
        <div class="bold">特征：</div>
        <p>元素组成相似：（1）元素重复出现；（2）线条重复出现</p>
        <div class="bold">考点:</div>
        <p>1、遍历（九宫格和两组图中居多）：
          缺啥补啥。（1）看外形；（2）看填补填充图案。
        </p>
        <p>2、加减同异（可能和位置规律符合考察）：
          （1）相加、相减：图1的线条+图2的线条=图3的线条；
          （2）求异（去同求异）：图1的线条+图2的线条-图1图2一样的地方=图3的线条；
          （3）求同（去异求同）：图1的线条+图2的线条-图1图2不一样的地方=图3的线条；
        </p>
        <p>3、黑白运算：
          （1）特征：图形轮廓和分割区域都相同，不同区域“黑白”颜色不同，且黑块数量不成规律【如果数量一样，优先考虑位置平移规律】；
          （2）方法：相同位置运算【都找左上角，都找右上角...】。
        </p>

        <h3 id="ch1-3">属性规律</h3>
        <div class="bold">特征：</div>
        <p>元素组成不相同、不相似：元素没有共性，优先考虑属性。</p>
        <div class="bold">考点:</div>
        <p>1、对称性（考的多，做不出来时考虑）：
          （1）轴对称【五角星、箭头】：方向【横着对称、竖着对称、斜着对称】；数量【五角星有五条对称轴】；
          （3）中心对称：绕某个点旋转180度重合，不确定就转卷子【N Z S 平行四边形】。
        </p>
        <p>2、曲直性：</p>
        <p>3、开闭性：</p>

        <h3 id="ch1-4">数量规律</h3>
        <div class="bold">特征：</div>
        <p></p>
        <div class="bold">考点:</div>
        <p></p>

        <h3 id="ch1-5">空间重构</h3>
        <div class="bold">特征：</div>
        <p></p>
        <div class="bold">考点:</div>
        <p></p>

      </section>
      <section>
        <h2 id="ca2"></h2>
      </section>
      <section>
        <h2 id="ca3"></h2>
      </section>
      <section>
        <h2 id="ca4"></h2>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      createdTime: '2019-03-07 15:22:00',
      aside: false,
      catalog: '目录',
      catalogs: [
        { id: 'ca1', text: '图形推理：', children: [
          { id: 'ch1-1', text: '位置规律' },
          { id: 'ch1-2', text: '样式规律' },
          { id: 'ch1-3', text: '属性规律' },
          { id: 'ch1-4', text: '数量规律' },
          { id: 'ch1-5', text: '空间重构' },
        ] },
        { id: 'ca2', text: '' },
        { id: 'ca3', text: '' },
      ]
    }
  },
  components: {
    
  },
  mounted() {
  },
  computed: {
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

</style>
