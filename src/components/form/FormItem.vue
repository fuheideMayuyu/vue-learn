<template>
  <div>
    <label v-if="label">{{label}}</label>
    <slot></slot>
    <p v-if="errorMessage">{{errorMessage}}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ["form"],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
    }
  },
  data () {
    return {
      errorMessage: ''
    }
  },

  components: {},

  computed: {},

  mounted () {
    // 监听input派发的事件
    this.$on('validate', this.validate)
  },

  methods: {
    // 执行校验
    validate(){
      // 获取input的值（动态变化）
      // [this.prop] es6计算属性用法
      const value = this.form.model[this.prop]
      // input 校验规则
      const rules = this.form.rules[this.prop]
      const desc = {[this.prop]: rules};
      const schema = new Schema(desc);
      // return 校验结果的promise对象
      return schema.validate({[this.prop]: value}, errors =>{
        if(errors) {
          this.errorMessage = errors[0].message;
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}

</script>

<style lang="scss" scoped>

</style>