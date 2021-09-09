<template>
  <section class="fourSection">
    <h2>Galeria zdjęć</h2>
    <div class="galery">
      <div class="galeryItem"></div>
      <div class="galeryItem"></div>
      <div class="galeryItem"></div>
      <div class="galeryItem"></div>
    </div>
    <div class="circle">
      <div class="circleItem activeCircle"></div>
      <div class="circleItem"></div>
      <div class="circleItem"></div>
      <div class="circleItem"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fourSection",
};
</script>

<style>
.fourSection {
  width: 100%;
  background: #f4f4f4;
  min-height: 100vh;
  padding: 10vh 5vw;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.fourSection h2 {
  font-size: 80px;
  color: #cf9d75;
  position: relative;
  top: 5px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

.fourSection .galery {
  display: flex;
  justify-content: space-between;
  margin: 5vh 0%;
}

.fourSection .galery .galeryItem {
  background: #c4c4c4;
  box-sizing: border-box;
  width: calc(100vw / 4 - 5vw);
  height: calc(100vw / 4 - 5vw);
}

.circle {
  display: flex;
  width: 200px;
  margin: 0 auto;
  justify-content: space-between;
}

.circleItem {
  width: 31px;
  height: 31px;
  background: #c4c4c4;
  border-radius: 100%;
  transition: 300ms;
}

.circleItem:hover {
  transform: scale(1.1);
}

.activeCircle {
  background: #cf9d75;
}
</style>