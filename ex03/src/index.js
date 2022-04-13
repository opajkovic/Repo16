class Person {
    constructor(name) {
        this._name = name;
    }
    static display(){
        return "Static method is invoked from Person class";
    }
    show(){
        console.log( Person.display());
    }
}

var message = new Person();
message.show();
module.exports = Person;
