<template>
  <div id="home">
    <app-banner />
    <app-services />
    <app-newsletter />
  </div>
</template>

<script>
import Banner from "../components/Banner"
import Services from "../components/Services"
import Newsletter from "../components/Newsletter"

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components: {
    appBanner: Banner,
    appNewsletter: Newsletter,
    appServices: Services
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
