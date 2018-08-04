<template>
  <div id="app">
    <app-nav />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Nav from './components/Nav'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    appNav: Nav,
    appFooter: Footer
  }
}
</script>

<style>
*::before,
*::after,
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: none;
}

body {
  font-family: "Montserrat", sans-serif;
}

</style>
