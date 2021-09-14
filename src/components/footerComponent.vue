<template>
  <footer>
    <div class="footer_item"><p>ALL RIGHTS RESERVED HAWAII 2021</p></div>
    <div class="footer_item">
      <a href="https://www.facebook.com/hawaii.katowice"
        ><img src="../assets/img/facebook.png" alt="fb"
      /></a>
      <a href="https://www.instagram.com/hawaii.katowice/"
        ><img src="../assets/img/instagram.png" alt="instagram"
      /></a>
      <a href="https://vm.tiktok.com/ZMRHEStqR/"
        ><img src="../assets/img/tiktok.png" alt="tiktok"
      /></a>
    </div>
    <div class="footer_item">
      <p>CREATED BY<a href="https://www.colorblue.pl/"> DOMINIK LISZKA</a></p>
    </div>
  </footer>
</template>

<script>
export default { name: "footerComponent" };
</script>

<style>
footer {
  width: 100%;
  min-height: 135px;
  box-sizing: border-box;
  background: #fff0e3;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer .footer_item:nth-child(2) {
  width: 150px;
  display: flex;
  justify-content: space-between;
}

footer p {
  font-weight: bold;
  font-size: 15px;
}

footer .footer_item img {
  transition: 300ms;
}

footer .footer_item img:hover {
  transform: translateY(-5px);
}

footer .footer_item a {
  color: #000;
  text-decoration: none;
}

@media only screen and (max-width: 1060px) {
  footer {
    flex-direction: column;
    padding: 3vh 10vw;
    text-align: center;
  }

  .footer_item {
    margin: 10px;
  }
}

@media only screen and (max-width: 400px) {
  .footer_item p {
    font-size: 12px;
  }
}
</style>