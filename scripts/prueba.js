const booksContainer = document.getElementById("books-container");
const remove = document.querySelectorAll(".delete");
const form = document.getElementById("form");
const add = document.getElementById("add");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const readed = document.getElementById("readed")
const libro = document.querySelectorAll(".book");
let updateBtns;
form.addEventListener("submit",e=>e.preventDefault());

booksContainer.addEventListener("click",e=>{
  if(e.target.className == "update" ){
    e.path[2].childNodes[1].childNodes[7].innerText = e.path[2].childNodes[1].childNodes[7].innerText == "Yes" ? "No" : "Yes"
  } else if(e.target.className == "delete"){
    deleteTask(e.target.parentNode.parentNode.id)
  }
  
  
})


add.addEventListener("click",()=>{
  if(title.value != "" && author.value != "" && pages.value != ""){
    let book = new BookClass(title.value,author.value ,pages.value ,readed.checked );
    let id = createBook(book);
    title.value = "";
    author.value = "";
    pages.value = "";
    readed.checked = false;
  }
})


const deleteTask = id=>{
  let taskToDelete = document.getElementById(id)
  booksContainer.removeChild(taskToDelete)
}


class BookClass {
  constructor(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
  }
  updateReaded() {
    this.readed = this.readed ? false : true;
  }  
}
let booksArr = [];

let idCounter = 0;


const createBook = (book) => {
  idCounter++;

  booksContainer.innerHTML += `
  <div class="book" id="${idCounter}">
  <div class="book-info">
    <p class="title">${book.title}</p>
    <p class="author">${book.author}</p>
    <p class="pages">${book.pages}</p>
    <p class="readed">${book.readed ? "Si" : "No"}</p>
  </div>
    <div class="buttons">
      <button class="update"></button>
      <button class="delete"></button>
    </div>
  </div>
`
  return idCounter;
};
