let face1 = 0;
let face2 = 0;
let face3 = 0;
let face4 = 0;
let face5 = 0;
let face6 = 0;

const face1rmEl = document.getElementById("face1rm");

const face2rmEl = document.getElementById("face2rm");

const face3rmEl = document.getElementById("face3rm");

const face4rmEl = document.getElementById("face4rm");

const face5rmEl = document.getElementById("face5rm");

const face6rmEl = document.getElementById("face6rm");

const face1pEl = document.getElementById("face1p");

const face2pEl = document.getElementById("face2p");

const face3pEl = document.getElementById("face3p");

const face4pEl = document.getElementById("face4p");

const face5pEl = document.getElementById("face5p");

const face6pEl = document.getElementById("face6p");

const RollAmount1El = document.getElementById("face1rm");

const buttonEl = document.getElementById("roll-button");

const diceEl = document.getElementById("dice");

const rollHistoryEl = document.getElementById("roll-history")

let historyList = [];

var rollSound = document.getElementById("myAudio")

function playAudio() {
    rollSound.play();
    console.log("SUCCESS!")
}

function musicPlay() {
    document.getElementById('player').play();
}

function rollDice(){
    const rollResult = Math.floor(Math.random() * 6+1)
    console.log(rollResult)
    const diceFace = getDiceFace(rollResult);
    console.log(diceFace)
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult);
    let changedDice = "face"+rollResult;
    if(changedDice == "face1"){
        face1+=1;
    }else     if(changedDice == "face2"){
        face2+=1;
    }else     if(changedDice == "face3"){
        face3+=1;
    }else     if(changedDice == "face4"){
        face4+=1;
    }else     if(changedDice == "face5"){
        face5+=1;
    }else     if(changedDice == "face6"){
        face6+=1;
    } 
    updateRollHistory();
}

function updateRollHistory() {
rollHistoryEl.innerHTML = "";
 for(let i=0; i<historyList.length; i++){
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i+1}: <span>${getDiceFace(historyList[i])}
    </span>`;
    rollHistoryEl.appendChild(listItem);
    rollAmount();
 }
}
function getDiceFace(rollResult){
    face1rmEl.innerHTML = face1;
    face2rmEl.innerHTML = face2;
    face3rmEl.innerHTML = face3;
    face4rmEl.innerHTML = face4;
    face5rmEl.innerHTML = face5;
    face6rmEl.innerHTML = face6;
    switch(rollResult){
        case 1:
            return "&#9856;";
        case 2:
            return "&#9857;";
        case 3:
            return "&#9858;";
        case 4:
            return "&#9859;";
        case 5:
            return "&#9860;";
        case 6:
            return "&#9861;";
        default:
            return "";
    
    }
    
}
buttonEl.addEventListener("click", () => {
    diceEl.classList.add("roll-animation");
    setTimeout(() => {
      diceEl.classList.remove("roll-animation");
      rollDice();
    }, 1000);

  });
  function rollAmount(){
    let total = face1+face2+face3+face4+face5+face6;
    console.log("The results of your session are:")
    console.log("face 1: "+face1/total*100+"%");
    console.log("face 2: "+face2/total*100+"%");
    console.log("face 3: "+face3/total*100+"%");
    console.log("face 4: "+face4/total*100+"%");
    console.log("face 5: "+face5/total*100+"%");
    console.log("face 6: "+face6/total*100+"%");
    face1pEl.innerHTML = Math.round(face1/total*100*10)/10+"%"
    face2pEl.innerHTML = Math.round(face2/total*100*10)/10+"%"
    face3pEl.innerHTML = Math.round(face3/total*100*10)/10+"%"
    face4pEl.innerHTML = Math.round(face4/total*100*10)/10+"%"
    face5pEl.innerHTML = Math.round(face5/total*100*10)/10+"%"
    face6pEl.innerHTML = Math.round(face6/total*100*10)/10+"%"
  }
