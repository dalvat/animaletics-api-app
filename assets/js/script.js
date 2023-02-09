const giphyApi = "6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz"
const ninjaApi = "nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO"
var giphyStickersURL = "https://api.giphy.com/v1/stickers/search?api_key=CsFg6rIT9VQThklrGrafYGaGHa378omF&q=elephant&limit=10&offset=0&rating=pg&lang=en";


let animals = [
    {animalName:'elephant',
    ApiID: 'https://media0.giphy.com/media/JrJaBFS1vSwus/200.g…1f83tknn8rtmv8uofhjinm78eds3d8ug&rid=200.gif&ct=s',
    arrayItem:1},
    {animalName:'duck',
    ApiID: 'https://media0.giphy.com/media/QVOOeh4YRTslYPhV3r/…g1d878jamrws0uy4nla7xc6gam27mqoy&rid=200.gif&ct=s',
    arrayItem:2},
    {animalName:'lion',
    ApiID: 'ttps://media1.giphy.com/media/oSIpdt7l0Jqi4/200.g…ioozurjbnm14dzxfwwd8iph58p40jlaq&rid=200.gif&ct=s',
    arrayItem:3},
    {animalName:'shark',
    ApiID: 'https://media4.giphy.com/media/KSYmKFsocah3i/200.g…m47g3wycf4lnk16zqoo7jt0i0rfyczqv&rid=200.gif&ct=s'},
    {animalName:'giraffe',
    ApiID: 'https://media4.giphy.com/media/lgun7Mz4DKaU8/200.g…o1x56c9o592paqex6q6mnko7yzwpynik&rid=200.gif&ct=s',
    arrayItem:4},
    {animalName:'sheep',
    ApiID: 'https://media0.giphy.com/media/gFoK2eOtvORYcCbgSf/…a5q08mi0eazgwc5m30uwckrbpxas917e&rid=200.gif&ct=s',
    arrayItem:5},
    {animalName:'octopus',
    ApiID: 'https://media4.giphy.com/media/tjf6iLZF7HhUOkzCzL/…vuwffhxdkr8d0ikx2ishyg3z9u6zz40e&rid=200.gif&ct=s'},
    {animalName:'bee',
    ApiID: 'https://media4.giphy.com/media/XcA7FnnQ43sig5fWmJ/…5z4h9ehhu0i0wadwnosn0u66q25e7q5e&rid=200.gif&ct=s',
    arrayItem:6},
    {animalName:'cow',
    ApiID: '	https://media4.giphy.com/media/buieZPtLXBWb6/200.g…hgwyzdoy579ijoy0e8cwxthrzimw1jtw&rid=200.gif&ct=s'},
    {animalName:'hamster',
    ApiID: 'https://media3.giphy.com/media/uEpUHiGPzFF9C/200.g…qpf5rgcsg28p80jwet3yocc33vbsls53&rid=200.gif&ct=s',
    arrayItem:7},
    {animalName:'owl',
    ApiID: 'https://media2.giphy.com/media/Lf6ZhVdR0FFLy/200.g…7178y6loi9okqdi50dlq3zlibs7thped&rid=200.gif&ct=s',
    arrayItem:8},
]
<<<<<<< Updated upstream
//specifying which animal
console.log(animals[1].animalName)
=======

//testing with 'pig'
>>>>>>> Stashed changes
let ninjaUrl = 'https://api.api-ninjas.com/v1/animals?name=pig'

// giphy data
fetch(giphyStickersURL)
  .then((response) => response.json())
  .then((data) => console.log(data))

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

 

      ////////////////////////////////////////////////////////////////////////////
var randomNum = Math.floor(Math.random()*8+1);

card.forEach(){


}
 

  var populating Card = document.getElementById ('card-body')