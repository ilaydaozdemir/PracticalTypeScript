let books = ["1984", "Brave New World"];
/*let foundBook; // type any */
let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
console.log(foundBook?.length);
