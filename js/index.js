
var animalButtons = document.querySelectorAll('.animal-button');

animalButtons.forEach(function(animalButton){

  animalButton.addEventListener("click", function (){


    if(animalButton.getAttribute('id') == 'cat'){
      buttonAnimation(animalButton);
      var audioElement = new Audio('sound-effects/cat.flac');
      audioElement.play();
    }

    if(animalButton.getAttribute('id') == 'lion'){
      buttonAnimation(animalButton);
      var audioElement = new Audio("sound-effects/lion.wav");
      audioElement.play();
    }
    if(animalButton.getAttribute('id') == 'elephant'){
      buttonAnimation(animalButton);
      var audioElement = new Audio('sound-effects/elephant.mp3');
      audioElement.play();
    }
    if(animalButton.getAttribute('id') == 'sheep'){
      buttonAnimation(animalButton);
      var audioElement = new Audio('sound-effects/lamb.wav');
      audioElement.play();
    }
    if(animalButton.getAttribute('id') == 'cow'){
      buttonAnimation(animalButton);
      var audioElement = new Audio('sound-effects/cow.wav');
      audioElement.play();
    }
  })

})

document.addEventListener('keydown', handleKeyDown);

function buttonAnimation(animalButton){
  animalButton.classList.add('pressed');
  setTimeout(function(){
    animalButton.classList.remove('pressed');
  }, 0.1);
}

function handleKeyDown(key){
  // alert(key.code);
  if(key.code == 'KeyA'){
    var audioElement = new Audio('sound-effects/cat.flac');
    audioElement.play();
  }
  if(key.code == 'KeyS'){
    var tom1 = new Audio("sound-effects/lion.wav");
    tom1.play();
  }
  if(key.code == 'KeyD'){
    var audioElement = new Audio('sound-effects/elephant.mp3');
    audioElement.play();
  }
  if(key.code == 'KeyF'){
    var audioElement = new Audio('sound-effects/lamb.wav');
    audioElement.play();
  }
  if(key.code == 'KeyG'){
    var audioElement = new Audio('sound-effects/cow.wav');
    audioElement.play();
  }
}
