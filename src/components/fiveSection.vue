<template>
  <section class="fiveSection">
    <h2>Cennik</h2>

    <div class="fiveSection_content">
      <div class="content_Box_item">
        <div class="box_item_element">
          <img src="../assets/img/square.png" alt="square" />
          <p>Całe ciało</p>
        </div>
        <div class="box_item_element"><p>110 zł</p></div>
      </div>

      <div class="content_Box_item">
        <div class="box_item_element">
          <img src="../assets/img/square.png" alt="square" />
          <p>Same nogi</p>
        </div>
        <div class="box_item_element"><p>70 zł</p></div>
      </div>
    </div>

    <div class="content_Box_item">
      <div class="box_item_element">
        <img src="../assets/img/square.png" alt="square" />
        <p>Szyja, twarz, dekolt</p>
      </div>
      <div class="box_item_element"><p>60 zł</p></div>
    </div>

    <div class="content_Box_item">
      <div class="box_item_element">
        <img src="../assets/img/square.png" alt="square" />
        <p>od pasa w górę</p>
      </div>
      <div class="box_item_element"><p>70 zł</p></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fiveSection",
};
</script>

<style>
.fiveSection {
  width: 100%;
  background: #fff;
  min-height: auto;
  padding: 10vh 10vw;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.fiveSection h2 {
  font-size: 80px;
  color: #cf9d75;
  position: relative;
  top: 5px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

.fiveSection p {
  text-transform: uppercase;
  font-size: 20px;
}

.fiveSection .content_Box_item {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-bottom: 2px solid #cf9d75;
  padding: 3vh 0%;
}

.fiveSection .content_Box_item .box_item_element {
  display: flex;
  align-items: center;
}

.fiveSection .content_Box_item .box_item_element img {
  height: 37px;
  margin-right: 40px;
}
</style>