console.log('%c HI', 'color: firebrick')

dogContainer = document.getElementById('dog-image-container');
dogImage = document.createElement('img')
function fetchDogs(){
  return fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(response => response.json())
  .then(function(json){
    console.log(json);
  });
}