class LibraryCollection {
  constructor(capaciti) {
    this.capaciti = Number(capaciti);
    this.books = [];
  }
  addBook(bookName, bookAuthor) {
    if (this.capaciti <= 0) {
      throw new Error("Not enough space in the collection.");
    } else {
      this.books.push({ bookName, bookAuthor, payed: false });
      this.capaciti--;
      return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }
  }
  payBook(bookName) {
    let currBook = this.books.find((x) => x.bookName === bookName);
    if (!currBook) {
      throw new Error(`${bookName} is not in the collection.`);
    } else if (currBook.payed === true) {
      throw new Error(`${bookName} has already been paid.`);
    } else {
      currBook.payed = true;
      return `${bookName} has been successfully paid.`;
    }
  }
  removeBook(bookName) {
    let currBook = this.books.find((x) => x.bookName === bookName);
    if (!currBook) {
      throw new Error(`The book, you're looking for, is not found.`);
    } else if (currBook.payed === false) {
      throw new Error(
        `${bookName} need to be paid before removing from the collection.`
      );
    } else {
      let index = this.books.indexOf(currBook);
      this.books.splice(index, 1);
      this.capaciti++;
      return `${bookName} remove from the collection.`;
    }
  }
  getStatistics(bookAuthor) {
    let currBook = this.books.find((f) => f.bookAuthor === bookAuthor);
    let paidOrNo = "";
    if (currBook) {
      currBook.payed ? (paidOrNo = "Has Paid") : (paidOrNo = "Not Paid");
    }

    let buff = [];
    if (!bookAuthor) {
      buff.push(`The book collection has ${this.capaciti} empty spots left.`);
      this.books
        .sort((a, b) => a.bookName.localeCompare(b.bookName))
        .forEach((book) => {
          book.payed == false
            ? (paidOrNo = "Not Paid")
            : (paidOrNo = "Has Paid");

          buff.push(`${book.bookName} == ${book.bookAuthor} - ${paidOrNo}.`);
        });
      return buff.join("\n");
    } else if (currBook) {
      return `${currBook.bookName} == ${currBook.bookAuthor} - ${paidOrNo}.`;
    } else if (!currBook) {
      return `${bookAuthor} is not in the collection.`;
    }
  }
}
const library = new LibraryCollection(5);
library.addBook("Don Quixote", "Miguel de Cervantes");
library.payBook("Don Quixote");
library.addBook("In Search of Lost Time", "Marcel Proust");
library.addBook("Ulysses", "James Joyce");
console.log(library.getStatistics());
