//anotther way of declaring array

var ar = new Array("fashad","ahmed","siddique");
console.log(ar);

ar.push("fas");

console.log(ar);
ar.pop()

ar

// shft k through shuru ka element nikl jata hai

ar.shift()
//"fashad"
ar.unshift("fas")
//3
ar
//(3) ["fas", "ahmed", "siddique"]
ar.push("fas");

//4
ar
//(4) ["fas", "ahmed", "siddique", "fas"]
ar.splice(3,1,"sidd")
//["fas"]
// .splice(index no., itne no. ko nikalo, added cheez)

ar
//(4) ["fas", "ahmed", "siddique", "sidd"]

var name = "fashad"
name[0]
// "f"