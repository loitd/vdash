<!-- Defined a template here for the Root App with id #app -->
<template>
  <div id="app">
    <router-view/> <!-- Content inside app is a router-view  -->
  </div>
</template>

<script>
export default {            //--->Again,export default to export all tamplate and style out
  name: 'App'
}
</script>

<style>
/* This style is for the root, without scoped. Lead to a GLOBAL style*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
