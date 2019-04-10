<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <stafflist></stafflist>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// eslint-disable-next-line
import stafflist from "./components/stafflist"
export default {
  // eslint-disable-next-line
  name: 'App',
  // eslint-disable-next-line
  components:{
    stafflist
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
/* eslint-disable */
</style>
