
function calc(num1,opr,num2){
    if(opr === "+"){
        return num1 + num2
    }
    else if(opr === "-"){
        return num1 - num2
    } 
    else if(opr === "*"){
        return num1 * num2
    }
    else if(opr === "/"){
        return num1 / num2
    }
    else{
        return "Incorrect Operator!"
    }
}
var result = calc(5,"-",5);
var result1 = calc(4,"*",6);
var result2 = calc(4,"$",9)
console.log(result)
console.log(result1)
console.log(result2)

// NaN ---> not a number


function f(a,b = 3){
    return a+b
}
console.log(f(1));


function fq(a,b = 3){
    return a+b
}
console.log(fq(1,9));


function foo(){

}

console.log(foo()) // undefined return
