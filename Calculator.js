var v1 = prompt('Enter the first number :  ');
var sign = prompt('Enter operation :  ');
var v2 = prompt('Enter the second number :  ');

// +prompt ---- > int

console.log(v1 + sign + v2);

if(sign === '+'){
    alert((+v1) + (+v2));
}
else if(sign === '-'){
    alert(v1 - v2);
}
else if(sign === '*'){
    alert(v1 / v2);
}
else if(sign === '/'){
    alert(v1 / v2);
}
else if(sign === '%'){
    alert((v1 / v2) * 100 + '%')
}

