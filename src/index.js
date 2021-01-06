console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
dogContainer = document.getElementById('dog-image-container');
dogImage = document.createElement('img')

function toImg(){
    json.forEach()
}
function fetchDogs(){
  fetch("https://dog.ceo/api/breeds/image/random/4")
  .then(res => res.json())
  .then(json => console.log(json));
}