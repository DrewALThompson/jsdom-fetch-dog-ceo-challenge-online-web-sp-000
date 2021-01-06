console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
dogContainer = document.getElementById('dog-image-container');
dogImage = document.createElement('img')


function fetchDogs(){
  fetch(imgUrl)
  .then(res => res.json())
  .then(json => )
}