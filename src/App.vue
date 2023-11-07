<template>
  <div id="app">
    <!-- <CompCommunicate></CompCommunicate>
    <SlotsTest></SlotsTest>
    <Recursion></Recursion> -->
    <!-- <FormSample></FormSample> -->
    <Tree></Tree>
  </div>
</template>

<script>
// import CompCommunicate from '@/components/communicate/index.vue'
// import SlotsTest from './components/SlotsTest'
// import Recursion from './components/Recursion'

import Tree from '@/components/tree/index.vue'

export default {
  name: 'App',
  components: {
    // CompCommunicate,
    // SlotsTest,
    // Recursion,
    // FormSample,
    Tree
  }
}
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
