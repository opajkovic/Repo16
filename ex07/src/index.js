const person = require('./nameFunction');
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get person() {
        return `${this.firstName} ${this.lastName}.`;
    }
    set person(firstName) {
        this.firstName =this.firstName;
    }
}
const person = new Person("John","doe");
console.log(person.person());
module.exports = person;