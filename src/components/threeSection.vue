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
  padding: 10vh 5vw;
  box-sizing: border-box;
  display: grid;
  grid-template-areas: "left right";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
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
</style>