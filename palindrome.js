
var word = prompt("Enter your name: ");
var c = "";

for (var i = word.length - 1; i >= 0 ;i--){
    c += word[i]
}

if (word === c){
    alert(word + "is a palindrome");
}
