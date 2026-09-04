class Book {
  title: string;
  author: string;
  year: number;

  constructor(title: string, author: string, year: number) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

interface Review {
  bookId: number;
  rating: number;
  comment: string;
}

let reviews: Review[] = [];

function displayBook(book: Book): void {
  const bookList = document.getElementById("book-list");
  if (bookList) {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>By ${book.author}, ${book.year}</p>
    `;
    bookList.appendChild(bookDiv);
  }
}

function addReview(bookId: number, rating: number, comment: string): void {
  const newReview: Review = {
    bookId: bookId,
    rating: rating,
    comment: comment
  };
  reviews.push(newReview);
  console.log(`Review added for book ${bookId}: ${rating} stars - "${comment}"`);
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("The Lord of the Rings", "J.R.R. Tolkien", 1954);

displayBook(book1);
displayBook(book2);

addReview(1, 5, "Amazing book! A true classic.");
addReview(2, 4, "Epic story, but a bit long.");

console.log("All reviews:", reviews);
// Updated with better error handling
