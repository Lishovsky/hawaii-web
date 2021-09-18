<template>
  <section class="contact">
    <h2>Kontakt</h2>
    <div class="contactBox">
      <div class="contactBox_item">
        <div class="image">
          <img src="../assets/img/phone.png" alt="phone" />
        </div>
        <h3>Telefon</h3>
        <h4>789 379 850</h4>
      </div>
      <div class="contactBox_item">
        <div class="image">
          <img src="../assets/img/mail.png" alt="phone" />
        </div>
        <h3>E-mail</h3>
        <h4>kontakt@hawaii-katowice.pl</h4>
      </div>
      <div class="contactBox_item">
        <div class="image">
          <img src="../assets/img/location.png" alt="phone" />
        </div>
        <h3>Katowice, ul. Hierowskiego 2</h3>
        <h4>(osiedle Bażantowo)</h4>
      </div>
      <div class="contactBox_item">
        <div class="image">
          <img src="../assets/img/time.png" alt="phone" />
        </div>
        <h3>Pon-Pt: <span>11:00 - 21:00</span></h3>
        <h3>Sobota <span>9:00 - 15:00</span></h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact",
};
</script>

<style>
.contact {
  width: 100%;
  min-height: 40vh;
  padding: 15vh 5vw 15vh 10vw;
  box-sizing: border-box;
  text-align: center;
  background: #fff;
}

.contact h2 {
  font-size: 80px;
  color: #cf9d75;
  position: relative;
  top: 5px;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
}

.contact .contactBox {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.contact .contactBox .contactBox_item {
  width: calc((100% / 4.5));
  text-transform: uppercase;
}

.contact .contactBox .contactBox_item .image {
  height: 70px;
  margin: 10vh 0 30px 0;
}

.contact .contactBox .contactBox_item .image img {
  height: 80%;
}

.contact .contactBox .contactBox_item h3,
.contact .contactBox .contactBox_item h4 {
  margin: 0;
  padding: 0;
  font-size: 14px;
  margin-bottom: 3px;
}

.contact .contactBox .contactBox_item h3 {
  color: #cf9d75;
}

.contact .contactBox .contactBox_item h3 span {
  color: #000;
  font-weight: 600;
}

.contact .contactBox .contactBox_item h4 {
  font-weight: 600;
}
@media only screen and (max-width: 1392px) {
  .contact .contactBox .contactBox_item h3,
  .contact .contactBox .contactBox_item h4 {
    font-size: 13px;
  }
}

@media only screen and (max-width: 1291px) {
  .contact .contactBox {
    flex-wrap: wrap;
  }

  .contact .contactBox .contactBox_item {
    width: 50%;
  }
}

@media only screen and (max-width: 1291px) {
  .contact {
    padding: 16vh 5vw 16vh 5vw;
  }
  .contact .contactBox .contactBox_item .image {
    height: 70px;
    margin: 3vh 0 0px 0;
  }

  .contact .contactBox .contactBox_item {
    height: 20vh;
    padding: 3vh 0%;
  }

  .contact .contactBox .contactBox_item .image img {
    height: 50%;
  }
}

@media only screen and (max-width: 720px) {
  .contact .contactBox .contactBox_item {
    width: 100%;
  }
}
</style>