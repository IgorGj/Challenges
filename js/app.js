const calculateBtn = document.querySelector("#budget-submit");
const budgetInput = document.querySelector("#budget-input");
const budgetAmount = document.querySelector("#budget-amount");
const balanceAmount = document.querySelector("#balance-amount");
const expenseAmount = document.querySelector("#expense-amount");
const budgetFeedback = document.querySelector(".budget-feedback");
const expenseTitleInput = document.querySelector("#expense-input");
const expenseAmountInput = document.querySelector("#amount-input");
const expenseSubmitBtn = document.querySelector("#expense-submit");

budgetFeedback.classList.add("info-title");

calculateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (budgetInput.value === "" || budgetInput.value < 0) {
    budgetFeedback.classList.add("showItem");
    // budgetFeedback.style.display = "block";
  } else {
    budgetAmount.textContent = budgetInput.value;
    balanceAmount.textContent =
      budgetInput.value - parseInt(expenseAmount.textContent);
    budgetInput.value = "";
  }
});

const table = document.createElement("table");
table.classList.add("table", "text-center");

const tableHead = document.createElement("thead");
const tableHeadRow = document.createElement("tr");
const thExpenseTitle = document.createElement("th");
const thExpenseAmount = document.createElement("th");
const tableBody = document.createElement("tbody");
tableBody.classList.add("text-danger", "font-weight-bold");

budgetInput.addEventListener("focus", (e) => {
  if (budgetFeedback.classList.contains("showItem")) {
    budgetFeedback.classList.remove("showItem");
  }
});

let firstTime = true;
let multipleTimes = false;
let editing = false;
let indexOfEdit = 0;

expenseSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const tableBodyRow = document.createElement("tr");

  const tdExpenseTitle = document.createElement("td");
  const tdExpenseAmount = document.createElement("td");
  const tdEditDelete = document.createElement("td");
  const editBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("style", "border:none");
  editBtn.setAttribute("style", "border:none");

  deleteBtn.classList.add("delete-icon");
  editBtn.classList.add("edit-icon");
  if (expenseAmountInput.value === "") {
    expenseAmount.textContent = 0;
  } else {
    if (indexOfEdit > 0 && editing) {
      const tBodyRows = document.querySelectorAll("tbody tr");
      const allTdInTheRow = tBodyRows[indexOfEdit - 1].querySelectorAll("td");
      tBodyRows[indexOfEdit - 1].style.backgroundColor = "inherit";
      expenseAmount.textContent =
        parseInt(expenseAmount.textContent) +
        parseInt(expenseAmountInput.value - allTdInTheRow[1].textContent);
      balanceAmount.textContent = parseInt(
        budgetAmount.textContent - expenseAmount.textContent
      );
      allTdInTheRow[0].textContent = `- ${expenseTitleInput.value}`;
      allTdInTheRow[1].textContent = `${expenseAmountInput.value}`;
      expenseAmountInput.value = "";
      expenseTitleInput.value = "";
      editing = false;
      return;
    } else {
      expenseAmount.textContent =
        parseInt(expenseAmount.textContent) +
        parseInt(expenseAmountInput.value);
      balanceAmount.textContent = parseInt(
        balanceAmount.textContent - expenseAmountInput.value
      );
    }

    const tableContainer = document.querySelector(".col-md-7.my-3");

    if (firstTime || multipleTimes) {
      firstTime = false;
      multipleTimes = false;
      thExpenseTitle.textContent = "Expense Title";
      thExpenseAmount.textContent = "Expense Value";
      tableHeadRow.append(thExpenseTitle, thExpenseAmount);
      tableHead.appendChild(tableHeadRow);
      table.append(tableHead);
      table.append(tableBody);
      tableContainer.append(table);
    }

    const deletingAndEditing = (theEvent) => {
      theEvent.currentTarget.parentElement.parentElement.remove();
      expenseAmount.textContent =
        parseInt(expenseAmount.textContent) -
        parseInt(tdExpenseAmount.textContent);

      balanceAmount.textContent =
        parseInt(balanceAmount.textContent) +
        parseInt(tdExpenseAmount.textContent);
    };

    deleteBtn.addEventListener("click", (e) => {
      deletingAndEditing(e);
      const tBody = document.querySelector("tbody");
      if (tBody.hasChildNodes() === false) {
        const tHead = document.querySelector("thead");
        tHead.remove();
        multipleTimes = true;
      }
    });

    editBtn.addEventListener("click", (e) => {
      let title = tdExpenseTitle.textContent.toString().replace("-", "").trim();

      indexOfEdit = e.currentTarget.parentElement.parentElement.rowIndex;
      e.currentTarget.parentElement.parentElement.style.backgroundColor =
        "#87c1ff";
      expenseTitleInput.value = title;
      expenseAmountInput.value = tdExpenseAmount.textContent;
      editing = true;
    });

    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square w-100"></i>`;
    // editBtn.classList.add("text-primary");
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash "></i>`;
    // deleteBtn.classList.add("text-danger");
    tdExpenseTitle.textContent = "-" + " " + expenseTitleInput.value;
    tdExpenseAmount.textContent = expenseAmountInput.value;
    tdEditDelete.append(editBtn, deleteBtn);
    tableBodyRow.append(tdExpenseTitle, tdExpenseAmount, tdEditDelete);
    tableBody.append(tableBodyRow);

    expenseTitleInput.value = "";
    expenseAmountInput.value = "";
  }
});
