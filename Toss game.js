var hU = prompt('enter your name : ');
var tU = prompt('enter second player name : ');

var toss = Math.random() * 2;
var ross = Math.floor(toss);

if(ross === 0){
    alert('its Heads' + hU + 'wins the toss');
}
else{
    alert('its Tails' + tU + 'wins the toss');
}