<template>
  <nav>
    <div class="nav_leftBox">
      <img src="../assets/img/logo.svg" alt="brandlogo" />
    </div>
    <div class="nav_rightBox">
      <router-link to="/">Hawaii</router-link>
      <router-link to="/about">Opalanie natryskowe</router-link>
      <router-link to="/pierwsza-wizyta">Pierwsza wizyta</router-link>
      <router-link to="/zarezerwuj-wizyte">zarezerwuj wizytę</router-link>
      <router-link to="/cennik">Cennik</router-link>
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
  box-shadow: 1px 9px 15px -11px rgba(0, 0, 0, 0.27);
}

.nav_leftBox {
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
}

.nav_leftBox img {
  /* position: relative;
  bottom: 3px; */
  height: 70%;
}

.nav_rightBox a {
  margin-left: 40px;
  text-transform: uppercase;
  font-size: 14px;
  text-decoration: none;
  color: #000;
  font-weight: 700;
  /* position: relative;
  bottom: 3px; */
}
</style>
