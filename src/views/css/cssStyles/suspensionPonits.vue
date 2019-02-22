<template>
  <article class="suspensionPoints">
    <header>
      <h1>省略号</h1>
    </header>
    <section>
      <h2>单行省略号</h2>
      <section>
        <div class="bold">代码：</div>
        <pre><code>{{singleSuspensionPoints}}</code></pre>
        <div class="bold">例子：</div>
        <p class="ellipsis wrap">内容超过200px就会省略号显示显示显示显示</p>
      </section>
    </section>
    <section>
      <h2>多行省略号</h2>
      <section>
        <h3>（webkit内核）css直接设置</h3>
        <section>
          <div class="bold">代码：</div>
          <pre><code>{{multiSuspensionPoints[0]}}</code></pre>
          <div class="bold">例子：</div>
          <p class="multi-ellipsis1-1">内容超过2行就会省略号显示内容超过2行就会省略号显示内容超过2行就会省略号显示内容超过2行就会省略号显示</p>
          <p class="multi-ellipsis1-2">内容超过3行就会省略号显示内容超过3行就会省略号显示内容超过3行就会省略号显示内容超过3行就会省略号显示内容超过3行就会省略号显示内容超过3行就会省略号显示</p>
        </section>
        <h3>其他浏览器</h3>
        <p>感觉多行省略号的需求没有必要。就没有总结网上的那些方法，要实现的话应该是要借助js的。</p>
      </section>
    </section>
  </article>
</template>

<script>
export default {
  name: 'suspensionPoints',
  data() {
    return {
      singleSuspensionPoints: `.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}`,
      multiSuspensionPoints: [
        `@mixin multi-ellipsis-webkit($lineClamp) {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: $lineClamp;
  // -webkit-line-clamp必须结合的两个属性
  display: -webkit-box; 
  -webkit-box-orient: vertical;
}`
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../../styles/mixin.scss';
.suspensionPoints {
  padding-bottom: 10px;
  line-height: 1.5em;
  .wrap {
    width: 200px;
  }
  .multi-ellipsis1-1 {
    @include multi-ellipsis-webkit(2)
  }
  .multi-ellipsis1-2 {
    @include multi-ellipsis-webkit(3)
  }
  .multi-ellipsis2 {
    display: inline-block;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
    &::after {
      content: '...';
      display: inline;
    }
  }
}
</style>
