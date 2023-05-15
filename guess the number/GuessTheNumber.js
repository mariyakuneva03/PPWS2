
class Player{
    constructor(name,age,occ,country){
        this.name=name;
        this.age=age;
        this.occ=occ;
        this.country=country;
       return name,age,occ,country
    }
  }

var name1=document.getElementByID('name1').value
var name2=document.getElementByID('name2').value
var age1=document.getElementByID('age1').value
var age2=document.getElementByID('age2').value
var occ1=document.getElementByID('occ1').value
var occ2=document.getElementByID('occ2').value
var co1=document.getElementByID('co1').value
var co2=document.getElementByID('co2').value




var number = 0;
var playerTurn = 1
var guesses1=4;
var guesses2=4;



function displayTurn() {
  if (playerTurn%2==0){
    alert(`${name2} it's your turn`);
  } else{
    alert(`${name1} it's your turn`);
  }
}

function incPlayerTurn() {
  playerTurn++;
}

function play() {
  displayTurn();
  incPlayerTurn();

}

function start (){
for(var i = 8; i >=0; i--) {
    play();
  var guess = prompt( "Guess what number I'm thinking of between 1 and 100" );
  if( guess < number ) { 
    if (playerTurn%2==0){
      guesses2=guesses2-1;
      alert( "Upper! What number is it?" + ( guesses2 ) + " remaining guesses" );}
      else{
        guesses1=guesses1-1;
        alert( "Upper! What number is it?" + ( guesses1 ) + " remaining guesses" );}
  } else if ( guess > number ) {
    if (playerTurn%2==0){
      guesses2=guesses2-1;
      alert( "Lower! What number is it?" + ( guesses2) + " remaining guesses" );}
      else{
        guesses1=guesses1-1;
        alert( "Lower! What number is it?" + ( guesses1 ) + " remaining guesses" );}
  } else {
   alert( " Congratulations! You guessed the number, it was " + number );
   break;
  }
}
}


let player1=new Player(name1,age1,occ1,co1);
let player2=new Player(name2,age2,occ2,co2);

