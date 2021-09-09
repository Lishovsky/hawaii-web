<template>
  <div id="app">
    <navigation></navigation>
    <router-view />
    <div id="test"></div>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";

export default {
  components: { navigation },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;700&display=swap");

body {
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
}

#app {
  width: 100vw;
  overflow: hidden;
  box-sizing: border-box;
}
</style>
