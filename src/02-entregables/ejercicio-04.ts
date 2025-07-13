console.log("************** DELIVERABLE 04 *********************");
function isBookRead(
  books: { title: string; isRead: boolean }[],
  titleToSearch: string
): boolean {
  const book = books.find((libro) => libro.title === titleToSearch);
  return book ? book.isRead : false;
}

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];
console.log("Comprobar si un libro ha sido leído");
console.log(books[0].title);
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(books[1].title);
console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(books[2].title);
console.log(isBookRead(books, "Devastación"));
