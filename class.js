class person {
    constructor(Name, age) {

        person.Name = Name;
        person.age = age;
        
    }

    greet() {

        console.log("hello I am " + person.Name + " and I am " + person.age + " years old");

    }

    isabove18() {

        if (person.age > 18) {
            console.log(person.Name + " is above 18 years old! ")
        }
    }
}

const Myperson = new person ("ali", 19)
Myperson.greet();
console.log(Myperson.isabove18());

const Myperson2 = new person ("reza", 20)
Myperson2.greet();
console.log(Myperson2.isabove18());


const Myperson3 = new person ("asal", 15)
Myperson3.greet();
console.log(Myperson3.isabove18());