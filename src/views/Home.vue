<template>
  <div>
    <firstSection></firstSection>
    <twoSection></twoSection>
    <threeSection></threeSection>
    <fourSection></fourSection>
    <section class="fiveSection">
      <h2>Cennik</h2>
    </section>
  </div>
</template>

<script>
import firstSection from "../components/firstSection.vue";
import twoSection from "../components/twoSection.vue";
import threeSection from "../components/threeSection.vue";
import fourSection from "../components/fourSection.vue";

export default {
  components: { firstSection, twoSection, threeSection, fourSection },
};
</script>

<style>
.fiveSection {
  width: 100%;
  background: #fff;
  min-height: 100vh;
  padding: 10vh 5vw;
  box-sizing: border-box;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.fiveSection h2 {
  font-size: 80px;
  color: #cf9d75;
  position: relative;
  top: 5px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}
</style>



