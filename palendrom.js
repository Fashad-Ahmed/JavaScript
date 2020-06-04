
var word = propmt("Enter your name: ");
var c = "";

for (var i = word.length - 1; i >= 0 ;i--){
    c += word[i]
}

if (word === check){
    alert(word + "is a plaendrome")
}