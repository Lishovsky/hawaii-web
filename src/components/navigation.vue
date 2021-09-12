<template>
  <nav>
    <div class="nav_leftBox">
      <router-link to="/"
        ><img src="../assets/img/logo.svg" alt="brandlogo"
      /></router-link>
    </div>
    <div class="nav_rightBox">
      <router-link to="/">Hawaii</router-link>
      <router-link to="/opalanie_natryskowe">Opalanie natryskowe</router-link>
      <router-link to="/pierwsza_wizyta">Pierwsza wizyta</router-link>
      <router-link to="/cennik">Cennik</router-link>
      <router-link to="/rezerwacja_wizyty">zarezerwuj wizytę</router-link>
      <a href="#">Kontakt</a>
    </div>
    <div class="mobileNavToggler" @click="mobileNavActive()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
  methods: {
    mobileNavActive() {
      document
        .querySelector(".mobileNavToggler span:nth-child(1)")
        .classList.toggle("activeSpanOne");
      document
        .querySelector(".mobileNavToggler span:nth-child(2)")
        .classList.toggle("activeSpanTwo");
      document
        .querySelector(".mobileNavToggler span:nth-child(3)")
        .classList.toggle("activeSpanThree");
      document
        .querySelector(".nav_rightBox")
        .classList.toggle("mobileNavActive");
    },
  },
};
</script>

<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 0% 10vw;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dd9961;
  background: #fff;
}

.mobileNavToggler {
  display: none;
}

.nav_leftBox {
  height: 100%;
}

.nav_leftBox a {
  height: 100%;
  display: flex;
  align-items: center;
}
.nav_leftBox img {
  height: 70%;
}

.nav_rightBox a {
  margin-left: 40px;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  position: relative;
  transition: 300ms;
}

.nav_rightBox a::before {
  position: absolute;
  content: "";
  top: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #dd9961;
  transform: translateY(100%);
  transition: 600ms;
  opacity: 0;
}

.nav_rightBox a::after {
  position: absolute;
  content: "";
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #dd9961;
  transform: translateY(-100%);
  transition: 600ms;
  opacity: 0;
}

.nav_rightBox a:hover::before {
  transform: translateY(0%);
  opacity: 1;
}

.nav_rightBox a:hover::after {
  transform: translateY(0%);
  opacity: 1;
}

@media only screen and (max-width: 1400px) {
  .nav_rightBox a {
    margin-left: 25px;
    font-size: 13px;
  }
  .nav_leftBox img {
    height: 50%;
  }
}

@media only screen and (max-width: 1200px) {
  nav {
    position: fixed;
    background: #fff;
  }

  .nav_rightBox {
    display: flex;
    flex-direction: column;
    text-align: center;
    position: fixed;
    justify-content: center;
    margin-top: 80px;
    height: 90vh;
    width: 100vw;
    left: 0;
    top: 0;
    background: #fff;
    z-index: 90;
    transform: translateX(-100vw);
    transition: 300ms;
  }

  .mobileNavActive {
    transform: translateX(0vh);
  }
  .nav_rightBox a {
    margin: 0vh 8vw 5vh 8vw;
  }

  .mobileNavToggler {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 25px;
    /* background: #000; */
    position: relative;
    cursor: pointer;
  }

  .mobileNavToggler span {
    display: flex;
    width: 30px;
    height: 4px;
    background: #dd9961;
    /* margin-top: 5px; */
    transition: 300ms;
  }

  .activeSpanOne {
    transform: translateY(11px) translateX(1px) rotate(45deg);
  }
  .activeSpanThree {
    transform: translateY(-10px) rotate(-45deg);
  }
  .activeSpanTwo {
    opacity: 0;
  }
}
</style>
