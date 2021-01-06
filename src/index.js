console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

 fetch(imgUrl)
  .then(res => res.json())
  .then(json => dogPics(json));

function dogPics(json){
    json.message.forEach(dog => {
      dogContainer = document.getElementById('dog-image-container');
      const dogImage = document.createElement('img');
      dogImage.src = dog;
      dogContainer.append(dogImage);
    });
  } 
  
  document.addEventListener("DOMContentLoaded", () => {
    const allBreeds = [];
    
    fetch(breedURL)
  })