const myLibrary = [];

function Book(title,author,page,read,image){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
    this.image = image;
}

Book.prototype.readStatus = function(){
  this.read = this.read === "Lido" ? "Não lido": "Lido";
}

function addBookToLibrary(title, author, page, read,image){
    const book = new Book(title, author, page, read,image);
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

function create_Element(name,texto,className){
  const element = document.createElement(name);
  element.textContent = texto;
  if(className){
    element.classList.add(className);
    return element;

  }else return element;
}

function createClass(elemento,className){
   elemento.classList.add(className);
   return elemento;
}

function showBook() {
  semLivro();

    const containerCard = document.querySelector(".container-card")
    containerCard.innerHTML = " ";
    myLibrary.forEach(book =>{
      const card = document.createElement("div")
      const para = document.createElement("p");
      const buttonsCard = create_Element("div", "", "button-card")
      const buttonDel = document.createElement("button");
      const buttonRead = document.createElement("button");

      createClass(buttonDel, "buttonDel");
      createClass(buttonRead, "buttonRead");

      card.classList.add("card");
      card.appendChild(create_Element("p",`${book.title}`,"para-card"));
      card.appendChild(create_Element("p",`Autor: ${book.author}`,"para-card"));
      card.appendChild(create_Element("p",`Paginas: ${book.page}`,"para-card"));
      buttonsCard.appendChild(buttonDel);
      buttonsCard.appendChild(buttonRead);
      para.classList.add("para-card");
      console.log(book.image);
      adicionarImagem(book.image,card);
      buttonDel.textContent = "Apagar";
      buttonRead.textContent = book.read;
      buttonRead.dataset.value = book.read;
      card.dataset.id = `${book.id}`;
      card.appendChild(buttonsCard);

      containerCard.appendChild(card);
    });


}

function adicionarImagem(url,container){
  if(url && url.trim() !== ""){
    const bookImage = document.createElement("img");
    bookImage.classList.add("img-book");
    bookImage.src = url;
    bookImage.alt = 'Imagem adicionada';
    container.appendChild(bookImage);
  }else{
    const bookImage = document.createElement("img");
    bookImage.classList.add("img-book");
    bookImage.src = "https://cdn-icons-png.flaticon.com/512/16/16428.png";
    bookImage.alt = 'Imagem adicionada';
    container.appendChild(bookImage);
  }



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
    const image = document.querySelector("input[name = 'book-image']").value;
    const author = document.querySelector("input[name = 'book-author']").value;
    const page = document.querySelector("input[name = 'book-pages']").value;
    const read = document.querySelector("input[name = 'book-read']:checked").value;
  
    console.log(titulo,author,page,read);
    addBookToLibrary(titulo, author, page, read, image);
    showBook();
    limparInput();

    console.log(myLibrary);

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

function semLivro(){
  const container = document.querySelector(".container");
  const containerCard = document.querySelector(".container-card")
  if(myLibrary.length === 0){
    if(containerCard){
      containerCard.remove();
    }
  }else{
    if(!containerCard){
      const containerCard = create_Element("div","","container-card");
      container.appendChild(containerCard);
    }
  }
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
      semLivro();

    }
  })
}
buttonRead();
deleteBook();
closeButton();
formDialogShow();
formDialogAddBook();


addBookToLibrary("O diabo veste prada", "Lauren Weisberger", "414", "Não lido","https://m.media-amazon.com/images/I/61iRMz3IilL.jpg");
addBookToLibrary("Harry Potter e a Câmara Secreta: 2", "J.K. Rowling", "224", "Lido","https://m.media-amazon.com/images/I/51SnGLrrJcL._SY445_SX342_.jpg");
addBookToLibrary("Harry Potter e a Pedra Filosofal: 1", "J.K. Rowling", "208", "Lido","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRspAXv9PUv1aVbmSitOhF-HSdH00_pZyZwCg&s");




showBook();







