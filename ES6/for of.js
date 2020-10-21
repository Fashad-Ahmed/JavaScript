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