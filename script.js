const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(book){
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    return book;
}

function showBook(book) {
    const containerCard = document.querySelector(".container-card")
    const card = document.createElement("div")
    card.classList.add("card");
    card.textContent = `${book.title} ${book.author}`;
    containerCard.appendChild(card);
}

const book1 = new Book("Harry Potter", "J.k Rowling");
const book2 = new Book("title", "author");
const book3 = new Book("title", "author");




addBookToLibrary(book1);
showBook(book1);
addBookToLibrary(book2);
showBook(book2);
addBookToLibrary(book3);
showBook(book3);


console.log(myLibrary);

const dialog = document.querySelector("dialog");
const showButton = document.querySelector(".dialog-form");
const closeButton = document.querySelector("dialog button");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
