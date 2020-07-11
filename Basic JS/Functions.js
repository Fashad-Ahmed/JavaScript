function fun(name = 'the', lasttname = 'chainsmokers') {
    console.log( name + " hello "   + lasttname)
}

fun('alan','walker');
fun('one','republic');
fun( );


function square(num) {
    var n =  num**3;
    return n;
}


let num1 = square(3);
console.log(num1);


function greet(){
    var a = prompt('hi enter yor name; ');
    var b = "Hello my name is : " + a;
    document.write(b);
}

greet();

function hb(a1,a2){
    var sum = a1 + a2;
    console.log(sum);
}

hb(100,11);
hb("Fashad ","Ahmed");