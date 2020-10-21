const information = {
    name: 'sam',
    lastName: 'billings',
    city: 'london',
    state: 'UK',
    code: {
        zip:'1234',
        postal:'7896'
    }
};

let {name:n,lastName:ln,city:c,state:s,code} = information;
console.log(`${n} ${ln} ${c} ${s} ${code.zip}`);