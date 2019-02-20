<template>
  <article class="slicePart">
    <header>
      <h1>需求：截取数组的一部分</h1>
    </header>
    <main>
      <section>
        <h2>使用 slice() </h2>
        <section>
          <h3>slice() 的作用：</h3>
          <p>从已有的数组中返回选定的元素。</p>
        </section>
        <section>
          <h3>slice() 的用法：</h3>
          <p>arr.slice(start, end)</p>
          <p>strat 必需，可为负，数组截取的开始位置（包含）。</p>
          <p>end 可选，可为负，数组截取的结束位置（不包含）。若不设置则默认截取到数组最后。</p>
          <div class="bold">例子：</div>
            <code>
              let arr = {{ arr }}<br>
              arr.slice(1, 3) // {{ arrSlice }}<br>
              虽然 start 必需，但是当 start 不设置时相当于克隆整个数组：<br>
              arr.slice() // {{ arrAll }}<br>
              以上为浅克隆<br>
              arr.concat() 也可以实现数组的浅克隆
            </code>
        </section>
      </section>
    </main>
  </article>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      arr: [1, 2, 3, 4, 5, { name: 'djlun' }]
    }
  },
  computed: {
    arrSlice() {
      return this.arr.slice(1,3)
    },
    arrAll() {
      return this.arr.slice()
    }
  }
}
</script>

<style scoped lang="scss">
.slicePart {
  padding-bottom: 10px;
  line-height: 1.5em;
}
</style>
