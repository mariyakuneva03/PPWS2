
/*class Player{
    constructor(name,age,occ,country){
        this.name=name;
        this.age=age;
        this.occ=occ;
        this.country=country;
       return name,age,occ,country
    }
    
}
*/
var number = 0;
var playerTurn = 1
var guesses1=4;
var guesses2=4;



function displayTurn() {
  if (playerTurn%2==0){
    alert("Player 2 it's your turn");
  } else{
    alert("Player 1 it's your turn");
  }
}

function incPlayerTurn() {
  playerTurn++;
}

function play() {
  displayTurn();
  incPlayerTurn();
}


for(var i = 4; i >=0; i--) {
    play();
  var guess = prompt( "Guess what number I'm thinking of between 1 and 100" );
  if( guess < number ) { 
    alert( "Upper! What number is it?" + ( i-1 ) + " remaining guesses" );
  } else if ( guess > number ) {
    alert( "Lower! What number is it?" + ( i-1 ) + " remaining guesses" );
  } else {
   alert( " Congratulations! You guessed the number, it was " + number );
  }
}

/*
let player1=new Player("Mark",21,"student","Netherlands");
let player2=new Player("Mark2",22,"student","Bulgaria");
*/
