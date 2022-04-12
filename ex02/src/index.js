class Book {
    constructor(title) {
        this._title = title;
    }
    get name() {
        return this._title;
    }
    set name(newTitle) {
        this._title = newTitle;
    }
}
const littlePrince = new Book("The Little Prince");
console.log(littlePrince.title);
const petitPrince = new Book("Le Petit Prince");
console.log(petitPrince.title);
module.exports = Book;
