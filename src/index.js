console.log('%c HI', 'color: firebrick');
  
document.addEventListener("DOMContentLoaded", () => {
  let allBreeds = [];
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  const dogContainer = document.getElementById('dog-image-container');
  const breedUl = document.getElementById('dog-breeds');
  const dropDown = document.getElementById('breed-dropdown')
  

  fetch(imgUrl)
  .then(res => res.json())
  .then(json => dogPics(json));
  
  fetch(breedUrl)
  .then(res => res.json())
  .then(result => {
    allBreeds = Object.keys(result.message);
    dogBreeds(allBreeds);
  })
    
  function dogPics(json){
    json.message.forEach(dog => {
      const dogImage = document.createElement('img');
      dogImage.src = dog;
      dogContainer.append(dogImage);
    });
  } 
  
  function dogBreeds(allBreeds){
    allBreeds.forEach(breed => {
      const breedLi = document.createElement('li');
      breedLi.innerHTML = breed;
      breedUl.appendChild(breedLi);
    });
  }
  
  breedUl.addEventListener('click', (e) => {
    e.target.style.color = 'red';
  })
  
  addEventListener('click', (e) => {
    
  })
  
  
});