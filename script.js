//  learn how to use JavaScript Class

// ES6 ECMAScript 2015 Class

class myClass {
    constructor(name) {
        this.myName = name;
    }

    fullName (greeting) {
        return greeting + " My name is " + this.myName;
    }

    static hello(name) {
        return "Hello " + name;
    }
}

var person = new myClass("fame");

console.log(person.fullName("Hello"));

console.log(myClass.hello("fame"));