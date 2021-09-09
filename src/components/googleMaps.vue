<template>
  <section class="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2554.202455670259!2d18.980339215889238!3d50.194746513637334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c92eb109ef27%3A0xd45eaaecbae1ce18!2sHierowskiego%202%2C%2040-750%20Katowice!5e0!3m2!1spl!2spl!4v1631225878431!5m2!1spl!2spl"
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