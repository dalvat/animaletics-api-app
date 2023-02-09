const giphyApi = '6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz';
const ninjaApi = 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO';
var giphyStickersURL =
  'https://api.giphy.com/v1/stickers/search?api_key=CsFg6rIT9VQThklrGrafYGaGHa378omF&q=elephant&limit=10&offset=0&rating=pg&lang=en';


let animals = [

    {animalName:'elephant',
    imageSource: './assets/images/elephant.png',
    arrayItem:1},
    {animalName:'duck',
    imageSource: './assets/images/duck.png',
    arrayItem:2},
    {animalName:'lion',
    imageSource: './assets/images/lion.png',
    arrayItem:3},
    {animalName:'shark',
    imageSource: './assets/images/shark.png',
    arrayItem:4},
    {animalName:'giraffe',
    imageSource: './assets/images/giraffe.png',
    arrayItem:5},
    {animalName:'sheep',
    imageSource: './assets/images/sheep.png',
    arrayItem:6},
    {animalName:'octopus',
    imageSource: './assets/images/octopus.png'},
    {animalName:'bee',
    imageSource: './assets/images/bee.png',
    arrayItem:7},
    {animalName:'cow',
    imageSource: './assets/images/cow.png',
    arrayItem:8},
    {animalName:'hamster',
    imageSource: './assets/images/hamster.png',
    arrayItem:9},
    {animalName:'owl',
    imageSource: './assets/images/owl.png',
    arrayItem:10}
]

//testing with 'pig'
let ninjaUrl = 'https://api.api-ninjas.com/v1/animals?name=pig'


// giphy data
fetch(giphyStickersURL)
  .then((response) => response.json())
  .then((data) => console.log(data));

//fetching ninja data
  let options = {
    method: 'GET',
    headers: { 'x-api-key': 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO' }
  }
  fetch(ninjaUrl,options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data);
          console.log(data[0].name)
        })
        .catch(err => {
          console.log(`error ${err}`)
      }); 

///////////////////////////////////////////////////////////////////////////////////////


 
let randomlySelectedImage = animals[Math.floor(Math.random() * animals.length)];
console.log (randomlySelectedImage.imageSource)
document.getElementById('card-3').innerHTML = 
  `<img src="${randomlySelectedImage.imageSource}"  />`;


  
  
    for (let i=0; i<6; i++){
 
        let randomlySelectedImage = animals[Math.floor(Math.random() * animals.length)];
        let imageContainer = document.getElementById('card-'+i);
        imageContainer.innerHTML = 
        `<img src="${randomlySelectedImage.imageSource}" " width="180" height="180" />`;
        imageContainer.setAttribute("class","col-xl-4 col-lg-6 mb-5 mt-1 ");
        const title = document.createElement('p');
        title.style.fontSize='20px';
        title.innerHTML = randomlySelectedImage.animalName;
        imageContainer.appendChild(title)
    }





    