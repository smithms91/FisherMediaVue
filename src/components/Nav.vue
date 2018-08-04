<template>
  <div id="nav">
    <b-navbar class="navbar-container" toggleable="md" type="dark">
      <b-navbar-toggle class="navbar-sandwich" target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">
        <img class="logo" src="../assets/Fisher-Media-Logo-Color-1.png" alt="">
      </b-navbar-brand>
      
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item class="nav-links" to="/" exact>Home</b-nav-item>
          <b-nav-item class="nav-links" to="/about">Who are we?</b-nav-item>
          <b-nav-item class="nav-links" to="/portfolio">See our work</b-nav-item>
          <b-nav-item class="nav-links" to="/contact">Contact</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Nav',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .navbar-container {
    background-color: #040404;
    color: #333;
  }

  .navbar-sandwich {
    border: 1px solid #e6e6e6;
    border-radius: 0;
    outline: none;
  }


  .logo {
    width: 75px;
  }


  .nav-links a {
    color: #e6e6e6;
    font-size: 14px;
  }


</style>
