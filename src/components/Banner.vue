<template>
  <div id="banner">
    <carousel :per-page="1" :autoplay="true" :autoplayTimeout="5000" paginationColor="#e46b6a" paginationActiveColor="#eee" :loop="true">
      <slide class="slide image1">
        <h2>Welcome to</h2> 
        <h1><strong>Fisher Media</strong></h1>
        <button>Contact Us Now!</button>
      </slide>
      <slide class="slide image2">
        <h2>Professional</h2> 
        <h1><strong>Web Design</strong></h1>
        <button>View our projects!</button>
      </slide>
      <slide class="slide image3">
        <h2>Web Development</h2>
        <h1><strong>Tutorials</strong></h1> 
        <button>Visit our YouTube!</button>
      </slide>
    </carousel>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #e6e6e6;
    text-align: center;
    height: 400px;
    background-position: center;
    background-size: cover;
  }

  #banner > section > div.VueCarousel-pagination {
    position: absolute;
    bottom: 0;
  }

  .image1 {
    background-image: url("../assets/banner-1.png");
  }

  .image2 {
    background-image: url("../assets/banner-2.png");
  }

  .image3 {
    background-image: url("../assets/banner-3.png");
  }

  .slide h1 {
    font-family: 'Josefin Sans', sans-serif;
  }

  .slide button {
    padding: 10px 20px;
    margin-top: 40px;
    border-radius: 20px;
    background-color: transparent;
    border: 1px solid #eee;
    color: #eee;
    transition: all .3s;
    outline: none;
    /* border: 1px solid rgba(255,255,255,0.45); */
  }

  .slide button:hover {
    background-color: #e46b6a;

  }

  .VueCarousel-dot-button {
    border: 1px solid rgba(255,255,255,0.25) !important;
    background-color: #e46b6a;
  }

  .VueCarousel-dot-button:focus {
    outline: none !important;
  }

  
</style>
