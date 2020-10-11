// we target each tag by considering it in a array
// for eg: for 1st p tag use p[0]

var par = document.getElementsByTagName("p");
// getElementById(the id).style.fontSize = "2em";
par[0].style.color = 'red';
for (var i = 0; i<par.length; i++){
    par[i].style.color = 'blue';    
}

///     Target some elements by tag name read chp 54  div case  parent
