<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <reserved id="contact"></reserved>
    <contact></contact>
    <googleMaps></googleMaps>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
import reserved from "./components/reserved.vue";
import contact from "./components/contact.vue";
import googleMaps from "./components/googleMaps.vue";
import footerComponent from "./components/footerComponent.vue";

export default {
  components: { navigation, reserved, contact, googleMaps, footerComponent },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap");

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}

@media only screen and (max-width: 870px) {
  body h2 {
    font-size: 30px !important;
    margin-bottom: 3vh !important;
  }
}
</style>
