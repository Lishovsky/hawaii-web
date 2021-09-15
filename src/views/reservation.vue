<template>
  <section class="reservationSystem">
    <h2>REZERWACJA WIZYTY</h2>
    <p>
      Przygotowujemy dla Ciebie system rezerwacji!<br /><br />Na chwilę obecną
      zapisu można dokonać przez
      <a href="https://www.facebook.com/hawaii.katowice"> facebooka</a>,
      <a href="https://www.instagram.com/hawaii.katowice/">instagrama</a> lub
      telefonicznie pod numerem 789 379 850
    </p>
  </section>
</template>

<script>
export default {
  name: "reservation",
};
</script>

<style>
.reservationSystem {
  margin-top: 80px;
  padding: 10vh 0%;
  box-sizing: border-box;
  background: #cf9d75;
  width: 100%;
  text-align: center;
}

.reservationSystem h2 {
  font-size: 80px;
  color: #ffffff;
  position: relative;
  top: 5px;
  text-transform: uppercase;
  margin: 0 0 5vh 0;
  padding: 0 10vw;
}

.reservationSystem p {
  padding: 0% 10vw;
  box-sizing: border-box;
  text-align: center;
  color: #fff;
  font-weight: 500;
}

.reservationSystem p a {
  color: #fff0e3;
  text-decoration: none;
}

.reservationSystem p a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 870px) {
  .reservationSystem h2 {
    font-size: 20px;
  }
  .reservationSystem p {
    text-align: left;
  }
}
</style>