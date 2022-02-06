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
  image.src= "img/IMG_3261.jpg";
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
}

 //challange4: change button color
 var all_buttons = document.getElementsByTagName('button');   //collecting all of buttons- goone return array that all of those tag is inside of it {ARRAY}
 console.log(all_buttons); 


var copyAllButtons =[];
for (let i=0; i<all_buttons.length; i++){                    //this loop gonna run 7 times
  copyAllButtons.push(all_buttons[i].classList[1]);          //claslist: tell how many classes that it has and index 1 tell the second class must change
}

function buttonColorChange (buttonThingy){                   //this function will be run when we click (onchange)
  if(buttonThingy.value==='red'){
    buttonsRed();
  } else if (buttonThingy.value==='green'){
    buttonsGreen();
  } else if (buttonThingy.value==='reset'){
    buttonColorReset();
  } else if (buttonThingy.value==='random'){
    randomColors();
  }
}

function buttonsRed(){
  for (let i=0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]); //removed second class (4:20 min)
    all_buttons[i].classList.add('btn-danger');
   }
} 

function buttonsGreen(){
  for (let i=0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
    all_buttons[i].classList.add('btn-success');
   }
}

function buttonColorReset(){
  for (let i=0; i<all_buttons.length; i++){
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);                 //reset to be all color that exist
  }
}

function randomColors(){
  let choice=['btn-primary','btn-danger','btn-success' , 'btn-warning']

  for(let i=0; i<all_buttons.length; i++){
    let randomNumber = Math.floor(Math.random()*4);                 //keep random number inside of forloop couse in this case it gives random numbers several time.if we put it out side the loop it gives one random number and all button will be same color
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);   //REMOVE SECOND CLASS(remove colors)
    all_buttons[i].classList.add(choice[randomNumber]);             //reset to be all color that exist
  }
}

//challenge 5 :blackJack
let blackjackGame ={            //is a map that have keys{you and dealer}gonna be object
  'you': {'scorespan':'#your-blackjack-result' , 'div': '#your-box' , 'score':0},
  'dealer' : {'scorespan':'#dealer-blackjack-result' , 'div': '#dealer-box' , 'score':0},
  'card' : ['2' , '3' , '4' , '5' , '6' , '7', '8' ,'9', '10', 'A', 'K', 'Q', 'J'],
  'cardsMap' : {'2': 2, '3':3 , '4':4, '5':5, '6':6, '7':7, '8':8, '9':9, '10':10, 'K':10, 'Q':10, 'J':10, 'A':[1,10]},
  'wins' : 0, 
  'looses':0,
  'draws' :0,
  'isStand': false,
  'turnsOver' : false,
};

const YOU = blackjackGame['you'];    //these are not really gonna change
const DEALER = blackjackGame['dealer'];

const hitSound = new Audio ('sounds/cards.mp3');
const winSound = new Audio ('sounds/win.mp3');
const loosSound = new Audio ('sounds/loos.mp3');


document.querySelector('#blackjack-hit-button').addEventListener('click' ,blackjackhit );
document.querySelector('#blackjack-stand-button').addEventListener('click' ,dealerLogic);
document.querySelector('#blackjack-deal-button').addEventListener('click' ,blackjackDeal);


function blackjackhit(){
  if (blackjackGame['isStand'] === false){  //if the stand mood that not activated that is the only time that hit button should work
    let card= randomCard();
    console.log(card);
    showCard(card , YOU);
    updateScore(card, YOU)
    showScore(YOU);
    console.log(YOU['score']);
  }
}

function randomCard(){
  let randomIndex = Math.floor(Math.random()*13);
  return blackjackGame['card'][randomIndex];
}

function showCard(card,activePlayer){
  if (activePlayer['score'] <= 21) {
     let cardImage = document.createElement('img');
     cardImage.src =`./img/card/${card}.png`;   //we use blacktick key here
     cardImage. style. width = '80px';
     cardImage. style. height = '90px';
     document.querySelector(activePlayer['div']).appendChild(cardImage);    //select div from you object then add img tag that we creat {instead of (YOU['div']) and (dealer['div']) we use (activePlayer['div']) choose with situation}
     hitSound.play();
  }
}

//we want to remove images with button deal

function blackjackDeal(){
  /*
  let winner = computeWinner();
  showResult(winner);
  */
   //showResult(computeWinner()); //another way instead od 193-194
  

   if (blackjackGame['turnsOver']=== true) {
  

      blackjackGame['isStand'] = false;
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');

    for (i=0 ; i<yourImages.length; i++){
      yourImages[i].remove(); 
    }

    for (i=0 ; i<dealerImages.length; i++){
      dealerImages[i].remove(); 
    }

    YOU['score'] =0;
    DEALER['score'] =0;
    
    document.querySelector('#your-blackjack-result').textContent= 0;
    document.querySelector('#dealer-blackjack-result').textContent= 0;

    document.querySelector('#your-blackjack-result').style.color= 'white';
    document.querySelector('#dealer-blackjack-result').style.color= 'WHITE'; //??? chera ba deal zadan jofteshunam hamzaman sefr mishe?
    
    document.querySelector('#blackjack-result').textContent= "let's play";
    document.querySelector('#blackjack-result').style.color= 'black'; 
    
    blackjackGame['turnsOver'] = true;     //restart the game
    }
}
 
function updateScore(card, activePlayer){  //this function is going to take a card and an active player
  if (card=== 'A'){
  //if adding 11 keeps me below 21 , add 11 otherwise , add 1
  if (activePlayer['score']+blackjackGame['cardsMap'][card][1] <= 21) {
    activePlayer['score']+= blackjackGame['cardsMap'][card][1];
  } else {
    activePlayer['score']+= blackjackGame['cardsMap'][card][0];
  }

}else {
   activePlayer['score'] += blackjackGame['cardsMap'][card];    //incriments the players score 
  }
}

function showScore(activePlayer){
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scorespan']).textContent = 'BUST';
    document.querySelector(activePlayer['scorespan']).style.color = 'red';
  } else {
  document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score'];
  }
}


function sleep(ms) {  //bara inke vagti stang mizanim cartaro dune dune biare
  return new Promise(resolve => setTimeout(resolve , ms));
}


async function dealerLogic(){
  blackjackGame['isStand'] = true;  //when you  hit the stand button dealerLogic function will run and it would be chang  stand state to true (stand state has been activated)
  

  while (DEALER['score'] < 16 && blackjackGame['isStand'] === true) {
    let card = randomCard();
    showCard(card,DEALER);
    updateScore(card ,DEALER);
    showScore(DEALER);
    await sleep (1000);  //creat sleep function and here we call it
  }
  
 blackjackGame['turnsOver'] = true;
 let winner =computeWinner();
 showResult(winner); 
 }
  

//compute winner

function computeWinner(){
  let winner;

  if (YOU['score'] <=21) {

    if( YOU['score'] > DEALER['score']  ||  (DEALER['score'] >21)) {
        console.log('YOU WON!');
        blackjackGame['wins']++;
        winner = YOU;
    } else if (YOU ['score'] < DEALER ['score']){
        console.log('YOU LOST!');
        blackjackGame['looses']++;
        winner = DEALER;
    } else if (YOU ['score'] === DEALER ['score']){
        console.log('YOU DREW!');
        blackjackGame['draws']++;

     

//Condition : when user bustes but dealer doesn't
 
    } else if (YOU ['score'] > 21 &&  DEALER ['score'] <=21){
       console.log('YOU LOST');
       blackjackGame['looses']++;
       winner = DEALER;
    }
 //Condition : when user and dealer busts 
    } else if (YOU ['score'] > 21 &&  DEALER ['score'] > 21){
       console.log('YOU DREW!');
       blackjackGame['draws']++;
    }

    console.log( blackjackGame);
    return winner;
  }
 
 function showResult (winner){
 let massage , massageColor;  

 if(blackjackGame['turnsOver'] === true){

    if (winner === YOU){
        document.querySelector('#wins').textContent=blackjackGame['wins'];
        massage = 'you won';
        massageColor = 'green';
        winSound.play()
        
      } else if (winner === DEALER){
        document.querySelector('#losses').textContent=blackjackGame['looses'];
        massage = 'you lost';
        massageColor = 'red';
        loosSound.play();
      } else {
        document.querySelector('#draws').textContent=blackjackGame['draws'];
        massage = 'you drew';
        massageColor = 'black';
      }

      document.querySelector('#blackjack-result').textContent= massage;
      document.querySelector('#blackjack-result').style.color= massageColor;
    
    

      // Refresh or reload page.
      /*
      function refresh() {
          window.setTimeout(function(){location.reload()},4000)
      }
    refresh()
    */
    }
  }