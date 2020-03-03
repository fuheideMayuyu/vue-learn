<template>
  <div>
    <h2>child1</h2>
    <p>{{title}}</p>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  props:['title'],
  data() {
    return {
      msg: ''
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    toParent(){
      this.$emit('getmsg', '子元素方法传递')
    }
  },
  components: {

  },
};
</script>

<style scoped lang="
">

</style>
