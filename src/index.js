console.log('%c HI', 'color: firebrick')
function fetchDogs("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())