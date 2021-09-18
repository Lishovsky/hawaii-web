<template>
  <section class="threeSection">
    <div class="threeSection_Box">
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>Wyrazista opalenizna w 1h</p>
      </div>
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>Brak nieprzyjemnego zapachu</p>
      </div>
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>Produkty odpowiednie dla wegan</p>
      </div>
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>brak pomarańczowych tonów</p>
      </div>
    </div>
    <div class="threeSection_Box">
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>produkty nietestowane na zwierzętach</p>
      </div>
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>100% naturalny DHA</p>
      </div>
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>Bezpieczne dla kobiet w ciąży</p>
      </div>
      <div class="threeSection_box_item">
        <img src="../assets/img/square.png" alt="square" />
        <p>Naturalny efekt opalenizny</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "threeSection",
};
</script>


<style>
.threeSection {
  width: 100%;
  height: auto;
  padding: 10vh 10vw;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background: #fff;
}

.threeSection_Box:nth-child(1) {
  grid-area: left;
}

.threeSection_Box:nth-child(2) {
  grid-area: right;
}

.threeSection_box_item {
  display: flex;
  height: 37px;
  margin-top: 6vh;
  align-items: center;
}

.threeSection_box_item p {
  margin-left: 40px;
  text-transform: uppercase;
  font-size: 20px;
}

@media only screen and (max-width: 1194px) {
  .threeSection {
    display: flex;
    flex-direction: column;
    padding: 10vh 10vw;
  }
}

@media only screen and (max-width: 483px) {
  .threeSection_box_item p {
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 13.5px;
  }
}

@media only screen and (max-width: 330px) {
  .threeSection {
    padding: 4vh 10vw;
  }

  .threeSection_box_item {
    margin-top: 3vh;
  }

  .threeSection_box_item p {
    margin-left: 20px;
    text-transform: uppercase;
    font-size: 13.5px;
  }

  .threeSection_box_item img {
    margin-right: 20px;
    height: 20px;
    width: 20px;
  }
}
</style>