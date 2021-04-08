var app = new Vue(
  {
    el: '#root',
    // -------------------------------------------------------------------------
    data: {
      dischi: [],
      generi: [],
      optionGenere: '',
    },
    // -------------------------------------------------------------------------
    mounted: function() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then((risposta) => {
        this.dischi = risposta.data.response;
        //BONUS 1: 'Catturo' tutti i generi presenti
        this.dischi.forEach(disco => {
          if(!this.generi.includes(disco.genre)) {
            this.generi.push(disco.genre);
          }
        });
        //BONUS 2: Ordinare i dischi per anno di uscita.
        this.dischi.sort(function(disco1, disco2) {
          return parseInt(disco1.year) - parseInt(disco2.year);
        });
      });
    },
    // -------------------------------------------------------------------------
  }
);
