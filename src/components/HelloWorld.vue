<!--
This template is for demo all things I tended/already integrated into this template
- Bulma
- Fontawesome
template declaration
-->
<template>
  <div class="hello">
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          {{title}}
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div><!-- navbar-burger -->
      </div><!-- navbar-brand -->

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item" href="#">
            <font-awesome-icon icon="user"/>
            Home
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link" href="#">
              Docs
            </a>
            <div class="navbar-dropdown is-boxed">
              <a class="navbar-item" href="#">
                <font-awesome-icon icon="envelope"/>
                Overview
              </a>
              <hr class="navbar-divider">
              <a class="navbar-item" href="#">
                <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                Elements
              </a>
            </div><!-- navbar-dropdown -->
          </div><!-- navbar-item -->
        </div><!-- navbar-start -->

        <div class="navbar-end">
          <div class="navbar-item icons">

          </div><!-- navbar-item -->
        </div><!-- navbar-end -->
      </div><!-- navbar-menu -->
    </nav><!-- navbar -->
  </div><!-- hello -->
</template>

<script>
export default {                          //--->Again,export default to export all tamplate and style out
  name: 'HelloWorld',                     //--->Name of the exported component
  data () {                               //--->Data of the exported component
    return {
      title: 'VDash'                      //--->One variable
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
