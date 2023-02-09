const giphyApi = "6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz"
var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=CsFg6rIT9VQThklrGrafYGaGHa378omF&q=elephant&limit=10&offset=0&rating=pg&lang=en";
let animals = [
    {animalName:'elephant',
    ApiID: ''},
    {animalName:'sheep',
    ApiID: ''},
    {animalName:'giraff',
    ApiID: ''},
    {animalName:'whale',
    ApiID: ''},
    {animalName:'narval',
    ApiID: ''},
    {animalName:'rabbit',
    ApiID: ''},
    {animalName:'leopard',
    ApiID: ''},
    {animalName:'polar bear',
    ApiID: ''},
    {animalName:'wolf',
    ApiID: ''},
    {animalName:'duck',
    ApiID: ''},
]

fetch(queryURL)
  .then((response) => response.json())
  .then((data) => console.log(data));
