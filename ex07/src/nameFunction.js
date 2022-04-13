const firstName = firstName => firstName.toUpperCase();
const lastName = lastName => lastName.toLowerCase();
console.log(firstName("John"));
console.log(lastName("Doe"));
exports.firstName = firstName;
exports.lastName = lastName;