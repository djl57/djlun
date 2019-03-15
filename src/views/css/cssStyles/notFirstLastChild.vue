<template>
  <article  >
    <header>
      <h1>样式第一个和最后一个不被选中</h1>
    </header>
    <section>
      <h2>第一个不被选中</h2>
      <section>
        <h3>代码</h3>
        <pre><code>.item {
  &amp;:not(:first-child) {
    color: green;
  }
}</code></pre>
        <h3>示例</h3>
        <ol>
          <li v-for="item in items" :key="item" class="item">{{ item }}</li>
        </ol>
      </section>
    </section>
    <section>
      <h2>最后一个不被选中</h2>
      <section>
        <h3>代码</h3>
        <pre><code>.list {
  &amp;:not(:last-child) {
    color: green;
  }
}</code></pre>
        <h3>示例</h3>
        <ol>
          <li v-for="item in lists" :key="item" class="list">{{ item }}</li>
        </ol>
      </section>
    </section>
    <section>
      <h2>第一个和最后一个都不被选中</h2>
      <section>
        <h3>代码</h3>
        <pre><code>.todo {
  &amp;:not(:first-child):not(:last-child) {
    color: green;
  }
}</code></pre>
        <h3>示例</h3>
        <ol>
          <li v-for="item in todos" :key="item" class="todo">{{ item }}</li>
        </ol>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      items: [
        '除了第一个，其他绿色',
        '其他1','其他2'
      ],
      lists: [
        '其他1','其他2',
        '除了最后一个，其他绿色'
      ],
      todos: [
        '第一个',
        '其他1','其他2',
        '除了第一个和最后一个都绿色',
        '最后一个'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  &:not(:first-child) {
    color: green;
  }
}
.list {
  &:not(:last-child) {
    color: green;
  }
}
.todo {
  &:not(:first-child):not(:last-child) {
    color: green;
  }
}
</style>
