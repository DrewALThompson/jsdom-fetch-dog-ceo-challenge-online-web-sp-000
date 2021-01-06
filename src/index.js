console.log('%c HI', 'color: firebrick');
  
document.addEventListener("DOMContentLoaded", () => {
  let allBreeds = [];
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogContainer = document.getElementById('dog-image-container');
  const breedUl = document.getElementById('dog-breeds');
  

  fetch(imgUrl)
  .then(res => res.json())
  .then(json => dogPics(json));
  
  fetch(breedUrl)
  .then(res => res.json())
  .then(result => {
    allBreeds = Object.keys(result.message);
    
  })
    
  function dogPics(json){
    json.message.forEach(dog => {
      const dogImage = document.createElement('img');
      dogImage.src = dog;
      dogContainer.append(dogImage);
    });
  } 
  
  function dogBreeds(result){
    result.message.forEach(breed => {
      const breedLi = document.createElement('li');
      breedLi.innerHTML = breed;
      breedContainer.appendChild(breedLi);
    });
  }
  
  
});