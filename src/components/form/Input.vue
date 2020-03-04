<template>
  <div>
    <!-- $attrs: 属性展开运算符 -->
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  // inheritAttrs: false,
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(e) {
      this.$emit("input", e.target.value);
      // 事件派发，监听校验执行
      this.$parent.$emit('validate');
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
