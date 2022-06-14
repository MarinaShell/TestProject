/*main task*/
const trafficLight = document.querySelector('#trafficLight');

function makeGreen_one() {
  trafficLight.style.background = ('green');
  trafficLight.removeEventListener('click', makeGreen_one);
  trafficLight.addEventListener('click', makeYellow_one);
}

function makeYellow_one() {
  trafficLight.style.background = ('yellow');
  trafficLight.removeEventListener('click', makeYellow_one);
  trafficLight.addEventListener('click', makeRed_one);
}

function makeRed_one() {
  trafficLight.style.background = ('red');
  trafficLight.removeEventListener('click', makeRed_one);
  trafficLight.addEventListener('click', makeGreen_one);
}

trafficLight.addEventListener('click', makeGreen_one);

/*addition task*/

const trafficLightGreen = document.querySelector('#trafficLightGreen');
const trafficLightYellow = document.querySelector('#trafficLightYellow');
const trafficLightRed = document.querySelector('#trafficLightRed');


function makeGreen() {
    trafficLightRed.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightGreen.style.background = ('green');
    
    trafficLightGreen.removeEventListener('click', makeGreen);
    trafficLightGreen.addEventListener('click', makeYellow);

    trafficLightYellow.removeEventListener('click', makeGreen);
    trafficLightYellow.addEventListener('click', makeYellow);
 
    trafficLightRed.removeEventListener('click', makeGreen);
    trafficLightRed.addEventListener('click', makeYellow);

 }

function makeYellow() {
    trafficLightRed.style.background = ('black');
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('yellow');
  
    trafficLightGreen.removeEventListener('click', makeYellow);
    trafficLightGreen.addEventListener('click', makeRed);

    trafficLightYellow.removeEventListener('click', makeYellow);
    trafficLightYellow.addEventListener('click', makeRed);
    
    trafficLightRed.removeEventListener('click', makeYellow);
    trafficLightRed.addEventListener('click', makeRed);

  }

function makeRed() {
    trafficLightGreen.style.background = ('black');
    trafficLightYellow.style.background = ('black');
    trafficLightRed.style.background = ('red');

    trafficLightGreen.removeEventListener('click', makeRed);
    trafficLightGreen.addEventListener('click', makeGreen);

    trafficLightYellow.removeEventListener('click', makeRed);
    trafficLightYellow.addEventListener('click', makeGreen);
 
    trafficLightRed.removeEventListener('click', makeRed);
    trafficLightRed.addEventListener('click', makeGreen);

}

trafficLightGreen.addEventListener('click', makeGreen);
trafficLightYellow.addEventListener('click', makeGreen);
trafficLightRed.addEventListener('click', makeGreen);

