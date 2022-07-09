let enteredName = prompt("Please enter a name");
const errorLessName = enteredName?.toLowerCase() || "";

if (enteredName === null) {
  alert("You didn't enter a Name");
} else if (enteredName === "") {
  let printedInstruction = document.createElement("h1");
  printedInstruction.innerText = "Please enter a Name";
  document.body.appendChild(printedInstruction);
}
const arr = [
  ["Antonio", true, 5],
  ["Marija", false],
  ["Darko", true, 3],
  ["Vangel", true, 4],
  ["Petar", false],
  ["Olgica", true, 1],
];

function voteDetails(inputedName) {
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");
  let tableRow = document.createElement("tr");
  tableBody.style.borderWidth = "2px";
  tableBody.style.borderColor = "#000";
  tableBody.style.borderStyle = "solid";

  for (let i = 0; i < arr.length; i++) {
    let lowerCaseName = arr[i][0].toLowerCase();
    let innerArrayLength = arr[i].length;

    for (let j = 0; j < innerArrayLength; j++) {
      if (inputedName === lowerCaseName && arr[i][j] === false) {
        let tableCellOne = document.createElement("td");
        tableCellOne.innerText = arr[i][0];

        tableCellOne.setAttribute(
          "style",
          "padding: 30px; border-width:2px; border-color: #000; border-style: solid"
        );

        let tableCellTwo = document.createElement("td");
        tableCellTwo.setAttribute(
          "style",
          "padding: 30px; border-width:2px; border-color: #000; border-style: solid"
        );

        tableCellTwo.innerText = "Didn't vote";

        tableRow.append(tableCellOne, tableCellTwo);
      } else if (inputedName === lowerCaseName && arr[i][j] === true) {
        let tableCellThree = document.createElement("td");
        tableCellThree.setAttribute(
          "style",
          "padding: 30px; border-width:2px; border-color: #000; border-style: solid"
        );
        tableCellThree.innerText = arr[i][0];

        let tableCellFour = document.createElement("td");
        tableCellFour.setAttribute(
          "style",
          "padding: 30px; border-width:2px; border-color: #000; border-style: solid"
        );
        tableCellFour.innerText = "Voted!";

        let tabcleCellFive = document.createElement("td");
        tabcleCellFive.setAttribute(
          "style",
          "padding: 30px; border-width:2px; border-color: #000; border-style: solid"
        );
        tabcleCellFive.innerText = arr[i][2];

        tableRow.append(tableCellThree, tableCellFour, tabcleCellFive);

      }
    }
  }

  tableBody.appendChild(tableRow);
  table.appendChild(tableBody);
  document.body.appendChild(table);
}
voteDetails(errorLessName);

function noNameEntered() {
  let onlyNamesArr = [];
  let newestArr = [];

  for (let i = 0; i < arr.length; i++) {
    onlyNamesArr = arr[i][0];
    newestArr.push(onlyNamesArr);
  }
  return newestArr;
}
let nameNotEntered = noNameEntered(errorLessName);
let nameLowerCase = nameNotEntered.map((test) => test.toLowerCase());

function wrongNameEntered(nameLowerCase, errorLessName) {
  let wrongName = nameLowerCase.includes(errorLessName);
  if (!wrongName) {
    let errorMsg = document.createElement("h1");
    errorMsg.innerText = "You entered a wrong name";
    document.body.appendChild(errorMsg);
  }
}
wrongNameEntered(nameLowerCase, errorLessName);
