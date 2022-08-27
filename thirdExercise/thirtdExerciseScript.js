class EmailMsgs {
  constructor(_fromArg, _toArg, _subjectArg, _messageArg) {
    this.from = _fromArg;
    this.to = _toArg;
    this.subject = _subjectArg;
    this.message = _messageArg;
  }

  completeMsg() {
    if (
      this.from === "" ||
      this.to === "" ||
      this.subject === "" ||
      this.message === ""
    ) {
      alert("You need to fill every prompt");
      return;
    } else {
      alert(
        `This message is from ${this.from} to ${this.to}, the subject is ${this.subject} and the message is ${this.message}`
      );
    }
  }
}

const isFrom = prompt("Enter Your Name/UserName");
const sendingTo = prompt("Who are you sending this message to?");
const msgSubject = prompt("What is the subject of this message?");
const theMsg = prompt("What is the message?");

const theFirstMsg = new EmailMsgs(isFrom, sendingTo, msgSubject, theMsg);
theFirstMsg.completeMsg();
document.body.classList.add("bg-danger");
if (
  theFirstMsg.from !== "" &&
  theFirstMsg.to !== "" &&
  theFirstMsg.subject !== "" &&
  theFirstMsg.message !== ""
) {
  document.body.innerHTML += `    <form>
      <div
        class="form-group row vh-100 align-items-center justify-content-center"
      >
        <div class="col-3 bg-white text-success py-3 text-center rounded">
          <label class="font-weight-bold" for="fromMsg">From:</label>
          <input type="text" class="form-control" value="${theFirstMsg.from}" id="fromMsg" />
          <label class="font-weight-bold mt-3" for="sendingTo">To:</label>
          <input type="text" class="form-control" value="${theFirstMsg.to}"asdasd id="sendingTo" />
          <label class="font-weight-bold mt-3" for="msgSubject">Subject:</label>
          <input type="text" class="form-control" value="${theFirstMsg.subject}" id="msgSubject" />
          <label class="font-weight-bold mt-3" for="theMsg">Message:</label>
          <textarea class="form-control" id="theMsg" rows="3">${theFirstMsg.message}</textarea>
          <button type="submit" class="btn btn-success mt-3 w-100">
            Submit
          </button>
        </div>
      </div>
    </form>`;
} else {
  document.body.innerHTML += `<h1 class="text-center">You entered an incorrect form!!!</h1>`;
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-success")) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const textArea = document.querySelector("textarea");
    inputs.forEach((el) => {
      el.value = "";
    });
    textArea.innerHTML = "";
  }
});
