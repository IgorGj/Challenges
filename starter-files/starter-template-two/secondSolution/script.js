// IN THIS FILE IM GETTING SOME OF THE ELEMENTS FROM THE INDEX.

const books = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    maxPages: "620",
    onPage: "600",
  },
  {
    title: "Harry Potter",
    author: "J.K Rowling",
    maxPages: "800",
    onPage: "240",
  },
  {
    title: "50 Shades of Grey",
    author: "E.L. James",
    maxPages: "430",
    onPage: "164",
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    maxPages: "920",
    onPage: "920",
  },
  {
    title: "Hamlet",
    author: "William Shakespear",
    maxPages: "640",
    onPage: "640",
  },
];

const theFirstUl = document.querySelector("#first-ul");
const theSecondUl = document.querySelector("#second-ul");
const theTable = document.querySelector("#the-table");
const theTableBody = theTable.querySelector("tbody");
const theForm = document.querySelector("form");
const theSubmitBtn = theForm.querySelector("button");
const formInputTitle = theForm.querySelector("#book-title");
const formInputAuthor = theForm.querySelector("#book-author");
const formInputOnPage = theForm.querySelector("#book-curr-page");
const formInputMaxPages = theForm.querySelector("#book-max-pages");

const creatingTheLists = (arrayArg) => {
  const listElementForFirstUl = document.createElement("li");
  listElementForFirstUl.textContent = `${arrayArg.title} by ${arrayArg.author}`;

  const listElementForSecondUl = document.createElement("li");
  if (arrayArg.onPage === arrayArg.maxPages) {
    listElementForSecondUl.textContent = `You have read ${arrayArg.title} by ${arrayArg.author}`;
  } else {
    listElementForSecondUl.textContent = `You still need to read ${arrayArg.title} by ${arrayArg.author}`;
  }

  theFirstUl.append(listElementForFirstUl);
  theSecondUl.append(listElementForSecondUl);
};

const creatingTable = (theObj, index) => {
  const theTableBodyTr = document.createElement("tr");
  const theDataTitle = document.createElement("td");
  const theDataAuthor = document.createElement("td");
  const theDataMaxPages = document.createElement("td");
  const theDataOnPage = document.createElement("td");
  const theDataProgress = document.createElement("td");
  const theDataProgressDiv = document.createElement("span");
  const theDataProgressDivInner = document.createElement("span");
  const elementTableRowDeleteIcon = document.createElement("span");

  theDataTitle.textContent = theObj.title;
  theDataAuthor.textContent = theObj.author;
  theDataOnPage.textContent = theObj.onPage;
  theDataMaxPages.textContent = theObj.maxPages;

  elementTableRowDeleteIcon.classList.add("material-symbols-outlined");
  elementTableRowDeleteIcon.setAttribute("style", "color:red; display:none;");
  theDataProgressDiv.classList.add("progress");

  theTableBody.append(theTableBodyTr);

  theTableBodyTr.addEventListener("click", (e) => {
    const theFirstList = theFirstUl.querySelectorAll("li");
    const theSecondlist = theSecondUl.querySelectorAll("li");
    let theIndex = e.currentTarget.rowIndex - 1;
    books.splice(index, 1);
    theFirstUl.removeChild(theFirstList[theIndex]);
    theSecondUl.removeChild(theSecondlist[theIndex]);

    theTableBody.removeChild(theTableBodyTr);
    if (!theTableBody.hasChildNodes()) {
      theTable.style.display = "none";
    }
  });
  theTableBodyTr.addEventListener("mouseenter", (e) => {
    elementTableRowDeleteIcon.style.display = "block";
    theTableBodyTr.style.textDecoration = "line-through";
  });
  theTableBodyTr.addEventListener("mouseleave", (e) => {
    elementTableRowDeleteIcon.style.display = "none";
    theTableBodyTr.style.textDecoration = "none";
  });

  theDataProgressDivInner.classList.add("progress-bar");
  let theProgressPercent = (theObj.onPage / theObj.maxPages) * 100;
  theDataProgressDivInner.textContent = `${Math.floor(theProgressPercent)}%`;
  elementTableRowDeleteIcon.innerHTML = "delete";
  theDataProgressDivInner.style.width = `${theProgressPercent}%`;
  theDataProgressDivInner.style.backgroundColor = "green";
  theDataProgressDiv.append(theDataProgressDivInner);
  theDataProgress.append(theDataProgressDiv);
  theDataTitle.innerText = theObj.title;
  theDataAuthor.innerText = theObj.author;
  theDataMaxPages.innerText = theObj.maxPages;
  theDataOnPage.innerText = theObj.onPage;
  theTableBodyTr.append(
    theDataTitle,
    theDataAuthor,
    theDataMaxPages,
    theDataOnPage,
    theDataProgress,
    elementTableRowDeleteIcon
  );
  theTableBody.append(theTableBodyTr);
};

const addingNewBook = (element) => {
  element.preventDefault();

  const theBook = {
    title: formInputTitle.value,
    author: formInputAuthor.value,
    maxPages: formInputMaxPages.value,
    onPage: formInputOnPage.value,
  };

  formInputTitle.value = "";
  formInputAuthor.value = "";
  formInputMaxPages.value = "";
  formInputOnPage.value = "";

  if (
    theBook.title === "" ||
    theBook.author === "" ||
    theBook.maxPages === "" ||
    theBook.onPage === "" ||
    theBook.maxPages < theBook.onPage
  ) {
    alert(
      "You need to fill the whole form!!! Or you made some mistake while inputting the max number of pages or the on current page!!!"
    );
  } else {
    books.push(theBook);
    creatingTable(theBook);
    creatingTheLists(theBook);
  }
  if (theTableBody.hasChildNodes()) {
    theTable.style.display = "table";
  }
};

books.forEach((element) => {
  creatingTheLists(element);
  creatingTable(element);
});

theSubmitBtn.addEventListener("click", (e) => {
  addingNewBook(e);
});
