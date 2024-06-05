

let rateButtons = document.getElementById ('number-circle');
let subButton = document.getElementById ('submit-button');

let submittedBoxStatus = document.getElementById ('submitted-box');
let questionBoxStatus = document.getElementById ('question-box');


//Funktio joka muuttaa submit divin toiseen
function submit() {
  if (activeButton === null) {
    alert('Please click a score first.');
    return;
  };
  submittedBoxStatus.classList.remove('hidden-box');
  questionBoxStatus.classList.add('hidden-box');
  //Pitää lisätä vielä toiminto, että ei voi painaa ennen kun on arvioitu
};


//Funktio jonka tarkoitus on käsitellä arvosanan antamista

/* Vanhaa koodia
function buttonColorChange(x) {
  for (let activeButton = null; activeButton !== null; ) {

  };
  document.getElementById("number-circle"+x).style.background="#FB7413"
  document.getElementById("number-circle"+x).style.color="#FFFFFF";

};
*/


let activeButton = null;
function buttonColorChange(x) {
  if (activeButton !== null) {
    activeButton.style.background = ""; //Resetoi tausta värin
    activeButton.style.color = ""; //Resetoi teksti värin
  }
  const currentButton = document.getElementById("number-circle" + x);
  currentButton.style.background = "#fb7413";
  currentButton.style.color = "#ffffff";
  activeButton = currentButton; 
};