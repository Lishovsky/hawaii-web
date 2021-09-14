<template>
  <section class="fourSection">
    <h2>Galeria zdjęć</h2>
    <div class="galery">
      <div class="galeryItem">
        <img id="oneImg" src="../assets/img/gallery/1/1.jpeg" alt="opalanie" />
      </div>
      <div class="galeryItem">
        <img id="twoImg" src="../assets/img/gallery/1/2.jpeg" alt="opalanie" />
      </div>
      <div class="galeryItem">
        <img
          id="threeImg"
          src="../assets/img/gallery/1/3.jpeg"
          alt="opalanie"
        />
      </div>
      <div class="galeryItem">
        <img id="fourImg" src="../assets/img/gallery/1/4.jpeg" alt="opalanie" />
      </div>
    </div>
    <div class="circle">
      <div @click="firstGallery()" class="circleItem 1 activeCircle"></div>
      <div @click="twoGallery()" class="circleItem 2"></div>
      <div @click="threeGallery()" class="circleItem 3"></div>
      <div @click="fourGallery()" class="circleItem 4"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: "fourSection",
  methods: {
    firstGallery() {
      //Animation gallery
      document.querySelector(".galeryItem:nth-child(1)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(2)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(3)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(4)").style.opacity = "0";

      setTimeout(function () {
        document.querySelector(".galeryItem:nth-child(1)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(2)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(3)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(4)").style.opacity = "1";
      }, 300);

      const circleOne = document.querySelector(".circleItem:nth-child(1)");
      const circleTwo = document.querySelector(".circleItem:nth-child(2)");
      const circleThree = document.querySelector(".circleItem:nth-child(3)");
      const circleFour = document.querySelector(".circleItem:nth-child(4)");

      circleOne.classList.add("activeCircle");
      circleTwo.classList.remove("activeCircle");
      circleThree.classList.remove("activeCircle");
      circleFour.classList.remove("activeCircle");

      setTimeout(function () {
        document.querySelector("#oneImg").src =
          "../assets/img/gallery/1/1.jpeg";
        document.querySelector("#twoImg").src =
          "../assets/img/gallery/1/2.jpeg";
        document.querySelector("#threeImg").src =
          "../assets/img/gallery/1/3.jpeg";
        document.querySelector("#fourImg").src =
          "../assets/img/gallery/1/4.jpeg";
      }, 300);
    },

    twoGallery() {
      const circleOne = document.querySelector(".circleItem:nth-child(1)");
      const circleTwo = document.querySelector(".circleItem:nth-child(2)");
      const circleThree = document.querySelector(".circleItem:nth-child(3)");
      const circleFour = document.querySelector(".circleItem:nth-child(4)");
      circleOne.classList.remove("activeCircle");
      circleTwo.classList.add("activeCircle");
      circleThree.classList.remove("activeCircle");
      circleFour.classList.remove("activeCircle");

      //Animation gallery
      document.querySelector(".galeryItem:nth-child(1)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(2)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(3)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(4)").style.opacity = "0";

      setTimeout(function () {
        document.querySelector(".galeryItem:nth-child(1)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(2)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(3)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(4)").style.opacity = "1";
      }, 300);

      setTimeout(function () {
        document
          .querySelector("#oneImg")
          .setAttribute("src", "../assets/img/gallery/2/1.jpeg");
        document
          .querySelector("#twoImg")
          .setAttribute("src", "../assets/img/gallery/2/2.jpeg");
        document
          .querySelector("#threeImg")
          .setAttribute("src", "../assets/img/gallery/2/3.jpeg");
        document
          .querySelector("#fourImg")
          .setAttribute("src", "../assets/img/gallery/2/4.jpeg");
      }, 300);
    },
    threeGallery() {
      const circleOne = document.querySelector(".circleItem:nth-child(1)");
      const circleTwo = document.querySelector(".circleItem:nth-child(2)");
      const circleThree = document.querySelector(".circleItem:nth-child(3)");
      const circleFour = document.querySelector(".circleItem:nth-child(4)");
      circleOne.classList.remove("activeCircle");
      circleTwo.classList.remove("activeCircle");
      circleThree.classList.add("activeCircle");
      circleFour.classList.remove("activeCircle");

      //Animation gallery
      document.querySelector(".galeryItem:nth-child(1)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(2)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(3)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(4)").style.opacity = "0";

      setTimeout(function () {
        document.querySelector(".galeryItem:nth-child(1)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(2)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(3)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(4)").style.opacity = "1";
      }, 300);

      document
        .querySelector("#oneImg")
        .setAttribute("src", "../assets/img/gallery/3/1.jpeg");
      document
        .querySelector("#twoImg")
        .setAttribute("src", "../assets/img/gallery/3/2.jpeg");
      document
        .querySelector("#threeImg")
        .setAttribute("src", "../assets/img/gallery/3/3.jpeg");
      document
        .querySelector("#fourImg")
        .setAttribute("src", "../assets/img/gallery/3/4.jpeg");
    },
    fourGallery() {
      const circleOne = document.querySelector(".circleItem:nth-child(1)");
      const circleTwo = document.querySelector(".circleItem:nth-child(2)");
      const circleThree = document.querySelector(".circleItem:nth-child(3)");
      const circleFour = document.querySelector(".circleItem:nth-child(4)");
      circleOne.classList.remove("activeCircle");
      circleTwo.classList.remove("activeCircle");
      circleThree.classList.remove("activeCircle");
      circleFour.classList.add("activeCircle");

      //Animation gallery
      document.querySelector(".galeryItem:nth-child(1)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(2)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(3)").style.opacity = "0";
      document.querySelector(".galeryItem:nth-child(4)").style.opacity = "0";

      setTimeout(function () {
        document.querySelector(".galeryItem:nth-child(1)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(2)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(3)").style.opacity = "1";
        document.querySelector(".galeryItem:nth-child(4)").style.opacity = "1";
      }, 300);

      document
        .querySelector("#oneImg")
        .setAttribute("src", "../assets/img/gallery/4/1.jpeg");
      document
        .querySelector("#twoImg")
        .setAttribute("src", "../assets/img/gallery/4/2.jpeg");
      document
        .querySelector("#threeImg")
        .setAttribute("src", "../assets/img/gallery/4/3.jpeg");
      document
        .querySelector("#fourImg")
        .setAttribute("src", "../assets/img/gallery/4/4.jpeg");
    },
  },
};
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
  /* cursor: pointer; */
  overflow: hidden;
  position: relative;
  border: 1px solid #cf9d75;
  transition: 300ms;
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