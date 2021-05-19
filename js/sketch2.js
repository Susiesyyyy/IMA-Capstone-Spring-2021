let sr1 = document.getElementById("SR1");
let sr2 = document.getElementById("SR2");
let sr3 = document.getElementById("SR3");
let btn1 = document.getElementById("btn1");
let cmbtn1 = document.getElementById("cmbtn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");
let btn11 = document.getElementById("btn11");
let btn12 = document.getElementById("btn12");
let btn13 = document.getElementById("btn13");
// let storyp = document.getElementById("gotostory");

let leftArrow = document.getElementById("leftarrow");
let rightArrow = document.getElementById("rightarrow");

let currentStep = 0;
let steps = [
  ["SR1", 0, 0, -30],
  ["SR2", 10, -100, -30],
  ["SR31", 20, -100, -160],
  ["SR32", 20, -100, -260],
  ["SR33", 20, -100, -360],
  ["SR41", 30, -100, -470],
  ["SR42", 30, -100, -575],
  ["SR5", 40, -100, -675],
  ["SR6", 50, -20, -680],
  ["SR7", 60, -20, -785],
  ["SR81", 70, -20, -890],
  ["SR82", 70, -100, -890],
  ["SR9", 80, -100, -990],
  ["SR10", 90,-100, -1100],

]

setTimeout(function(){
  cmbtn1.style.display = "block";
  cmbtn1.style.animation = "fall1 2s forwards"
},2000);

btn1.addEventListener("click", function(){
  forwardStep()
});

btn2.addEventListener("click", function(){
  forwardStep();
});

btn3.addEventListener("click", function(){
  forwardStep();
});

btn4.addEventListener("click", function(){
  forwardStep()
});

btn5.addEventListener("click", function(){
  forwardStep();
});

btn6.addEventListener("click", function(){
  forwardStep();
});

btn7.addEventListener("click", function(){
  forwardStep()
});

btn8.addEventListener("click", function(){
  forwardStep();
});

btn9.addEventListener("click", function(){
  forwardStep();
});

btn10.addEventListener("click", function(){
  forwardStep()
});

btn11.addEventListener("click", function(){
  forwardStep();
});

btn12.addEventListener("click", function(){
  forwardStep();
});

btn13.addEventListener("click", function(){
  forwardStep();
});


function forwardStep(){
  currentStep++;
  let stepID = steps[currentStep][0];
  let camelPos = steps[currentStep][1];
  let bghorPos = steps[currentStep][2];
  let bgverPos = steps[currentStep][3];
  goToStep(stepID, camelPos, bghorPos, bgverPos)
}
function backwardStep(){
  currentStep--;
  let stepID = steps[currentStep][0];
  let camelPos = steps[currentStep][1];
  let bghorPos = steps[currentStep][2];
  let bgverPos = steps[currentStep][3];
  goToStep(stepID, camelPos, bghorPos, bgverPos)
}

rightArrow.addEventListener("click", function(){
  forwardStep();
});
leftArrow.addEventListener("click", function(){
  backwardStep();
});


function goToStep(stepID, camelPercentage, bghorPos, bgverPos){
  // hide all infosteps
  let infoSteps = document.getElementsByClassName("infoStep");
  console.log(infoSteps)
  for(let i = 0; i < infoSteps.length; i++){
    // console.log(infoSteps[i])

    infoSteps[i].style.display = "none";
  }
  // show the current infoStep
  let current = document.getElementById(stepID);
  current.style.display = "block";
  //move the camel
  let camel = document.getElementById("cmbtn1");
  camel.style.left = camelPercentage + "%";
  //move the bgimg
  let bgimg = document.getElementById("bgimg");
  bgimg.style.left = bghorPos + "%";
  bgimg.style.top = bgverPos + "%";

};
