console.log('%c HI', 'color: firebrick');
  
document.addEventListener("DOMContentLoaded", () => {
  const allBreeds = [];
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogContainer = document.getElementById('dog-image-container');
  const breedUl = document.getElementById('dog-breeds');
  

  fetch(imgUrl)
  .then(res => res.json())
  .then(json => dogPics(json));
  
  fetch(breedUrl)
  .then(res => res.json())
  .then(json => dogBreeds(json))
    
  function dogPics(json){
    json.message.forEach(dog => {
      const dogImage = document.createElement('img');
      dogImage.src = dog;
      dogContainer.append(dogImage);
    });
  } 
  
  function dogBreeds(json){
    json.message.forEach(breed => {
      const breedLi = document.createElement('li');
      breedLi.innerHTML = breed;
      breedContainer.appendChild(breedLi);
    });
  }
  
  
});