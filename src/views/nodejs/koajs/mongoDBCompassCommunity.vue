<template>
  <article  >
    <p>官方推荐工具</p>
    <h2>封装mongoDB的准备工作</h2>
    <p>市场上已经有很多封装mongoDB的模块，为什么还要自己封装？（1）更小；（2）速度更快；（3）更灵活</p>

    <h3>es5的类、静态方法以及继承</h3>

    <p>1、es5中定义类是通过构造函数来实现的。</p>
    <pre><code>{{ es5 }}</code></pre>
    <p>构造函数里面的方法和属性 和 构造函数原型链上的属性和方法 都属于实例的属性和方法，也就是说，
      想要调用这些属性和方法必须先实例化Person类，即实例化构造函数【const person = new Person();
      p.run();p.work()】</p>
    <p>3、而静态方法是直接绑定在构造函数上，直接通过Person.setName()来调用。</p>
    <div class="bols">构造函数里面的方法和属性 和 构造函数原型链上的方法和属性 有什么区别？</div>
    <p>原型链上的属性和方法可以被多个实例共享</p>

    <p>2、es5中的继承一般是通过原型链 + 对象冒充的组合继承模式</p>
    <pre><code>{{ jicheng5 }}</code></pre>
    <div class="bold">原型链和对象冒充的优缺点？</div>
    <p>（1）对象冒充继承缺点：没法继承原型链上的属性和方法。</p>
    <p>（2）原型链继承优点：可以继承构造函数里面和原型链上的属性和方法。</p>
    <p>（3）原型链继承缺点：实例化子类的时候没法给父类传参。【如果只有原型链继承，通过实例调用run方法时的this.name和
      this.age是undefined】</p>

    <h3>es6的类、静态方法以及继承</h3>

    <p>1、es6中定义类是通过class的方法来实现的。</p>
    <pre><code>{{ es6 }}</code></pre>

    <p>2、es6中的继承是通过extends来实现的</p>
    <pre><code>{{ jicheng6 }}</code></pre>

    <p>3、es6中的静态方法是通过static关键词来实现的</p>
    <pre><code>{{ static6 }}</code></pre>

    <h3>es6中的单例模式</h3>
    <div class="bold">什么是单例模式？</div>
    <p>无论创建多少个实例，类中的构造函数只执行一次（即new只执行一次）。</p>
    <pre><code>{{ single6 }}</code></pre>
  </article>
</template>

<script>
export default {
  name: 'mongoDBCompassCommunity',
  data() {
    return {
      createTime: '2019-03-14 16:56:00',
      es5: `function Person(name, age) {
  // 构造函数里面的方法和属性
  this.name = name
  this.age = age
  this.run = function() {
    console.log(this.name + '-----' + this.age)
  }
}
// 构造函数原型链上的属性和方法
Person.prototype.sex = '男'
Person.prototype.work = function() {
  console.log(this.name + this.age + this.sex)
}
// 构造函数的静态方法
Person.setName = function() {
  console.log('静态方法')
}`,
      jicheng5: `// 同样是上面那个Person类
// 现在有一个Web想要继承Person

function Web(name, age) {
  Person.call(this, name, age) // 对象冒充实现继承（没有这个继承不能给父类传值）
}
Web.prototype = new Person(); // 原型链实现继承（没有这个不能继承原型链上的属性和方法）
`,
      es6: `class Person {
  constructor(name, age) { // 类的构造函数，实例化类的时候会执行构造函数，然后this._name和this._age有值，调用getName和setName就有值了
    // 表示类里面的属性
    this._name = name
    this._age = age
  }
  getName() {
    console.log(this._name)
  }
  setName(name) {
    this._name = name
  }
}

let p = new Person('djlun', 18)`,
      jicheng6: `//还是上面那个Person class
// 现在有一个Web要继承Person类
class Web extends Person() {
  constructor(name, age, sex) {
    super(name, age) // 这里实现了实例化子类的时候给父类传参
    this._sex = sex
  }
  print() {
    console.log(this._sex)
  }
}

let w = new Web('djlun', 18, '女')`,
      static6: `class Person {
  constructor(name) {
    this._name = name // 属性
  }
  run() { // 实例方法
    console.log(this._name)
  }
  static work() { // 静态方法
    console.log('这是es6中的静态方法')
  }
}
// 也可以像es5一样
Person.instance = '这是一个静态方法的属性' // 通过Person.instance调用

// 静态方法调用
Person.work()`,
      single6: `class Db {
  static getInstance() {
    if(!Db.instance) { // 如果这个静态方法里面没有这个Db的实例（即还没有new过，构造函数还没有执行过）
      Db.instance = new Db() // 静态属性 = Db对象 ，即进行一次实例化
    }
    return Db.instance // 如果有实例，直接返回当前的静态实例
  }
  constructor() {
    console.log('实例化的时候会触发')
    this.connect()
  }
  connect() {
    console.log('连接数据库')
  }
  find() {
    console.log('查询数据库')
  }
}

let myDB = Db.getInstance() // 这时创建实例是调用类的静态方法，判断实例是否已经存在，这样就实现就执行一次实例化`
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
