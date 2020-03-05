<template>
  <div>
    <slot></slot>
  </div>
</template>

<script type='text/ecmascript-6'>
export default {
  // 向所有子组件派发，子组件用inject接收
  provide(){
    return{
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {}
  },

  components: {},

  computed: {},

  mounted () {},

  methods: {
    validate(cb){
      // 该方法返回一个promise的数组
      const tasks = this.$children
      .filter(item => item.prop) // 过滤出需要校验的属性
      .map(item => {
     
        item.validate()
        } )
      
      // 所有任务都通过才算校验通过
      Promise.all(tasks)
      .then(() => cb(true)) // 校验成功
      .catch(() => cb(false)) // 校验失败
    }
  }
}

</script>

<style lang='' scoped>

</style>