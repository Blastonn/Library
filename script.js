const myLibrary = [];

function Book(title, author,page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
}

Book.prototype.readStatus = function(){
  this.read = this.read === "Lido" ? "Não lido" : "Lido";
}

function addBookToLibrary(title, author, page, read){
    const book = new Book(title, author, page, read);
    book.id = crypto.randomUUID();
    myLibrary.push(book);
    return book;
}

function buttonRead(){
  document.addEventListener("click", (e) => {
    
    if(e.target.classList.contains("buttonRead")){
      const card = e.target.closest(".card");
      const button = e.target.closest("button");
      const livro = myLibrary.find(book => book.id === card.dataset.id)
      if(livro){
          livro.readStatus();
          button.dataset.value = livro.read;
          button.textContent = livro.read;
        }
    }
  });
}

function showBook() {
    const containerCard = document.querySelector(".container-card")
    containerCard.innerHTML = " ";
    myLibrary.forEach(book =>{
      const card = document.createElement("div")
      const para = document.createElement("p");
      const buttonDel = document.createElement("button");
      const buttonRead = document.createElement("button");

      buttonDel.classList.add("buttonDel");
      buttonRead.classList.add("buttonRead");
      card.classList.add("card");
      card.appendChild(para);
      card.appendChild(buttonDel);
      card.appendChild(buttonRead);
      buttonDel.textContent = "Apagar";
      buttonRead.textContent = book.read;
      buttonRead.dataset.value = book.read;
      para.classList.add("para-card");
      card.dataset.id = `${book.id}`;
      para.textContent = `${book.title} ${book.author} ${book.page}`;
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
  const dialog = document.querySelector("dialog");


  buttonCancel.addEventListener("click", (e) =>{
    e.preventDefault();
    dialog.close();
  })
}

function deleteBook(){

  document.addEventListener("click", (e) =>{
    if(e.target.classList.contains("buttonDel")){
      const card = e.target.closest(".card");
      
      const index = myLibrary.findIndex(book => book.id === card.dataset.id)

      if(index !== -1){
        myLibrary.splice(index, 1);
        card.remove();
      }
    }
  })
}
buttonRead();
deleteBook();
closeButton();
formDialogShow();
formDialogAddBook();


addBookToLibrary("Harry Potter", "Jk Rowling", "22", "Lido");
addBookToLibrary("Harry Potter", "Jk Rowling", "22", "Lido");
addBookToLibrary("Harry Potter", "Jk Rowling", "22", "Lido");
addBookToLibrary("Harry Potter", "Jk Rowling", "22", "Lido");


showBook();







