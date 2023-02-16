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
  {animalName:'Deer',
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
    let idx = animals.indexOf(randomlySelectedImage);
    animals.splice(idx,1);
    
    //on clicking animal image...
    imageContainer.addEventListener(('click'),function(event){   
      
        localStorage.setItem('chosenAnimal',  randomlySelectedImage.animalName);
        //modal name of animal
        $('#imageChoice').empty();
        let animalNameModal =$('#animal-name');
        animalNameModal.text (localStorage.getItem('chosenAnimal'));
        
        //modal facts element and appending to facts section in modal
        let factsInModal =$('#animal-facts-modal');
        animalNameModal.append(factsInModal);
        
        //calling data from Ninja 
        $.ajax({
              url: 'https://api.api-ninjas.com/v1/animals?name='+localStorage.getItem('chosenAnimal'),
              method: "GET",
              headers: { 'X-Api-Key': 'nu0nGP8mTDfJcW2JSl2Fwg==VZ4ntEbwyUNsM6bO'},
        }).then(function(response) {
              //modal- facts input - ensuring undefined isn't displayed 
               let responseLocation = (response[0].locations);
               if (responseLocation!==undefined) { $('#first-fact').text("Where do they live: "+ responseLocation)}
               else { $('#first-fact').text("")};

               let responseHabitat = (response[0].characteristics.habitat);
               if (responseHabitat!==undefined) { $('#second-fact').text("Habitat: "+ responseHabitat)}
               else { $('#second-fact').text("")};

               let responseYoung = (response[0].characteristics.name_of_young);
               if (responseYoung!==undefined) { $('#third-fact').text("Name of young: "+ responseYoung)}
               else { $('#third-fact').text("")};
               
               let responseSpeed = (response[0].characteristics.top_speed);
               if (responseSpeed!==undefined) { $('#fourth-fact').text("Top Speed: "+ responseSpeed)}
               else { $('#fourth-fact').text("")};
              
               let responseFun = (response[0].characteristics.slogan);
               if (responseFun!==undefined) { $('#fifth-fact').text("Fun fact: "+ responseFun)}
               else { $('#fifth-fact').text("")};

               let responseLife = (response[0].characteristics.lifespan);
               if (responseLife!==undefined) { $('#sixth-fact').text("Life_span: "+ responseLife)}
               else { $('#sixth-fact').text("")};

               let responseDiet = (response[0].characteristics.diet);
               if (responseDiet!==undefined) { $('#seventh-fact').text("What do they eat: "+ responseDiet)}
               else { $('#seventh-fact').text("")};

               let responseFeature = (response[0].characteristics.most_distinctive_feature);
               if (responseFeature!==undefined) { $('#eight-fact').text("Most distinctive feature: "+ responseFeature)}
               else { $('#eight-fact').text("")};

               let responseThreat = (response[0].characteristics.biggest_threat);
               if (responseThreat!==undefined) { $('#ninth-fact').text("Biggest threat: "+ responseThreat)}
               else { $('#ninth-fact').text("")};

              //giphy url and div for the response
              let gifURL ="https://api.giphy.com/v1/gifs/search?api_key=6AOXnBTIbFMl4rE7kd6emFGfdEfEDgUz&q="+localStorage.getItem('chosenAnimal')+"&limit=5&offset=0&rating=pg&lang=en"
              //container for allocating api gif calls - 
              let holderForImage = $("#imageChoice");
              let imageCont = $("<img>");
              imageCont.css('border','5px solid black');
              imageCont.css('width','280');
              imageCont.css('height','auto');  
              imageCont.css('border-radius', '1em');
              imageCont.css('border-radius', '1em');
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
    location.reload();
})