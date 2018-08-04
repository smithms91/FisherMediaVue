<template>
  <div id="newsletter-container">
    <i class="fas fa-envelope"></i>
    <h1>Newsletter</h1>
    <p>Stay up to date with our latest news and services!</p>
    <div class="submit-form">
      <input type="email" placeholder="Enter your email">
      <button>Subscribe</button>
    </div>
    <p class="safe">Your email is safe with us, we don't spam.</p>

    <p class="nothanks">No thanks</p>
  </div>
</template>

<script>

export default {
  name: 'Newsletter',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #newsletter-container {
    text-align: center;
    padding: 20px 0;
    background: linear-gradient(#eee, #ccc);
  }

  #newsletter-container i {
    font-size: 40px;
  }

  #newsletter-container h1 {
    font-size: 20px;
  }

  .submit-form {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  #newsletter-container input {
    border: 1px solid #222;
    padding: 5px 10px;
  }

  #newsletter-container button {
    background-color: #e46b6a;
    border: none;
    padding: 5px;
    border: 1px solid #22222250;
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
  }

  .safe {
    font-size: 14px;
    margin-top: 20px;
    color: #666;
  }

  .nothanks {
    text-decoration: underline;
  }
</style>
