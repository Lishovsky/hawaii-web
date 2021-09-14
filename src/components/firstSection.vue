<template>
  <section class="firstSection">
    <div class="firstSection_left"></div>
    <div class="firstSection_right">
      <div class="mainBox">
        <div class="mainBox_content">
          <h2>Wyrazista</h2>
          <h3>Opalenizna?</h3>
        </div>
      </div>
      <div class="mainBox_description">
        <p>
          <span>NIE CZEKAJ DO WAKACJI!</span><br />
          UMÓW SIĘ NA OPALANIE NATRYSKOWE <br />W <span>HAWAII KATOWICE</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "firstSection",
};
</script>

<style>
.firstSection {
  display: grid;
  grid-template-areas: "left right";
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-top: 80px;
  min-height: calc(100vh - 80px);
  box-sizing: border-box;
  background: rgb(230, 230, 230);
}

.firstSection_left {
  grid-area: left;
  background: burlywood;
  background-image: url("../assets/img/onesec.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 50%;
}

.firstSection_right {
  grid-area: right;
  background: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.firstSection_right .mainBox {
  background: #cf9d75;
  width: 110%;
  min-height: 35vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  right: calc(10vw + 10%);
}

.firstSection_right .mainBox .mainBox_content {
  height: 25vh;
  width: 90%;
  border: 8px solid #fff;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: center;
}

.firstSection_right .mainBox .mainBox_content h2,
.firstSection_right .mainBox .mainBox_content h3 {
  margin: 0;
  padding: 0;
}

.firstSection_right .mainBox .mainBox_content h2 {
  font-size: 88px;
  color: #fff;
  position: relative;
  top: 5px;
}

.firstSection_right .mainBox .mainBox_content h3 {
  font-size: 45px;
  font-weight: 400;
  position: relative;
  bottom: 5px;
}

.firstSection_right .mainBox_description {
  margin-top: 5vh;
  background: #fff0e3;
  width: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: calc(10vw + 10%);
  text-align: center;
  font-weight: 600;
  font-size: 31px;
}

.firstSection_right .mainBox_description span {
  color: #cf9d75;
}

@media only screen and (max-width: 1140px) {
  .firstSection {
    grid-template-areas: "left" "right";
    grid-template-rows: 0vh 100vh;
    grid-template-columns: 1fr;
  }

  .firstSection_left {
    /* background-attachment: fixed;
    background-position: 40%; */
    display: none;
  }

  .firstSection_right .mainBox .mainBox_content {
    height: 20vh;
    border: 3px solid #fff;
  }

  .firstSection_right {
    max-width: 100vw;
    box-sizing: border-box;
    background: none;
    background-image: url("../assets/img/onesec.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 10% 50%;
  }

  .firstSection_right .mainBox {
    right: 0;
    width: 80vw;
    min-height: 25.5vh;
    padding: 0;
    margin: 2vh auto;
    position: relative;
    bottom: 8vh;
  }

  .firstSection_right .mainBox .mainBox_content h2 {
    font-size: 35px !important;
    position: relative;
    top: 0px;
    margin: 0 !important;
  }

  .firstSection_right .mainBox .mainBox_content h3 {
    font-size: 25px;
    font-weight: 400;
    position: relative;
    bottom: 5px;
  }

  .firstSection_right .mainBox_description {
    margin-top: 5vh;
    background: #fff0e3;
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    right: 0;
    text-align: center;
    font-weight: 600;
    font-size: 13px;
    padding: 5vw;
    box-sizing: border-box;
    position: relative;
    bottom: 8vh;
  }
}
</style>