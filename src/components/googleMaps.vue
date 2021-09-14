<template>
  <section class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.2024556702527!2d18.980339215889238!3d50.194746513637334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c9556a7abdc5%3A0x27b7159c1d99b167!2sHAWAII%20Opalanie%20natryskowe!5e0!3m2!1spl!2spl!4v1631651735185!5m2!1spl!2spl"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>
  </section>
</template>

<script>
export default {
  name: "googleMaps",
};
</script>

<style>
.map {
  width: 100%;
  height: 70vh;
  background: #eee;
}

.map iframe {
  width: 100%;
  height: 100%;
}
</style>