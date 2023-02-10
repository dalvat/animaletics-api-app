// const giphyApi = '6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz';
// const ninjaApi = 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO';


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
      `<img src="${randomlySelectedImage.imageSource}" " width="180" height="180" />`;
      imageContainer.setAttribute("class"," btn");
      const title = document.createElement('p');
      title.style.fontSize='20px';
      title.innerHTML = randomlySelectedImage.animalName;
      imageContainer.appendChild(title);

      

      //on clicking animal image...
      imageContainer.addEventListener(('click'),function(event){   
          event.preventDefault()
          localStorage.setItem('chosenAnimal',  randomlySelectedImage.animalName);
          //modal name of animal
          let animalNameModal = document.getElementById('animal-name');
          animalNameModal.innerHTML = localStorage.getItem('chosenAnimal');
          console.log(animalNameModal.innerHTML);
          //modal facts element
          let factsInModal = document.getElementById('animal-facts-modal')
          animalNameModal.appendChild(factsInModal)
          

          //calling data from Ninja 
          $.ajax({
            url: 'https://api.api-ninjas.com/v1/animals?name='+localStorage.getItem('chosenAnimal'),
            method: "GET",
            headers: { 'X-Api-Key': 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO'},
          }).then(function(response) {
            console.log(response);
            
            //div to store api call from ninja
            let elementCont = $("<div>");
            // to be deeleted - testing div:
            elementCont.text((response[0].characteristics.diet)+"  "+(response[0].locations[0])+"  "+(response[0].name));
            elementCont.css('backgroundColor','orange');
            $('#api-container').append(elementCont);
            //modal facts input
            factsInModal.innerHTML = ((response[0].characteristics.diet)+"  "+(response[0].locations[0])+"  "+(response[0].name));
            console.log(elementCont)
            
            //giphy url and div for the response
            let gifURL ="https://api.giphy.com/v1/gifs/search?api_key=6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz&q="+localStorage.getItem('chosenAnimal')+"&limit=1&offset=0&rating=pg&lang=en"
            console.log(animalNameModal)
            //testing api calls - to be deleted
            let holderForImage = $("#imageChoice");
            let imageCont = $("<img>");
            holderForImage.append(imageCont);

            //
            //ajax call
                $.ajax({
                  url: gifURL,
                  method:"GET",
                }).then (function(response) {
                  //fetching gif url - imagecan be smaller or bigger
                  
                  gifHTTPS = response.data[0].images.downsized.url;
                  imageCont.attr('src',gifHTTPS);
                  imageCont.attr("alt", "replacement image");            
                });
          });
            
        
          



      });
};













