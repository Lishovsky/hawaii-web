<template>
  <section class="sectionSix">
    <div class="sectionSix_bgColor">
      <!-- <div class="sectionSix_bgImage"></div> -->
      <a href="https://rezerwacje.hawaii-katowice.pl"><button>Zarezerwuj wizytę</button></a>
      >
    </div>
  </section>
</template>

<script>
export default {
  name: "reserved",
};
</script>

<style>
.sectionSix {
  width: 100%;
  box-sizing: border-box;
  height: 70vh;
  background-image: url("../assets/img/reserved.webp");
  background-size: cover;
  background-attachment: fixed;
}

.sectionSix .sectionSix_bgColor {
  width: 100%;
  height: 100%;
  background: rgba(121, 75, 38, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10vw;
  box-sizing: border-box;
}

.sectionSix .sectionSix_bgColor button {
  border: 10px solid #fff;
  padding: 50px 40px;
  background: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 45px;
  font-weight: 900;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  transition: 700ms;
}

.sectionSix .sectionSix_bgColor button:hover {
  color: #dd9961;
  border-color: #dd9961;
  background: #dd996128;
}

@media only screen and (max-width: 840px) {
  .sectionSix .sectionSix_bgColor button {
    font-size: 25px;
    border: 5px solid #fff;
  }

  .sectionSix {
    height: 50vh;
    background-position: 40%;
  }
}

@media only screen and (max-width: 1140px) {
  .sectionSix {
    width: 100%;
    box-sizing: border-box;
    height: 70vh;
    position: relative;
  }

  .sectionSix .sectionSix_bgColor {
    position: relative;
  }
}

@media only screen and (max-width: 420px) {
  .sectionSix .sectionSix_bgColor button {
    font-size: 15px;
    border: 5px solid #fff;
    padding: 20px;
  }
}
</style>