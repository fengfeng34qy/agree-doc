---
{
  title: 简易vue.js,
  lang: zh-CN
}

---

### 简易vue.js
160行代码实现vue.js功能
```js
/**
 * sff-vue.js
 * 接受一个对象，对属性进行依赖追踪
 */
function observable(obj) {
  const dep = new Dep()
  
  const proxy = new Proxy(obj, {
    get(target, property) {
      const value = target[property]
      if (value && typeof value === 'object') { // 若属性为object，递归处理
        target[property] = observable(value)
      }
      if (Dep.target) { // Dep.target指向当前watcher
        dep.addWatcher(Dep.target)
      }
      return target[property]
    },
    set(target, property, value) {
      target[property] = value
      dep.notify() // 通知订阅器
    }
  })
  return proxy
}

/**
 * 依赖收集器，存放所有的watcher，并提供发布功能(notify)
 */
class Dep {
  constructor() {
    this.watchers = []
  }
  addWatcher(watcher) { // 添加watcher
    this.watchers.push(watcher)
  }
  notify() { // 通知方法，调用即依次遍历所有watcher执行更新
    this.watchers.forEach((watcher) => {
      watcher.update()
    })
  }
}

class Watcher {
  constructor(proxy, property, cb) {
    this.proxy = proxy
    this.property = property
    this.cb = cb
    this.value = this.get()
  }
  update() { // 执行更新
    const newValue = this.proxy[this.property]
    if (newValue !== this.value && this.cb) { // 对比property新旧值，决定是否更新
      this.cb(newValue)
    }
  }
  get() { // 只在初始化时调用，用于依赖收集
    Dep.target = this // 将自身指向Dep.target，执行完依赖收集再去释放
    const value = this.proxy[this.property]
    Dep.target = null
    return value
  }
}



let init = false // 只在初始化时去生成watcher
const eventMap = new Map() // 存放事件
let root = null // 根节点

/**
 * 用于将传入RayActive的vm对象进行代理，可通过this.xx访问this.data.xx
 * @param {Object} vm 
 * @param {Proxy} proxydata 经过proxy代理的vm.data对象，使this.xx操作也能触发视图更新
 */
function vmProxy(vm, proxydata) {
  return new Proxy(vm, {
    get(target, property) {
      return target.data[property] || target.methods[property]
    },
    set(target, property, value) {
      proxydata[property] = value
    }
  })
}

/**
 * 编译vm，分别对data和render做相应处理
 * @param {Object} vm 需要被编译的vm对象
 */
function compile(vm) {
  root = document.getElementById(vm.el.replace('#', ''));
  const proxydata = compileData(vm.data)
  // compileRender(proxydata, vm.render)
  compileRender(proxydata, root.innerHTML)
  bindEvents(vm, vmProxy(vm, proxydata))
}

/**
 * 
 * @param {Object} data 需要被编译的vm中的data对象
 */
function compileData(data) {
  return observable(data)
}

/**
 * 
 * @param {*} render 需要被编译的render字符串
 * @param {*} proxydata 经proxy转换过的data
 */
function compileRender(proxydata, render) {
  if (render) {
    const variableRegexp = /\{\{(.*?)\}\}/g
    const variableResult = render.replace(variableRegexp, (a, b) => { // 替换变量为相应的data值
      b = b.replace(/\s/g, '')
      if (!init) { // 只在初始化时去生成watcher
        new Watcher(proxydata, b, function() {
          compileRender(proxydata, render)
        })
      }
      return proxydata[b]
    })
    const eventRegexp = /(?<=<.*)@(.*)="(.*?)"(?=.*>)/
    const result = variableResult.replace(eventRegexp, (a, event, fn) => { // 为绑定事件的标签添加唯一id标识
      const id = Math.random().toString(36).slice(2)
      eventMap.set(id, {
        type: event,
        method: fn
      })
      return a + ` id=${id}`
    })
    init = true
    root.innerHTML = result
  }
}

/**
 * 通过root节点做事件代理，绑定模板中声明的事件
 * @param {*} vm 
 * @param {*} proxyvm 经过proxy代理的vm
 */
function bindEvents(vm, proxyvm) {
  for (let [key, value] of eventMap) {
    root.addEventListener(value.type, (e) => {
      const method = vm.methods[value.method]
      if (method && e.target.id === key) {
        method.apply(proxyvm) // 将vm中methods方法的this指向经过proxy的vm对象
      }
    })
  }
}

/**
 * 可理解为Vue中的Vue类，使用方式为new Vue(vm)
 */
class Vue {
  constructor(vm) {
    compile(vm)
  }
}
```
#### html使用：
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  
</head>
<body>
  <div id="root">
    <span>{{ age }}</span>
    <button @click="clickFn1">修改年龄</button>
  </div>
<script src="./sff-vue.js"></script>
<script>
  new Vue({
    el: '#root',
    data: {
      age: 18
    },
    methods: {
      clickFn1() {
        this.age = 28;
      },
      clickFn2() {
        this.age = 18;
      }
    },
    render: '年龄：<span>{{ age }}</span></br><button @click="clickFn1">修改年龄</button>'
  })
</script>
</body>
</html>
```
#### 下载源码(sff-vue.js、index.html)：
[https://github.com/answershuto/learnVue](https://github.com/answershuto/learnVue)

#### 文章来源：
[一个极其简易版的vue.js实现](https://www.cnblogs.com/danceonbeat/p/10656837.html)
