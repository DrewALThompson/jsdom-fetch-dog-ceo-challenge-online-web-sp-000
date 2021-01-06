console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
dogContainer = document.getElementById('dog-image-container');

 fetch(imgUrl)
  .then(res => res.json())
  .then(json => dogPics(json));

function dogPics(json){
    json.message.forEach(dog => {
      const dogImage = document.createElement('img');
      dogImage.src = dog;
      dogContainer.appendChild(dogImage)
    });
  } 