<template>
    <nav class="navbar is-transparent has-shadow">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="#"> <!-- each single item of the navbar, which can either be an a or a div -->
            <!-- <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/> -->
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
            <!-- Now search box -->
            <div class="navbar-item">
              <div class="control has-icons-left">
                <input type="text" class="input" placeholder="Search ..." size="30">
                <span class="icon is-left">
                  <font-awesome-icon icon="search"/>
                </span>
              </div> <!--  -->
            </div> <!-- end searchbox -->
            <!-- Now menulinks -->
            <a class="navbar-item is-vcentered" href="#">
              <span class="icon is-small">
                <font-awesome-icon icon="home"/>
              </span>
              Home
            </a>
            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link" href="#">
                <span class="icon is-small">
                  <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'discourse' }"/>
                </span>
                Courses
              </a>
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#">
                  <span class="icon is-small">
                    <font-awesome-icon icon="envelope"/>
                  </span>
                  Overview
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="#">
                  <span class="icon is-small">
                    <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"/>
                  </span>
                  Elements
                </a>
              </div><!-- navbar-dropdown -->
            </div><!-- navbar-item -->
            <a class="navbar-item" href="#">
              <span class="icon is-small">
                <font-awesome-icon icon="user"/>
              </span>
              Referrals
            </a>
            <a class="navbar-item" href="#">
              <span class="icon is-small">
                <font-awesome-icon icon="hands-helping"/>
              </span>
              Help
            </a>
          </div><!-- navbar-start -->

          <div class="navbar-end">
            <div class="navbar-item">
              <a href="#" class="button">
                <span class="icon is-small">
                  <font-awesome-icon icon="bell" />
                </span>
              </a> <!-- bell button -->
            </div><!-- navbar-item -->

            <div class="navbar-item has-dropdown is-hoverable">
              <div href="#" class="button navbar-link">
                <figure class="image is-24x24">
                  <img class="is-rounded" src="https://bulma.io/images/placeholders/32x32.png">
                </figure>
                Leo Tran
              </div> <!-- bell button -->
              <div class="navbar-dropdown is-boxed">
                <a class="navbar-item" href="#">
                  <span class="icon is-small">
                    <font-awesome-icon icon="envelope"/>
                  </span>
                  Profile
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item" href="#">
                  <span class="icon is-small">
                    <font-awesome-icon icon="sign-out-alt" />
                  </span>
                  Logout
                </a>
              </div><!-- navbar-dropdown -->
            </div><!-- navbar-item -->
          </div><!-- navbar-end -->

        </div><!-- navbar-menu -->
      </div> <!-- container -->
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
.navbar-brand a.navbar-item {
  font-weight: bold;
}

.navbar .navbar-item {
  padding: 1.5rem;
  line-height: 1rem;
}

.navbar-dropdown .navbar-item {
  padding: 0.375rem 1rem;
}

.navbar-item .icon {
  padding-right: 1.375rem;
}

.navbar-item .control .icon.is-left {
  padding-left: 1rem;
}

.navbar-end .navbar-item a.button .icon {
  padding: 1rem;
}

.navbar-end .navbar-item.has-dropdown figure.image {
  margin-right: 0.375rem;
}
</style>
