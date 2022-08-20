// THIS FILE IS PURE JS THE OTHERONE IS WITH HTML CODE

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

const theUl = document.createElement("ul");
const secondUl = document.createElement("ul");
theUl.classList.add("mt-5");

const creatingList = (arrayArg) => {
  const theList = document.createElement("li");
  const secondList = document.createElement("li");
  theList.textContent = `${arrayArg.title} by ${arrayArg.author}`;

  if (arrayArg.onPage === arrayArg.maxPages) {
    secondList.innerText = `You have read ${arrayArg.title} by ${arrayArg.author}`;
  } else {
    secondList.innerText = `You still need to read ${arrayArg.title} by ${arrayArg.author}`;
  }

  theUl.append(theList);
  secondUl.append(secondList);
};

books.forEach((el) => {
  creatingList(el);
});

document.body.append(theUl, secondUl);

const table = document.createElement("table");

const tableHead = document.createElement("thead");
const tableHeadRow = document.createElement("tr");
const tableHeadTitle = document.createElement("th");
const tableHeadAuthor = document.createElement("th");
const tableHeadMaxPages = document.createElement("th");
const tableHeadOnPage = document.createElement("th");
const tableHeadOnProgress = document.createElement("th");

const tableBody = document.createElement("tbody");

table.classList.add("table", "text-center", "mt-5");
table.setAttribute("style", "cursor:pointer");

tableHeadTitle.textContent = "Title";
tableHeadAuthor.textContent = "Author";
tableHeadMaxPages.textContent = "Max Pages";
tableHeadOnPage.textContent = "On Page";
tableHeadOnProgress.textContent = "Progress";
tableHeadRow.append(
  tableHeadTitle,
  tableHeadAuthor,
  tableHeadMaxPages,
  tableHeadOnPage,
  tableHeadOnProgress
);
table.append(tableHead);

const populatingTable = (theObj, index) => {
  const elementTableRow = document.createElement("tr");
  const theDataTitle = document.createElement("td");
  const theDataAuthor = document.createElement("td");
  const theDataMaxPages = document.createElement("td");
  const theDataOnPage = document.createElement("td");
  const theDataProgress = document.createElement("td");
  const theDataProgressDiv = document.createElement("span");
  const theDataProgressDivInner = document.createElement("span");
  const elementTableRowDeleteIcon = document.createElement("span");

  elementTableRowDeleteIcon.classList.add("material-symbols-outlined");
  elementTableRowDeleteIcon.setAttribute("style", "color:red; display:none;");
  theDataProgressDiv.classList.add("progress");

  elementTableRow.addEventListener("click", (e) => {
    const theFirstList = theUl.querySelectorAll("li");
    const theSecondlist = secondUl.querySelectorAll("li");
    let theIndex = e.currentTarget.rowIndex - 1;

    books.splice(index, 1);
    theUl.removeChild(theFirstList[theIndex]);
    secondUl.removeChild(theSecondlist[theIndex]);

    tableBody.removeChild(elementTableRow);
    if (!tableBody.hasChildNodes()) {
      table.style.display = "none";
    }
  });

  elementTableRow.addEventListener("mouseenter", (e) => {
    elementTableRowDeleteIcon.style.display = "block";
    elementTableRow.style.textDecoration = "line-through";
  });

  elementTableRow.addEventListener("mouseleave", (e) => {
    elementTableRowDeleteIcon.style.display = "none";
    elementTableRow.style.textDecoration = "none";
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
  elementTableRow.append(
    theDataTitle,
    theDataAuthor,
    theDataMaxPages,
    theDataOnPage,
    theDataProgress,
    elementTableRowDeleteIcon
  );
  tableBody.append(elementTableRow);
};
table.append(tableBody);
tableHead.append(tableHeadRow);

document.body.append(table);

books.forEach((el, index) => {
  populatingTable(el, index);
});

const labelForBook = document.createElement("h2");
labelForBook.setAttribute("style", "text-align:center; margin-top: 5rem");
labelForBook.textContent = "Add a book to the list";
document.body.append(labelForBook);

const form = document.createElement("form");
const formRow = document.createElement("div");
formRow.classList.add("form-row", "justify-content-center");

const colTitle = document.createElement("div");
const colAuthor = document.createElement("div");
const colOnPage = document.createElement("div");
const colMaxPages = document.createElement("div");

colTitle.classList.add("col");
colAuthor.classList.add("col");
colOnPage.classList.add("col");
colMaxPages.classList.add("col");

const formInputTitle = document.createElement("input");
const formInputAuthor = document.createElement("input");
const formInputOnPage = document.createElement("input");
const formInputMaxPages = document.createElement("input");
const formSubmitBtn = document.createElement("button");

formInputTitle.classList.add("form-control");
formInputTitle.setAttribute("placeholder", "Book Title");

formInputAuthor.classList.add("form-control");
formInputAuthor.setAttribute("placeholder", "Book Author");

formInputOnPage.classList.add("form-control");
formInputOnPage.setAttribute("placeholder", "Current Page On:");
formInputOnPage.setAttribute("type", "number");

formInputMaxPages.classList.add("form-control");
formInputMaxPages.setAttribute("placeholder", "Book Max Pages");
formInputMaxPages.setAttribute("type", "number");

formSubmitBtn.classList.add("btn", "btn-success");
formSubmitBtn.setAttribute("type", "submit");
formSubmitBtn.textContent = "Add to List";

colTitle.appendChild(formInputTitle);
colAuthor.appendChild(formInputAuthor);
colOnPage.appendChild(formInputOnPage);
colMaxPages.appendChild(formInputMaxPages);

formRow.append(colTitle, colAuthor, colOnPage, colMaxPages, formSubmitBtn);
form.append(formRow);
document.body.append(form);

formSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

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
    alert("You need to fill the whole form!!!");
  } else {
    books.push(theBook);
    populatingTable(theBook);
    creatingList(theBook);
  }

  if (tableBody.hasChildNodes()) {
    table.style.display = "table";
  }
});
