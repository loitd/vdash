<template>
    <nav class="navbar is-transparent">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
          {{navtitle}}
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
</template>

<script>
export default {
    name: "navbar",
    props: ['navtitle'],    //--->Indicate that this prop will be asigned when call component
    data () {
        return {}
    }
}
</script>

<style scoped>
  
</style>
