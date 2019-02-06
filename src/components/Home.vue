<!--
This template is for demo all things I tended/already integrated into this template
- Bulma
- Fontawesome
template declaration
-->
<template>
  <div class="hello">
    <!-- place navbar, call component with props asiged value = title prop of parent -->
    <navbar :navtitle="title"/>
  </div><!-- hello -->
</template>

<script>
// We need to import child component
import Navbar from './Navbar.vue';

export default {                          //--->Again,export default to export all tamplate and style out
  name: 'Home',                           //--->Name of the exported component
  components: { Navbar }, 
  data () {                               //--->Data of the exported component
    return {
      title: 'VDash'                      //--->One variable/prop
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
