const myLibrary = [];

function Book(title, author){
    this.title = title;
    this.author = author;
}

function addBookToLibrary(title,author){
    const book = new Book(title, author);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    return book;
}

addBookToLibrary("Harry Potter","JK Rowling");


console.log(myLibrary);
