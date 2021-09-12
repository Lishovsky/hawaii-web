<template>
  <section class="tan">
    <h2>Opalanie natryskowe</h2>
    <p>
      Opalanie natryskowe to jedna z najbezpieczniejszych form opalania jakie
      mamy do dyspozycji. Polega ona na spryskaniu skóry bezpiecznym i
      naturalnym preparatem, który idealnie odzwierciedla naturalną
      opaleniznę.<br /><br />
      Już dzięki godzinnej wizycie możesz cieszyć się świetnie wyglądającą
      opalenizną na Twojej skórze!
      <br /><br />Preparat stosowany do opalania natryskowego jest bezpieczny i
      łagodny dla skóry. Co istotnie nie wywołuje alergii czy podrażnień, nie
      posiada brzydkiego zapachu oraz nie pozostawia pomarańczowych tonów.
      Produkty stosowane w Hawaii Katowice nie są testowane na zwierzętach oraz
      są odpowiednie dla wegan i bezpieczne dla kobiet w ciąży!<br /><br />
      Sam proces opalania przeprowadzany jest w specjalnej kabinie w zapewnionej
      przez nasz salon jednorazowej bieliźnie. Jeśli masz takie życzenie możesz
      również opalać się we własnej, ale pamiętaj o ryzyku ubrudzenia!<br /><br />
      Aby opalanie wyszło jak najlepiej musisz pamiętać o tym by
      <router-link to="/pierwsza_wizyta"
        >odpowiednio się przygotować</router-link
      >. Od tego jak bardzo zastosujesz się do zaleceń zależy ostateczny efekt i
      jego trwałość.<br /><br />
      Z opalania natryskowego może korzystać każda dermatologicznie zdrowa
      osoba. Jeśli posiadasz choroby skóry takie jak: łuszczyca, alergie skórne
      lub wyprsyki należy odpuścić wizytę w salonie z przyczyn zdrowotnych.
      Jeśli posiadasz świeże rany również warto odłożyć wizytę w czasie, gdyż z
      dużym prawdopodobieństwem będą one podrażnione.
      <br /><br />
      Efekt opalania w przypadku dostosowania się do
      <router-link to="/pierwsza_wizyta">zaleceń</router-link> w dobrej jakości
      utrzymuje się przez okres około 2 tygodni. Po upływie tego czasu należy
      potwórzyć zabieg, gdyż opalenizna zacznie tracić swój wygląd aż dojdzie do
      jego zaniku.<br /><br />
      Zanim zarezerwujesz wizytę koniecznie przeczytaj
      <router-link to="/pierwsza_wizyta">nasze zalecenia</router-link> by w
      pełni cieszyć się z efektu jaki możesz uzyskać w Hawaii Katowice!
    </p>
  </section>
</template>

<script>
export default {
  name: "tan",
};
</script>

<style>
.tan {
  margin-top: 80px;
  padding: 10vh 0%;
  box-sizing: border-box;
  background: #cf9d75;
  width: 100%;
  text-align: center;
}

.tan h2 {
  font-size: 80px;
  color: #ffffff;
  position: relative;
  top: 5px;
  text-transform: uppercase;
  margin: 0 0 5vh 0;
  padding: 0;
}

.tan p {
  padding: 0% 10vw;
  box-sizing: border-box;
  text-align: justify;
  color: #fff;
  font-weight: 500;
}

.tan p a {
  color: #fff0e3;
  text-decoration: none;
}

.tan p a:hover {
  text-decoration: underline;
}

@media only screen and (max-width: 870px) {
  .tan p {
    text-align: center;
  }
}
</style>