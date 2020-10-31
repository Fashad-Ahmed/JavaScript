class Student{
    constructor(name,roll) {
        this.name = name;
        this.roll = roll;
    }

    bioData() {
        console.log('hi';)
    }
}

class Player extends Student {

}


let student1 = new Student('ahmed',456);
let student2 = new Player('ziyan',236);
student1.bioData();

// super