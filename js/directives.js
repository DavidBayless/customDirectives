app.directive('pokeDirective', ['$http', pokeDirective]);

function pokeDirective($http) {

  // function getPokemon() {
  //   var caughtPokemon = {};
  //   function randNum() {
  //     return Math.floor(Math.random(1) * 151).toString();
  //   }
  //   var url = "http://pokeapi.co/api/v1/pokemon/"+randNum();
  //   $http.get(url)
  //   .then(function(pokeData) {
  //     console.log(pokeData);
  //     caughtPokemon.name = pokeData.data.name;
  //     caughtPokemon.types = {firstType: pokeData.data.types[0].name, secondType: pokeData.data.types[1].name || 'normal'};
  //     caughtPokemon.img = 'http://pokeapi.co/'+pokeData.data.sprites[0].resource_uri;
  //     return "<div class='pokemonWrapper><div class='imgWrapper'><img src="+caughtPokemon.img+"><h2>"+caughtPokemon.name+"</h2><h4>"+caughtPokemon.types.firstType + " "+caughtPokemon.types.secondType+"</h4></div></div>'";
  //   });
  // }
  //
  return {
    template: "<div class='pokeWrapper'><div class='imgWrapper'><img src={{PC.sprite}}></div><h2>You caught a(n): {{PC.pokeName}}!</h2><h4>{{PC.pokeTypes}}</h4></div>"
  };
}

//
// controller http req . then imgSrc = what you got back
//
// <img src={{imgSrc}}></img>
