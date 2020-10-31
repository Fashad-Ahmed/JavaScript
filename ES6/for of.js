const linked = 'https://www.youtube.com/watch?vMMsyVyI&t=470s';

const lis = () => {
for (const char of linked ) {
    console.log(char);
    }
}

console.log(lis());

const mul = (x,y) => {
    y = (typeof y !==  'undefined') ? y : 6
    console.log(x+y);
}

mul(5);

// rest

const arr = (...input) => {
    console.log(input);
    console.log(...input);

    let total = 0;
    for (let i of input) {
        total += i;

    }
    console.log(total);
}
arr(1,2,3,4,5,6,7,8,9,10);

// spread

const sum = (a,b,c) => {
    console.log(a+b+c);
}

let arr1 = [1,2,3];
sum(...arr1);

// replaces concat 
let arr2 = [4,5,6];
console.log(...arr1,...arr2);
let arr1 = [...arr2,4,5];