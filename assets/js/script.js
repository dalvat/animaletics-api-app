// const giphyApi = '6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz';
// const ninjaApi = 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO';


  let animals = [

    {animalName:'Elephant',
    imageSource: './assets/images/elephant.png',
    arrayItem:0},
    {animalName:'Lion',
    imageSource: './assets/images/lion.png',
    arrayItem:1},
    {animalName:'Shark',
    imageSource: './assets/images/shark.png',
    arrayItem:2},
    {animalName:'Giraffe',
    imageSource: './assets/images/giraffe.png',
    arrayItem:3},
    {animalName:'Sheep',
    imageSource: './assets/images/sheep.png',
    arrayItem:4},
    {animalName:'Octopus',
    imageSource: './assets/images/octopus.png',
    arrayItem:5},
    {animalName:'Bee',
    imageSource: './assets/images/bee.png',
    arrayItem:6},
    {animalName:'Cow',
    imageSource: './assets/images/cow.png',
    arrayItem:7},
    {animalName:'Hamster',
    imageSource: './assets/images/hamster.png',
    arrayItem:8},
    {animalName:'Duck',
    imageSource: './assets/images/duck.png',
    arrayItem:9},
    {animalName:'Eagle',
    imageSource: './assets/images/eagle.png',
    arrayItem:10},
    {animalName:'Raindeer',
    imageSource: './assets/images/raindeer.png',
    arrayItem:11},
    {animalName:'Rat',
    imageSource: './assets/images/rat.png',
    arrayItem:12},
    {animalName:'Bear',
    imageSource: './assets/images/bear.png',
    arrayItem:13},
    {animalName:'Chicken',
    imageSource: './assets/images/chicken.png',
    arrayItem:14},
    {animalName:'Butterfly',
    imageSource: './assets/images/butterfly.png',
    arrayItem:15},
    {animalName:'Owl',
    imageSource: './assets/images/owl.png',
    arrayItem:16},
    {animalName:'Spider',
    imageSource: './assets/images/spider.png',
    arrayItem:17},
    {animalName:'Ant',
    imageSource: './assets/images/ant.png',
    arrayItem:9}
]

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

//populating cards with random images
for (let i=0; i<6; i++){
 
      let randomlySelectedImage = animals[Math.floor(Math.random() * animals.length)];
      let imageContainer = document.getElementById('card-'+i);
      imageContainer.innerHTML = 
      `<img src="${randomlySelectedImage.imageSource}" style="width:150; height:150; background-color:white; border: 5px solid black; border-radius: 1em; margin-left: 1em;" />`;
      imageContainer.setAttribute("class"," btn");
      //added data to turn into button for opening modal
      imageContainer.setAttribute('data-toggle','modal')
      imageContainer.setAttribute('data-target','#facts-modal')
      //title under cards
      const title = document.createElement('p');
      title.style.fontSize='20px';
      title.innerHTML = randomlySelectedImage.animalName;
      imageContainer.appendChild(title);
      //running splice() to remove the used image from array to avoid doubling
      let idx = animals.indexOf(randomlySelectedImage)
      animals.splice(idx,1)
      
      //on clicking animal image...
      imageContainer.addEventListener(('click'),function(event){   
        
        localStorage.setItem('chosenAnimal',  randomlySelectedImage.animalName);
          //modal name of animal
          $('#imageChoice').empty();
          let animalNameModal =$('#animal-name');
          animalNameModal.text (localStorage.getItem('chosenAnimal'));
          
          //modal facts element and appending to facts section in modal
          let factsInModal =$('#animal-facts-modal')
          
          animalNameModal.append(factsInModal)
          
          //calling data from Ninja 
          $.ajax({
            url: 'https://api.api-ninjas.com/v1/animals?name='+localStorage.getItem('chosenAnimal'),
            method: "GET",
            headers: { 'X-Api-Key': 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO'},
          }).then(function(response) {
                console.log(response);
                
                //div to store api call from ninja
                let elementCont = $("<div>");
                $('#api-container').append(elementCont);
                //modal facts input
                factsInModal.text ((response[0].characteristics.diet)+"  "+(response[0].locations[0])+"  "+(response[0].name));
                
                //giphy url and div for the response
                let gifURL ="https://api.giphy.com/v1/gifs/search?api_key=6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz&q="+localStorage.getItem('chosenAnimal')+"&limit=1&offset=0&rating=pg&lang=en"
                //container for allocating api gif calls - 
                let holderForImage = $("#imageChoice");
                let imageCont = $("<img>");
                holderForImage.append(imageCont);

                //ajax call to giphy
                $.ajax({
                  url: gifURL,
                  method:"GET",
                }).then (function(response) {
                  //fetching gif url - image can be smaller or bigger
                  gifHTTPS = response.data[0].images.downsized.url;
                  imageCont.attr('src',gifHTTPS);
                  imageCont.attr("alt", "replacement image");
                });
          });
      });
};


//refresh button added
  let refreshButton = $('#more-facts');
  refreshButton.on('click',function (){
      location.reload()
      console.log("hey")
  })

//clear  buttonfor facts modal
let clearButton = $('#facts-modal');
clearButton.on('click',function (){
    console.log("hey")
})

