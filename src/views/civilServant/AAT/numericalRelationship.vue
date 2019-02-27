<template>
  <article class="app-box" ref="article">
    <header @click="showNav" class="catalog-to-top">
      <h1>目录</h1>
    </header>
    <nav>
      <div><span class="bold">题量：</span>15</div>
      <div><span class="bold">分值：</span>15 * 0.8 = 12</div>
      <div class="bold">三大方法：</div>
      <ol>
        <li v-for="item in fns" :key="item.href">
          <a :href="'#'+item.id">{{ item.content }}</a>
        </li>
      </ol>
      <div class="bold">六大题型：</div>
      <ol>
        <li v-for="item in pros" :key="item.href">
          <a :href="'#'+item.id">{{ item.content }}</a>
        </li>
      </ol>
      <div class="bold">学霸题型：</div>
      <ol>
        <li v-for="item in mores" :key="item.href">
          <a :href="'#'+item.id">{{ item.content }}</a>
        </li>
      </ol>
    </nav>
    <main>
      <section :id="fns[0].id">
        <h2>{{fns[0].content}}</h2>
        <div class="bold">什么时候用？</div>
        <p>特定题型：年龄、余数、不定方程、多位数</p>
        <p>选项信息充分：选项为一组数（题目中有'分别'）；选项可以转化为一组数。</p>
        <p>题目公式很复杂的题</p>
        <p>奇数、偶数、倍数、最值</p>
        <div class="bold">题型：</div>
        <p>求年龄的题：年龄差不变（父母差、父子差、母子差），可以先把变的排除；</p>
        <p>余数的题：取几分之几余多少，复杂的题用代入排除法；简单的可以转换成倍数的题，进行排除，然后再代入。</p>
        <p>不定方程的题：未知数比方程个数多，那就是一个不定方程，此时用代入排除法。</p>
        <p>多位数的题：个位数和十位数对调之类的，就该用代入排除法。</p>
        <p>流程式代入的题：可以从中间大的数开始代，代入之后如果结果偏大，就可以排除比它大的数。</p>
        <p>求商品价格的题：列出的方程略复杂，这种题用代入排除法</p>
        <p>求最大数的题：可以从第二大的数开始代入。</p>
        <p>求某个数的最大可能的题：从最大数开始代入，因为小的也可能满足条件，但是应该选那个大的。</p>
        <p>答案数字很大的题：可以先代好算的数。</p>
        
        <div class="bold">怎么用？</div>
        <p>能排除的优先排除，不能排除的再进行代入。</p>
      </section>
      <section :id="fns[1].id">
        <h2>{{fns[1].content}}</h2>
        <div class="bold">题型：</div>
        <p>知和求差，只差求和的题：应用和差奇偶同性进行排除，排除后对剩下的进行代入。</p>
        <p>题目中有涉及倍数的题：奇偶特性排除，排除不了根据倍数特性排除，倍数太大不好算可以将其拆成两个互质的数相乘，然后再根据倍数特性排除，然后代入。</p>
        <p>比例型的题：可以根据比例特性来排除</p>
        <div class="bold">奇偶特性：</div>
        <p>a+b 和 a-b 的奇偶性一样。</p>
        <p>a*b 一偶则偶，全奇为奇。</p>
        <div class="bold">逢质必2：</div>
        <p>碰到求质数的题，先想到2，因为2是唯一的偶质数。</p>
        <div class="bold">倍数特性</div>
        <p>A=B*C （1）A 能被 B 或 C 整除；（2）B 和 C 均是 A 的约数。</p>
        <div class="bold">比例特性</div>
        <p>比如：已知 男/女 = 3/5 =》 男：3x；女：5x；男+女：8x；男-女：2x</p>
        <p>由此可知：若A/B = m/n，则A 是 m 的倍数，B 是 n 的倍数；A+B 是 m+n 的倍数；A-B 是 m-n 的倍数</p>
        <div class="bold">能被 4/3/9/5 整除：</div>
        <p>末两位（是整个数的末两位，4w末两位是00）能整除4，则这个数能整除4；各个位上的数相加能被3整除；各个位上的数相加能被9整除；个位数是0或者5；</p>
        <div class="bold">小技巧：</div>
        <p>682 能否被 7 整除？ 可以先找一个近的能被7整除的：比如700,700-682=18，不能被 7 整除，所以 682 不能被 7 整除。</p>
        <div class="bold">最好记忆一下：</div>
        <p>37.5% = 3/8；62.5% = 5/8；30 多：31 ~ 39</p>
        <p class="bold err">注意：即使根据奇偶特性确定奇偶性后，还要注意题目最后问题问的是什么，问的不一定是自己推的那个数。</p>
      </section>
      <section :id="fns[2].id">
        <h2>{{fns[2].content}}</h2>
        <section>
          <h3>普通方程</h3>
          <p>未知数和方程式数量都为1</p>
          <div class="bold">设未知数的技巧：</div>
          <ol>
            <li>设小不设大（减少分数计算）</li>
            <li>设中间量（方便列式）</li>
            <li>问谁设谁（避免陷阱）</li>
            <li>设最小公倍数*x(方便计算)</li>
          </ol>
        </section>
        <section>
          <h3>不定方程</h3>
          <p>方程式数量为1，未知数大于1</p>
          <div class="bold">ax+by=m :</div>
          <p>方法：分析奇偶、倍数、尾数特性来排除。</p>
          <p>奇偶：a、b恰好一奇一偶。比如：6x+5y=37，6x偶，37奇数，5y则为奇数，y则为奇数</p>
          <p>倍数：a或b与m有公因子（或者求最小公约数）。比如：5x+7y=63，7y和63都能被7整除，则5x能被7整除，所以x能被7整除</p>
          <p>尾数：a或b的尾数是5或0。比如：7x+10y=109，10y尾数为0，那么7x尾数必需为9，则x尾数是7（不是倍数为7）</p>
          <p>29x+24y=900：优先考虑倍数，其次考虑奇偶，最后考虑尾数。先倍数：找最大公约数（最大公因子），24y含有12,900含有12，所以29x也有12这个因子。</p>
        </section>
        <section>
          <h3>不定方程组</h3>
          <p>未知数小于方程式数量</p>
          <div class="bold">未知数一定是整数的不定方程（月份、人数...）</div>
          <p>先消元转化为不定方程，再按不定方程求解。</p>
          <div class="bold">未知数不一定是整数的不定方程（时间、钱数）</div>
          <p>赋零法：赋其中一个未知数为0。（一定能做出来）</p>
        </section>
      </section>
      <section :id="pros[0].id">
        <h2>{{pros[0].content}}</h2>
        <p>总量 = 效率 * 时间</p>
        <section>
          <h3>给 完工时间 型</h3>
          <p>知道 每个人的完工时间 或 两个人一起的完工时间</p>
          <div class="bold">解题步骤：</div>
          <ol>
            <li>找总量，无总量就假设总量（值为每个人完工时间的公倍数）</li>
            <div class="bold">求总的时间（知道每个人的完工时间）：</div>
            <li>算每个人的效率：总量 / 每个人的时间</li>
            <li>总的效率 = 每个人的效率相加</li>
            <li>总的时间 = 总量 / 总的效率</li>
            <div class="bold">求每个人的效率之比（知道两个人一起的完工时间）：</div>
            <li>算两个人的效率：总量 / 两个人一起的完工时间</li>
            <li>将答案代入，比如甲乙一起效率为:5，乙丙一起效率为3，答案为甲乙丙3:2:1,3+2：2+1 = 5:3，正确，然后代入其他都不正确，则答案确定。</li>
          </ol>
          <p class="err">有时候题目问的是大约几天，然后算出来的天数是一个小数，但是答案给的都是整数。那么如果算出来21~22，就选22。</p>
          <h3>给 效率比例 型</h3>
          <div class="bold">解题步骤：</div>
          <ol>
            <li>假设效率</li>
            <li>求总量</li>
            <li>根据题目列方程</li>
          </ol>
          <div class="bold">因为什么原因停工的题：</div>
          <p>比如工期30天，因为下雨停工10天，剩下的需要在8天内完成，那就是相当于原来18天的工作量，现在要8天完成，由此可以列式子。</p>
          <p class="err">工程问题最重要的是 设出或算出 效率 和 总量，然后根据效率和总量列式子。</p>
          <h3>给 具体单位 型</h3>
          <p>比如总量多少份，多少个</p>
          <p>采用 设未知数，列方程 的方法</p>
        </section>
      </section>
      <section :id="pros[1].id">
        <h2>{{pros[1].content}}</h2>
        <p>路程 = 速度 * 时间</p>
        <h3>基础行程</h3>
        <p>能用倍数特性排除的就用倍数特性先排除试试。比如题目求三天共行驶了多少公里，题目中已知三天共行驶了18个小时，那么答案肯定是18的倍数，就可以去答案中排除试试。</p>
        <div class="bold">公式：</div>
        <ol>
          <li>平均速度：v = x / t</li>
          <li>等距离平均速度：v = S<sub>总</sub>/T<sub>总</sub> = 2v<sub>1</sub>v<sub>2</sub> / v<sub>1</sub> + v<sub>2</sub>（等距离两段、直线往返、上下坡往返）</li>
        </ol>
        <h3>相对行程</h3>
        <div class="bold">公式：</div>
        <ol>
          <li>直线相遇（两人同时相向而行）：S<sub>相遇</sub> = (v<sub>1</sub> + v<sub>2</sub>) * t；不是同时：公式略；</li>
          <li>环形相遇（同点出发）：S<sub>相遇</sub> = (v<sub>1</sub> + v<sub>2</sub>) * t；相遇一次：S<sub>相遇</sub> = 1圈；相遇n次，S<sub>相遇</sub> = n圈</li>
          <li>直线追及（两人同时同向而行）：S<sub>追及</sub> = (v<sub>1</sub> - v<sub>2</sub>) * t = 追及刚开始时两人相差的距离；</li>
          <li>环形追及（同点出发）：S<sub>追及</sub> = (v<sub>1</sub> - v<sub>2</sub>) * t；追上一次：S<sub>追及</sub> = 1圈；追上n次，S<sub>追及</sub> = n圈</li>
          <li>多次相遇（两端出发）：第一次相遇：1S；第二次相遇：3S；第三次相遇：5S；第n次相遇：(2n-1)S=(v<sub>1</sub> + v<sub>2</sub>) * t；</li>
          <li>流水行船：v<sub>顺</sub> = v<sub>船</sub> + v<sub>水</sub>；v<sub>逆</sub> = v<sub>船</sub> - v<sub>水</sub></li>；不强求记：v<sub>船</sub> = (v<sub>顺</sub> + v<sub>逆</sub>)/2；v<sub>水</sub> = (v<sub>顺</sub> - v<sub>逆</sub>)/2；
        </ol>
        <p class="err">注：静水速度 = 船速，漂流速度 = 水速</p>
        <p class="err">遇上那种先跑几分钟，再跑几分钟，求再跑几分钟的题（陷阱题），可以直接在答案里猜，肯定有一个干扰项：总的时间；一个正确项：再跑几分钟；此两者肯定相差先跑+再跑的分钟数。</p>
        <p>既有v<sub>1</sub> + v<sub>2</sub>，又有v<sub>1</sub> - v<sub>2</sub>的题：<span class="err">可以用到公式：v<sub>大</sub> = (v<sub>差</sub>+v<sub>和</sub>)/2；v<sub>小</sub> = (v<sub>和</sub>-v<sub>差</sub>)/2</span></p>
        <p>求相遇次数的题，算出来不是整数，比如11.5，那么是相遇了11次。和完工天数不同。</p>
        <h3>比例行程</h3>
        <p>路程 = 速度 * 时间</p>
        <ol>
          <li>路程一定，速度和时间成反比</li>
          <li>速度一定，路程和时间成正比</li>
          <li>时间一定，路程和速度成正比</li>
        </ol>
      </section>
      <section :id="pros[2].id">
        <h2>{{pros[2].content}}</h2>
        <ol>
          <li>利润 = 售价 - 进价 （注意利润和利润里的区别）</li>
          <li>利润率 = 利润 / 进价（与资料中的公式：利润率 = 利润 / 总收入 不同）</li>
          <li>售价 = 进价*(1 + 利润率)</li>
          <li>折扣 = 折后价 - 折前价</li>
          <li>总价 = 单价 * 数量</li>
          <li>总进价 = 单个进价 * 数量</li>
          <li>总利润 = 单个利润 * 数量（这里注意陷阱，卖不掉的商品另算）（碰到题目中有说卖不掉的商品就用后面的公式） = 总售价 - 总进价</li>
        </ol>
        <p>假设的时候记得倍数特性和100</p>
        <p class="err">比例传递特性：如果A/B=C/D，则A/B=C/D=A+C/B+D=A-C/B-D</p>
        <h3>分段计费</h3>
        <p>水电费、出租车计费等，每段计费标准不同。</p>
        <p>问：在不同收费标准下，一共需要的费用？</p>
      </section>
      <section :id="pros[3].id">
        <h2>{{pros[3].content}}</h2>
      </section>
      <section :id="pros[4].id">
        <h2>{{pros[4].content}}</h2>
      </section>
      <section :id="pros[5].id">
        <h2>{{pros[5].content}}</h2>
      </section>
      <section :id="mores[0].id">
        <h2>{{mores[0].content}}</h2>
      </section>
      <section :id="mores[1].id">
        <h2>{{mores[1].content}}</h2>
      </section>
      <section :id="mores[2].id">
        <h2>{{mores[2].content}}</h2>
      </section>
      <section :id="mores[3].id">
        <h2>{{mores[3].content}}</h2>
      </section>
    </main>
  </article>
</template>

<script>
export default {
  name: 'numericalRelationship',
  data() {
    return {
      navShow: true,
      fns: [
        { id: 'fn1', content: '代入排除法' },
        { id: 'fn2', content: '数字特性法' },
        { id: 'fn3', content: '方程法' },
      ],
      pros: [
        { id: 'pro1', content: '工程问题' },
        { id: 'pro2', content: '行程问题' },
        { id: 'pro3', content: '经济利润' },
        { id: 'pro4', content: '高频几何问题' },
        { id: 'pro5', content: '容斥原理' },
        { id: 'pro6', content: '排列组合与概率' },
      ],
      mores: [
        { id: 'more1', content: '周期' },
        { id: 'more2', content: '最值' },
        { id: 'more3', content: '赋值法' },
        { id: 'more4', content: '线段法' },
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
    showNav () {
      this.$refs.article.scrollTop = 0
      this.$router.push({
        path: '/numericalRelationship/numericalRelationshipIndex'
      })
    }
  }
}
</script>
