window.addEventListener( 'DOMContentLoaded', function () {
	
    const buttonRoolDice = document.querySelector( '.dice-roll' );

function rollDice () {
    const diceSide1 = document.getElementById( 'dice-side-1' );
    const diceSide2 = document.getElementById( 'dice-side-2' );
    const diceSide3 = document.getElementById( 'dice-side-3' );
    const diceSide4 = document.getElementById( 'dice-side-4' );
    const status = document.getElementById( 'status' );
    const status2 = document.getElementById( 'status2' );
    const winStatus=document.getElementById( 'winStatus' );
    const side1 = Math.floor( Math.random() * 6 ) + 1;
    const side2 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotal = side1 + side2;
    const side3 = Math.floor( Math.random() * 6 ) + 1;
    const side4 = Math.floor( Math.random() * 6 ) + 1;
    const diceTotalCompter = side3 + side4;
    diceSide1.innerHTML = side1;
    diceSide2.innerHTML = side2;
    diceSide3.innerHTML = side3;
    diceSide4.innerHTML = side4;
    status.innerHTML = 'You rolled ' +  diceTotal + '.' + ' \t\t\t\tComputer rolled '+ diceTotalCompter  + '.';
    status2.innerHTML='';
    if ( side1 === side2 ) {
        status.innerHTML += ' \nDoubles! x2 Player\'s points!';
        var newDiceTotal=(diceTotal+diceTotal);
    }
    else{
        var newDiceTotal=diceTotal;
    }
    if( side3 === side4 ) { 
        status2.innerHTML+= ' \n\nDoubles! x2 Computer points!';
        var NewDiceTotalComputer=(diceTotalCompter+diceTotalCompter);
    }
    else{
        var NewDiceTotalComputer=diceTotalCompter;
    }
    
    
        if(newDiceTotal> NewDiceTotalComputer)
            winStatus.innerHTML='Player wins with ' + newDiceTotal + ' points!';
        else if(newDiceTotal=== NewDiceTotalComputer)
            winStatus.innerHTML='Draw';
        
        else if(newDiceTotal< NewDiceTotalComputer)
            winStatus.innerHTML='Computer wins with ' +  NewDiceTotalComputer + ' points';
       
    
    
    
    

}
const name = prompt('Please, introduce yourself?');
if (name) {
  document.querySelector('#playerName').innerHTML = `${name}`;
} else {
  document.querySelector('#playerName').innerHTML = 'Guest';
}
buttonRoolDice.addEventListener( 'click', rollDice, false );

}, false);