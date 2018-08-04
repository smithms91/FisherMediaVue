<template>
  <div id="services-container">
    <h1>What we offer</h1>
    <ul>
      <li :class="{active: design}" @click="design = true; develop = false; connect = false;">Design</li>
      <li :class="{active: develop}" @click="develop = true; design = false; connect = false;">Development</li>
      <li :class="{active: connect}" @click="connect = true; develop = false; design = false;">Marketing</li>
    </ul>
    <div class="design" v-if="design">
      <div class="service">
        <i class="fas fa-pen-nib"></i>
        <h5>Design</h5>
        <hr>
        <p>Whether you are coming to us with a fully thought out idea, or just a few thoughts let our team help you put together the perfect design for your company.</p>
      </div>
    </div>
    <div class="develop" v-if="develop">
      <div class="service">
        <i class="fas fa-code" style="color: #8de46b"></i>
        <h5>Development</h5>
        <hr>
        <p>We will ensure we provide the most user efficient websites, with full responsiveness on mobile devices as well as an easy to navigate layout.</p>
      </div>
    </div>
    <div class="connect" v-if="connect">
      <div class="service">
        <i class="fas fa-comments" style="color: #6bdde4"></i>
        <h5>Marketing</h5>
        <hr>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis iste nihil aliquid commodi totam eligendi quidem aspernatur veritatis cumque, minus rem soluta quos voluptatem quis minima natus nam neque?</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Services',
  data () {
    return {
      design: true,
      develop: false,
      connect: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #services-container {
    text-align: center;
    padding: 40px 20px;
    background-color: #333;
    color: #e6e6e6;
  }

  #services-container h1 {
    font-size: 24px;
    margin: 0 0 20px 0;
    border-radius: 20px;
  }

  #services-container ul {
    list-style-type: none;
    display: flex;
    justify-content: space-evenly;
    margin: 40px 10px;
    font-weight: 100;
  }

  #services-container li {
    padding-bottom: 10px;
  }

  .active {
    border-bottom: 1px dotted #e46b6a;
    font-weight: 400;
  }

  .service {
    background: #e6e6e690;
    color: #e6e6e6;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 20px -5px rgba(0,0,0,0.75);
    border-radius: 2px;
  }

  .service p {
    text-align: justify;
  }

  .service hr {
    background-color: #e4646a50;
    width: 50%;
    height: 1px;
    margin: 20px auto;
  }

  .service i {
    font-size: 32px;
    background-color: #333;
    color: #e46b6a;
    padding: 20px;
    border-radius: 100%;
    margin-bottom: 20px;
  }

  .service p {
    font-family: "Josefin Sans", sans-serif;
  }

  @media only screen and (min-width: 800px) {
    #services-container {
      padding: 40px 180px;
    }
  }

  @media only screen and (min-width: 1000px) {
    #services-container {
      padding: 40px;
    }

    .services {
      display: flex;
      justify-content: space-around;
    }

    .service {
      width: 300px;
    }
  }
</style>



<!-- <div class="services">
      <div class="service">
        <i class="fas fa-pen-nib"></i>
        <h5>Design</h5>
        <hr>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis iste nihil aliquid commodi totam eligendi quidem aspernatur veritatis cumque, minus rem soluta quos voluptatem quis minima natus nam neque?</p>
      </div>
      <div class="service">
        <i class="fas fa-code" style="color: #8de46b"></i>
        <h5>Development</h5>
        <hr>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis iste nihil aliquid commodi totam eligendi quidem aspernatur veritatis cumque, minus rem soluta quos voluptatem quis minima natus nam neque?</p>
      </div>
      <div class="service">
        <i class="fas fa-comments" style="color: #6bdde4"></i>
        <h5>Communication</h5>
        <hr>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim debitis iste nihil aliquid commodi totam eligendi quidem aspernatur veritatis cumque, minus rem soluta quos voluptatem quis minima natus nam neque?</p>
      </div>
    </div> -->