app.controller('pokeController', ['$http', pokeController]);
// Change Me

function pokeController($http) {
  var vm = this;
  vm.title = 'Angular Template';
  vm.someVar = '';
  vm.pokeName = '';
  vm.pokeTypes = '';
  vm.sprite = '';

  getPokemon();
  function getPokemon() {
    var caughtPokemon = {};
    function randNum() {
      return Math.floor(Math.random(1) * 151).toString();
    }
    var num = randNum();
    var url = "http://pokeapi.co/api/v1/pokemon/"+num;
    $http.get(url)
    .then(function(pokeData) {
      console.log(pokeData);
      var secondType;
      vm.pokeName = pokeData.data.name;
      if (pokeData.data.types.length == 1) {
        secondType = pokeData.data.types[0].name;;
      } else {
        secondType = pokeData.data.types[1].name;
      }
      // num--;
      vm.pokeTypes = pokeData.data.types[0].name + " / "+secondType;
      vm.sprite = 'http://pokeapi.co/media/img/'+num+'.png';
      // vm.pokeName = "<div class='pokemonWrapper><div class='imgWrapper'><img src="+caughtPokemon.img+"><h2>"+caughtPokemon.name+"</h2><h4>"+caughtPokemon.types.firstType + " "+caughtPokemon.types.secondType+"</h4></div></div>'";
    });
  }
}
