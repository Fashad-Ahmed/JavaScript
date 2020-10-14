function Student(name,roll){
    this.name = name;
    this.roll = roll;
}

var student1 = new Student('ahmed',456);
var student1 = new Student('zack',236);
 

function Plan(name, price, space, transfer, pages, discountMonths) {
    this.name = name;
    this.price = price;
    this.space = space;
    this.transfer = transfer;
    this.pages = pages;
    this.discountMonths = discountMonths;
    this.prototype.calcAnnual = function(percentIfDisc) {
    var bestPrice = this.price;
    var currDate = new Date();
    var thisMo = currDate.getMonth();
    for (var i = 0; i < this.discountMonths.length; i++) {
        if (this.discountMonths[i] === thisMo) {
            bestPrice = this.price * percentIfDisc;
            break;
                    }
                }

     return bestPrice * 12;
    };
}
// Plan.prototype.calcAnnual = function(percentIfDisc) 

var pack1 = new Plan('Zack',120,3650,6000,8);
// could apply exception any particular shared / overide prototype

var listOfProperties = [];
var list2OfProperties = [];

for (var prop in plan1) {
    listOfProperties.push(prop);
    }

for (var prop in plan1) {
    if (plan1.hasOwnProperty(prop)) {
        listOfProperties.push(prop);
        }
}
