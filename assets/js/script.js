const giphyApi = '6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz';
const ninjaApi = 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO';
var giphyStickersURL =
  'https://api.giphy.com/v1/stickers/search?api_key=CsFg6rIT9VQThklrGrafYGaGHa378omF&q=elephant&limit=10&offset=0&rating=pg&lang=en';

let animals = [
  { animalName: 'elephant', ApiID: '' },
  { animalName: 'duck', ApiID: '' },
  { animalName: 'lion', ApiID: '' },
  { animalName: 'shark', ApiID: '' },
  { animalName: 'giraffe', ApiID: '' },
  { animalName: 'eagle', ApiID: '' },
  { animalName: 'octopus', ApiID: '' },
  { animalName: 'bee', ApiID: '' },
  { animalName: 'cow', ApiID: '' },
  { animalName: 'hamste', ApiID: '' },
  { animalName: 'owl', ApiID: '' },
];
let ninjaUrl = 'https://api.api-ninjas.com/v1/animals?name=pig';

// giphy data
fetch(giphyStickersURL)
  .then((response) => response.json())
  .then((data) => console.log(data));

//fetching ninja data
let options = {
  method: 'GET',
  headers: { 'x-api-key': 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO' },
};
fetch(ninjaUrl, options)
  .then((res) => res.json()) // parse response as JSON
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });


// first modal auto-show on page load
let storedUserName = localStorage.getItem('input-name');
if (storedUserName === null) {
  $("#instructions-modal").modal('show');
} else {
  $('#speechBubble').text(storedUserName);
}


// event listener (submit) for first modal to save name to localStorage
let startButton = $('#start-button');

startButton.on('click', function(event){
  event.preventDefault();
  let name = $("#inputName").val();
  $('#speechBubble').text(name);
  localStorage.setItem('input-name', name);
  $('#instructions-modal').modal('toggle');
});