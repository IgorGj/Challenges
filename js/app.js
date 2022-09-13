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
table.classList.add("table");

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
expenseSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (expenseAmountInput.value === "") {
    expenseAmount.textContent = 0;
  } else {
    expenseAmount.textContent =
      parseInt(expenseAmount.textContent) + parseInt(expenseAmountInput.value);
    balanceAmount.textContent = parseInt(
      balanceAmount.textContent - expenseAmountInput.value
    );
    const tableContainer = document.querySelector(".col-md-7.my-3");

    if (firstTime) {
      firstTime = false;

      thExpenseTitle.textContent = "Expense Title";
      thExpenseAmount.textContent = "Expense Value";
      tableHeadRow.append(thExpenseTitle, thExpenseAmount);
      tableHead.appendChild(tableHeadRow);
      table.append(tableHead);
      table.append(tableBody);
      tableContainer.append(table);
    }

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
    });

    editBtn.addEventListener("click", (e) => {
      let title = tdExpenseTitle.textContent.toString().replace("-", "").trim();
      expenseTitleInput.value = title;
      expenseAmountInput.value = tdExpenseAmount.textContent;
      deletingAndEditing(e);
    });

    editBtn.innerHTML = `<i class="fa-solid fa-pen-to-square "></i>`;
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
