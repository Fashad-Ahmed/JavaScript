const item = ['egg', 'cake' , 'baking powder' , 'vanilla syrup'];

let [a,b,c,d] = item;

let [a,,d] = item;
console.log(`${a} ${d}`);

let firstNumber = 2;
let secondNumber = 30;

console.log(`${firstNumber} & ${secondNumber}`);
[firstNumber,secondNumber] = [secondNumber,firstNumber];
console.log(`${firstNumber} & ${secondNumber}`);