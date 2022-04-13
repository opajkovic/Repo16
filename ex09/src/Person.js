class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    getPerson() {
        return `Name: {name}, email: {email}, age: {age}`;
    }
}
module.exports = Person;