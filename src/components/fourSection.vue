<template>
  <section class="fourSection">
    <h2>Galeria zdjęć</h2>
    <div class="galery">
      <div @click="echo()" class="galeryItem">
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
      <div @click="firstGallery()" class="circleItem 1"></div>
      <div @click="firstGallery()" class="circleItem 2"></div>
      <div @click="firstGallery()" class="circleItem 3"></div>
      <div @click="firstGallery()" class="circleItem 4"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fourSection",
  methods: {
    firstGallery(event) {
      // const arrayOfCircleItem = document.querySelectorAll(".circleItem");
      // const arrayFromNodeList = Array.from(arrayOfCircleItem);

      // console.log(arrayFromNodeList);
      console.log(event.target.className);
      // for (let u = 0; u < arrayFromNodeList.length; u++) {
      //   if (event.target.className === `circleItem  ${u}`) {
      //     this.classList.add("activeCircle");
      //     console.log("jest taki element");
      //   } else {
      //     arrayFromNodeList[u].classList.remove("activeCircle");
      //     console.log("nie ma takiego elementu");
      //   }
      // }
    },
  },
};

// if (this.classList.contains(".1")) {
//   console.log("to jest nr 1");
// } else if (this.classList.contains(".1")) {
//   console.log("to jest nr 2");
// } else if (this.classList.contains(".1")) {
//   console.log("to jest nr 3");
// } else {
//   console.log("to jest ostatnia kropka");
//   console.log(this);
</script>

<style>
.fourSection {
  width: 100%;
  background: #f4f4f4;

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
  flex-wrap: wrap;
  margin: 10vh 0%;
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

@media only screen and (max-width: 1140px) {
  .fourSection .galery .galeryItem {
    width: calc(100vw / 2 - 11vw);
    height: calc(100vw / 2 - 11vw);
    margin-top: 2vw;
  }

  .fourSection .galery .galeryItem:nth-child(1),
  .fourSection .galery .galeryItem:nth-child(2) {
    margin-top: 0;
  }

  .fourSection h2 {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .fourSection .galery {
    margin: 3vh 0 7vh 0;
  }
}
</style>