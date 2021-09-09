<template>
  <div id="homeBox">
    <firstSection></firstSection>
    <twoSection></twoSection>
    <threeSection></threeSection>
    <fourSection></fourSection>
    <fiveSection></fiveSection>
  </div>
</template>

<script>
import firstSection from "../components/firstSection.vue";
import twoSection from "../components/twoSection.vue";
import threeSection from "../components/threeSection.vue";
import fourSection from "../components/fourSection.vue";
import fiveSection from "../components/fiveSection.vue";

export default {
  components: {
    firstSection,
    twoSection,
    threeSection,
    fourSection,
    fiveSection,
  },
};
</script>

<style>
.homeBox {
  width: 100%;
  height: auto;
  overflow: hidden;
}
</style>



