<template>
  <section class="twoSection">
    <div class="twoSection_left">
      <div class="mainBox">
        <div class="mainBox_content">
          <h2>ZALETY</h2>
          <h3>opalania natryskowego</h3>
        </div>
      </div>
    </div>
    <div class="twoSection_right"></div>
  </section>
</template>

<script>
export default {
  name: "twoSection",
};
</script>

<style>
.twoSection {
  display: grid;
  grid-template-areas: "left right";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  min-height: 70vh;
  box-sizing: border-box;
  background: rgb(230, 230, 230);
}

.twoSection_left {
  grid-area: left;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.twoSection_right {
  grid-area: right;
  background: burlywood;
  background-image: url("../assets/img/tosec.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 50%;
  display: flex;
  align-items: center;
}

.twoSection_left .mainBox {
  background: #cf9d75;
  width: 110%;
  min-height: 35vh;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  left: 10vw;
}

.twoSection_left .mainBox .mainBox_content {
  height: 25vh;
  width: 90%;
  border: 8px solid #fff;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: center;
}

.twoSection_left .mainBox .mainBox_content h2,
.twoSection_left .mainBox .mainBox_content h3 {
  margin: 0;
  padding: 0;
}

.twoSection_left .mainBox .mainBox_content h2 {
  font-size: 88px;
  color: #fff;
  position: relative;
  top: 5px;
}

.twoSection_left .mainBox .mainBox_content h3 {
  font-size: 45px;
  font-weight: 400;
  position: relative;
  bottom: 5px;
}

@media only screen and (max-width: 1140px) {
  .twoSection {
    display: flex;
    height: auto;
    min-height: 20vh;
  }

  .twoSection_left {
    grid-area: left;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    /* padding: 0% 10vw; */
    box-sizing: border-box;
  }

  .twoSection_right {
    display: none;
  }

  .twoSection_left .mainBox {
    background: #cf9d75;
    width: 100%;
    padding: 0% 10vw;
    box-sizing: border-box;
    min-height: 40vh;
    left: 0;
  }

  .twoSection_left .mainBox .mainBox_content {
    height: auto;
    width: 100%;
    border: 3px solid #fff;
    padding: 15px 10vw;
  }

  .twoSection_left .mainBox .mainBox_content h2,
  .twoSection_left .mainBox .mainBox_content h3 {
    margin: 0;
    padding: 0;
  }

  .twoSection_left .mainBox .mainBox_content h2 {
    font-size: 15px;
    top: 5px;
    margin: 0vh 0 2vh 0 !important;
  }

  .twoSection_left .mainBox .mainBox_content h3 {
    font-size: 20px;
    font-weight: 400;
    position: relative;
    bottom: 5px;
  }
}
</style>