<template>
  <section class="sectionSix">
    <div class="sectionSix_bgColor">
      <button>Zarezerwuj wizytę</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "reserved",
};
</script>

<style>
.sectionSix {
  width: 100%;
  box-sizing: border-box;
  height: 70vh;
  background-image: url("../assets/img/reserved.png");
  background-size: cover;
  background-attachment: fixed;
}

.sectionSix .sectionSix_bgColor {
  width: 100%;
  height: 100%;
  background: rgba(121, 75, 38, 0.52);
  display: flex;
  align-items: center;
  justify-content: center;
}

.sectionSix .sectionSix_bgColor button {
  border: 10px solid #fff;
  padding: 50px 40px;
  background: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 45px;
  font-weight: 900;
  cursor: pointer;
  overflow: hidden;
  z-index: 2;
  transition: 700ms;
}

.sectionSix .sectionSix_bgColor button:hover {
  color: #dd9961;
  border-color: #dd9961;
  background: #dd996128;
}
</style>