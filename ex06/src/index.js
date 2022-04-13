const firstName = firstName => firstName.toUpperCase();
const lastName = lastName => lastName.toLowerCase();
console.log(firstName("Olja"));
console.log(lastName("Pajkovic"));
exports.firstName=firstName;
exports.lastName=lastName;