console.log('%c HI', 'color: firebrick')

dogContainer = document.getElementById('dog-image-container');
dogImage = document.createElement('img')
function fetchDogs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(function(json){
    console.log(json);
  });
}