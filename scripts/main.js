let books = [
  {
    title: "IT",
    author: "Stephen King",
    pages: 1503,
    readed: true,
  },
  {
    title: "Valle de la Calma",
    author: "Angel David Revilla",
    pages: 294,
    readed: true,
  },
  {
    title: "Aves de Presa",
    author: "Wilbur Smith",
    pages: 591,
    readed: true,
  },
  {
    title: "Lobos de Calla",
    author: "Stephen King",
    pages: 816,
    readed: false,
  },
];

const form = document.getElementById("form");
const author = document.getElementById("author");
const readed = document.getElementById("readed");
const title = document.getElementById("title");
const submit = document.getElementById("submit");
const booksContainer = document.getElementById("books-container");
const btnsUpdate = document.querySelectorAll(".update");
const btnsRemove = document.getElementById("delete")


form.addEventListener("submit", (e) => e.preventDefault());

const addBook = (title, author, pages, readed) => {
  const book = {
    title,
    author,
    pages,
    readed,
  };
  return book;
};

function Book(title, author, pages, readed) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readed = readed;
}

const createBookInfo = (title, author, pages, readed) => {
  const bookInfo = document.createElement("div");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const textP1 = document.createTextNode(title);
  const textP2 = document.createTextNode(author);
  const textP3 = document.createTextNode(pages);
  const textP4 = document.createTextNode(readed ? "Si" : "No");
  p1.className = "title";
  p2.className = "author";
  p3.className = "pages";
  p4.className = "readed";
  p1.appendChild(textP1);
  p2.appendChild(textP2);
  p3.appendChild(textP3);
  p4.appendChild(textP4);
  bookInfo.appendChild(p1);
  bookInfo.appendChild(p2);
  bookInfo.appendChild(p3);
  bookInfo.appendChild(p4);
  bookInfo.className = "book-info";
  return bookInfo;
};

const createButtons = () => {
  const buttons = document.createElement("div");
  const update = document.createElement("button");
  const remove = document.createElement("button");
  update.className = "update";
  remove.className = "delete";
  buttons.className = "buttons";
  buttons.appendChild(update);
  buttons.append(remove);
  return buttons;
};

const createBook = (book) => {
  const fragment = document.createDocumentFragment();
  const buttons = createButtons();
  const bookInfo = createBookInfo(
    book.title,
    book.author,
    book.pages,
    book.readed
  );
  const div = document.createElement("div");
  div.className = "book";
  fragment.appendChild(bookInfo);
  fragment.appendChild(buttons);
  div.appendChild(fragment);
  return div;
};

books.map((bk) => {
  const bok = createBook(bk);
  booksContainer.appendChild(bok);
});

submit.addEventListener("click", () => {
  const book = {
    title: title.value,
    author: author.value,
    pages: pages.value,
    readed: readed.checked,
  };
  books.push(book);
  const bk = createBook(book);
  booksContainer.appendChild(bk);
  console.log();
  title.value = "";
  author.value = "";
  pages.value = "";
  readed.checked = false;
  console.log(books);
});


console.log(btnsUpdate)