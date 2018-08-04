<template>
  <div id="portfolio">
    <div class="portfolio-header">
      <h1>Portfolio</h1>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #portfolio {
    background-color: #111;
  }

  .portfolio-header {
    background: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 52% 90%, 50% 100%, 48% 90%, 0 90%);
  }

  .portfolio-header h1 {
    margin: 0;
    padding-bottom: 10px;
    color: #333;
    font-weight: 900;
  }

</style>
