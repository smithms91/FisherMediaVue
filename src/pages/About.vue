<template>
  <div id="about">
    <div class="about-header">
      <h1>About Us</h1>
    </div>
    <div id="about-container">
      <div class="about-section">
        <div class="box left">
          <i class="fab fa-fort-awesome"></i>
          <div class="about-content ">
            <h1>Who we are</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus necessitatibus error aliquam quam libero itaque. Aperiam voluptatem quidem recusandae odio quas illum aliquid voluptate exercitationem. Dolorum quae quasi nemo.</p>
            <hr>
          </div>
        </div>
        <div class="box right">
          <i class="fas fa-pen-nib"></i>
          <div class="about-content">
            <h1>What we do</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic molestiae recusandae, sapiente sunt est iste? Dignissimos illo eveniet maiores accusamus voluptate quia ex hic reiciendis animi. Tempore repudiandae quidem aperiam.</p>
            <hr>
          </div>
        </div>
        <div class="box left">
          <i class="fab fa-vuejs"></i>
          <div class="about-content">
            <h1>How we do it</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est autem eveniet ratione exercitationem. Odio voluptatum eligendi nesciunt, aperiam itaque nostrum eveniet alias libero incidunt porro unde nam. Nam, nesciunt vero.</p>
          </div>
        </div>
      </div>
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

  #about {
    background-color: #222222;
    color: #e6e6e6;
    text-align: center;
  }

  #about-container {
    padding: 40px;
  }

  .about-section {
    display: flex;
    flex-direction: column;
  }

  .about-header {
    background: #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 52% 90%, 50% 100%, 48% 90%, 0 90%);
  }

  .about-header h1 {
    margin: 0;
    padding-bottom: 10px;
    color: #333;
    font-weight: 900;
  }

  .about-content h1 {
    font-family: "Helvetica", sans-serif;
    margin-bottom: 10px;
  }

  .about-content p {
    font-weight: 100;
  }

  .box i {
    font-size: 50px;
    background-color: #e46b6a;
    padding: 20px;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    margin-bottom: 10px;
  }

  .box {
    margin-bottom: 60px;
  }

  @media only screen and (min-width: 800px) {
    .box {
      display: flex;
      align-items: center;
    }

    .about-content {
      width: 500px;
    }

    .about-section {
      padding: 0 40px;
    }

    .left {
      margin-right: auto;
    }

    .left i {
      order: 2;
      margin-bottom: 0;
      margin-left: 40px;
    }

    .right {
      margin-left: auto;
    }

    .right i {
      margin-bottom: 0;
      margin-right: 40px;
    }

  }

  @media only screen and (min-width: 1400px) {

    .about-section {
      padding: 0 240px;
    }

  }


</style>
