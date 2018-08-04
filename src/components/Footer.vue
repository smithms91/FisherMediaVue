<template>
  <div id="footer-container">
    <div class="logo">
      <img src="../assets/footer-logo.png" alt="">
    </div>
    <ul class="footer-nav">
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>

    <ul class="social-icons">
      <li><i class="fab fa-facebook-square"></i></li>
      <li><i class="fab fa-twitter-square"></i></li>
      <li><i class="fab fa-instagram"></i></li>
      <li><i class="fab fa-youtube"></i></li>
    </ul>

    <div class="footer-bottom">
      <p>Copyright &copy; 2018 <span>Fisher Media</span> | All Rights Reserved</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#footer-container {
  text-align: center;
  padding: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 300px;
  background-image: url("../assets/footer-bg.png");
  background-position: center;
  background-size: cover;
  color: #e6e6e6;
  position: relative;
}

.footer-nav {
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
}

.footer-nav li {
  padding: 7px;
}

.logo img {
  width: 75px;
}

.social-icons {
  list-style-type: none;
  display: flex;
  color: #e6e6e6;
  width: 150px;
  justify-content: space-around;
}

.footer-bottom {
  height: 50px;
  width: 100%;
  background-color: #222;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  position: absolute;
  bottom: -50px;
  border-top: 1px solid #e6e6e625;
}

.footer-bottom span {
  color: #e46b6a;
}

.footer-bottom p {
  font-size: 12px;
  margin: 0;
}
</style>
