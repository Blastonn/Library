const myLibrary = [];

function Book(title, author,page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

function addBookToLibrary(title, author, page, read){
    const book = new Book(title, author, page, read);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    return book;
}

function showBook() {
    const containerCard = document.querySelector(".container-card")
    containerCard.innerHTML = " ";
    myLibrary.forEach(book =>{
      const card = document.createElement("div")
      card.classList.add("card");
      card.textContent = `${book.title} ${book.author} ${book.page} ${book.read}`;
      containerCard.appendChild(card);

    });

}

function formDialogShow(){
  const showButton = document.querySelector(".dialog-form-button");
  const dialog = document.querySelector("dialog");

  showButton.addEventListener("click", () => {
    dialog.showModal();
  });
}

function formDialogAddBook(){
  const dialog = document.querySelector("dialog");
  const form = document.querySelector(".form-book")
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.querySelector("input[name = 'book-name']").value;
    const author = document.querySelector("input[name = 'book-author']").value;
    const page = document.querySelector("input[name = 'book-pages']").value;
    const read = document.querySelector("input[name = 'book-read']:checked").value;
  
    console.log(titulo,author,page,read);
    addBookToLibrary(titulo, author, page, read);
    showBook();
    limparInput();

  
    dialog.close();

  });
}

function limparInput(){
  const form = document.querySelector(".form-book")
  form.reset();
}

function closeButton(){
  const buttonCancel = document.querySelector(".buttonCancel");

  buttonCancel.addEventListener("click", () =>{
    dialog.close();
  })
}
closeButton();
formDialogShow();
formDialogAddBook();







