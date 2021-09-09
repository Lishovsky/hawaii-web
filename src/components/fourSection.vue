<template>
  <section class="fourSection">
    <h2>Galeria zdjęć</h2>
    <div class="galery">
      <div class="galeryItem">
        <img src="../assets/img/gallery/1/1.jpeg" alt="opalanie" />
      </div>
      <div class="galeryItem">
        <img src="../assets/img/gallery/1/2.jpeg" alt="opalanie" />
      </div>
      <div class="galeryItem">
        <img src="../assets/img/gallery/1/3.jpeg" alt="opalanie" />
      </div>
      <div class="galeryItem">
        <img src="../assets/img/gallery/1/4.jpeg" alt="opalanie" />
      </div>
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
  padding: 10vh 10vw;
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
  width: calc(100vw / 4 - 7vw);
  height: calc(100vw / 4 - 5vw);
  cursor: pointer;
  overflow: hidden;
  position: relative;
  border: 1px solid #cf9d75;
}

.fourSection .galery .galeryItem img {
  width: 100%;
}

.fourSection .galery .galeryItem::before,
.fourSection .galery .galeryItem::after {
  content: "";
  position: absolute;
  background: #cf9d75;
  width: 100%;
  height: 3px;
  z-index: 1;
}
.fourSection .galery .galeryItem::before {
  left: 0;
  top: 0;
  transform: translateX(-100%);
  transition: 300ms;
}

.fourSection .galery .galeryItem::after {
  right: 0;
  bottom: 0;
  transform: translateX(100%);
  transition: 300ms;
}

.fourSection .galery .galeryItem:hover.galeryItem::after {
  transform: translateX(0%);
}

.fourSection .galery .galeryItem:hover.galeryItem::before {
  transform: translateX(0%);
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
  cursor: pointer;
  transition: 300ms;
}

.circleItem:hover {
  transform: scale(1.1);
}

.activeCircle {
  background: #cf9d75;
}
</style>