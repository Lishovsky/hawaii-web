<template>
  <nav>
    <div class="nav_leftBox">
      <router-link to="/"
        ><img src="../assets/img/logo.svg" alt="brandlogo"
      /></router-link>
    </div>
    <div class="nav_rightBox">
      <router-link to="/">Hawaii</router-link>
      <router-link to="/about">Opalanie natryskowe</router-link>
      <router-link to="/pierwsza-wizyta">Pierwsza wizyta</router-link>
      <router-link to="/cennik">Cennik</router-link>
      <router-link to="/zarezerwuj-wizyte">zarezerwuj wizytę</router-link>
      <router-link to="/kontakt">Kontakt</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style>
nav {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  width: 100vw;
  height: 80px;
  padding: 0% 10vw;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #dd9961;
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
  overflow: hidden;
  margin-left: 40px;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  position: relative;
  transition: 300ms;
  overflow: hidden;
}

.nav_rightBox a:first-child::before {
  position: absolute;
  content: "";
  top: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #dd9961;
  transform: translateX(-100%);
  transition: 300ms;
}

.nav_rightBox a:first-child::after {
  position: absolute;
  content: "";
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #dd9961;
  transform: translateX(100%);
  transition: 300ms;
}

.nav_rightBox a:first-child:hover::before {
  transform: translateX(100%);
}

.nav_rightBox a:first-child:hover::after {
  transform: translateX(-100%);
}
</style>
