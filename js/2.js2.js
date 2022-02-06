var text= "you can do it girl";
console.log(text); 
//challenge 1:
function ageInDays (){
  var birthyear= prompt("what year were you born?");
  var result= (2020 -birthyear) *365;   
  var h1 =document.createElement('h1');
  var textAnswer = document.createTextNode('you are '+ result + ' days old');
  h1.setAttribute('id' , 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageInDays').remove();
}
//challenge 2:
function generatecat(){
  var image = document.createElement('img');
  var div = document.getElementById('felx-cat-generator');
  image.src= "./IMG_3261.jpg";
  div.appendChild(image);
}
//challeng 3:rock,paper,scissors
function rpsGame(yourChoice) {
  console.log(yourChoice.src);                    //give src of image that you click on
  console.log(yourChoice);   
  var humanChoice , botChoice;
  humanChoice = yourChoice.id;
  botChoice=numberToChoice(randomTorpsInt());
  console.log('computer choice:' , botChoice);
  results= decideWinner(humanChoice,botChoice);   //[0,1] human lost | bot won
  console.log(results);
  massage= finalMassage(results);                 //'massage': 'you won' , 'color':'green'
  console.log(massage);
  rpsFrontEnd (yourChoice.id,botChoice,massage);
}



//pc pick the number randomly
function randomTorpsInt(){
  return Math.floor(Math.random() * 3);
}
//give number randomly and make a choise for you
function numberToChoice(number){
  return['rock','paper','scissors'][number];
}
function decideWinner (yourChoice,computerChoice){
  var rpsDatabase={
    'rock':{'scissors':1, 'rock':0.5, 'paper':0},
    'paper' :{'rock':1, 'paper':0.5, 'scissors':0},
    'scissors':{'paper':1, 'scissors':0.5, 'paper':0}
  }
  var yourScore =rpsDatabase[yourChoice][computerChoice];
  var computerScore =rpsDatabase[computerChoice][yourChoice];
  return [yourScore,computerScore];
}

//massage winner
function finalMassage([yourScore,computerScore]) {
 if (yourScore===0) {
    return {'massage': 'you lost' , 'color': 'red'};
 } else if (yourScore===0.5){
   return { 'massage':'you tied!', 'color': 'yellow'};
 } else {
   return {'massage': 'you won', 'color':'green'};
 }
}
//work on front end part of code (map is like dictionary)
function rpsFrontEnd(humanImageChoice, botImageChoice, finalMassage){
  var imagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
}

}
 //lets remove all the images
 document.getElementById('rock').remove();
 document.getElementById('paper').remove();
 document.getElementById('scissors').remove();

 var humanDiv= document.createElement('div');
 var botDiv= document.createElement('div');
 var massageDiv= document.createElement('div');

 humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=159 width=150 style='box-shadow: 0px 10px rgba(37, 50, 233, 1);'>"
 botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=159 width=150 style='box-shadow: 0px 10px rgba(243, 38, 24, 1);'>"
 massageDiv.innerHTML = "<h1 style='color: " + finalMassage['color']+ "; font-size: 60px; padding:30px; '>" + finalMassage['massage'] + "</h1>"

 document.getElementById('flex-box-rps-div').appendChild(humanDiv);
 document.getElementById('flex-box-rps-div').appendChild(botDiv);
 document.getElementById('flex-box-rps-div').appendChild(massageDiv);
 


/*

 //challange4: change button color
 var all_buttons = document.getElementsByTagName('button');     //collecting all of buttons- goone return array that all of those tag is inside of it
console.log(all_buttons); 


var copyAllButtons =[];
for (let i=0; i<all_buttons.length; i++){
  copyAllButtons.push(all_buttons[i]);
}

function buttonColorChange(buttonThingy){
  if(buttonThingy.value==='red'){
    buttonColoreRed();
  } else if (buttonThingy.value==='green'){
    buttonColoregreen();
  } else if (buttonThingy.value==='reset'){
    buttonColoreReset();
  } else if (buttonThingy.value==='random'){
    buttonColorerandom();
  }
}

function buttonColoreRed(){
  for (let i=0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove[all_buttons[i].classList[1]];
    all_buttons[i].classList.add('btn-danger');

   }
}
function buttonColoregreen(){
  for (let i=0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove[all_buttons[i].classList[1]];
    all_buttons[i].classList.add('btn-success');

   }
}
function buttonColoreReset(){

}
*/

