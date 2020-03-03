<template>
  <div>
    <h2>父组件</h2>
    <h3>{{msg}}</h3>
    <child1 :title="title1" @getmsg="getmsg"></child1>
    <child2></child2>
  </div>
</template>

<script>
import Child1 from "@/components/communicate/Child1";
import Child2 from "@/components/communicate/Child2";

export default {
  name: 'communicate',
  data() {
    return {
      msg: '',
      title1: 'mayuyu'
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
    getmsg(msg){
      this.msg = msg
      console.log(this.msg)
    }
  },
  components: {
    Child1,
    Child2
  },
};
</script>

<style scoped lang="
">

</style>
