<template>
  <article  >
    <aside :class="aside? 'aside':'none-aside'">
      <h1 @click="showAside">{{ catalog }}</h1>
      <ol>
        <li v-for="item in catalogs" :key="item.id">
          <a :href="'#'+item.id">{{ item.text }}</a>
        </li>
      </ol>
    </aside>
  </article>
</template>

<script>
export default {
  name: 'applicationRcite',
  data() {
    return {
      createTime: '2019-03-13 10:46:00',
      aside: false,
      catalog: '目录',
      catalogs: [
        { id: 'ca1', text: '' }
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
    
  }
}
</script>

<style scoped lang="scss">

</style>
