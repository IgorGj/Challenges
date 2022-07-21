//NAJDOLU OD FILE-OT E VERZIJATA OD PREDIZVIKOT

let para = document.getElementsByTagName("p");
const englishKeyboard = [
  "arrowDown",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "backspace",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "caps",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "enter",
  "language",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
  ",",
  ".",
  "?",
  "space",
];
const keyboardLngMKD = [
  "arrowDown",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "backspace",
  "љ",
  "њ",
  "е",
  "р",
  "т",
  "ѕ",
  "у",
  "и",
  "о",
  "п",
  "ш",
  "ѓ",
  "ж",
  "caps",
  "а",
  "с",
  "д",
  "ф",
  "г",
  "х",
  "ј",
  "к",
  "л",
  "ч",
  "ќ",
  "enter",
  "language",
  "з",
  "џ",
  "ц",
  "в",
  "б",
  "н",
  "м",
  ",",
  ".",
  "?",
  "space",
];

function creatingKeys(keyboardLng) {
  const fragment = document.createDocumentFragment();

  const creatingIconHTML = (icon_name) => {
    return `<i class="material-icons">${icon_name}</i>`;
  };

  keyboardLng.forEach((key) => {
    const buttons = document.createElement("button");
    const lineBrake = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
    const lineBrakeMKD = ["backspace", "ж", "enter", "?"].indexOf(key) !== -1;
    buttons.innerText = key;
    buttons.classList.add("keyboard-key");
    buttons.addEventListener("click", () => {
      let para = document.querySelector("p");

      if (key === "space") {
        para.innerHTML += " ";
      } else if (key === "backspace") {
        // para.innerHTML = para.innerHTML.slice(0, -1);
        para.innerHTML = para.innerHTML.substring(0, para.innerHTML.length - 1);
      } else if (key === "caps") {
        buttons.classList.toggle("keyboard-key-active");
        capsLockToggler();
      } else if (key === "language") {
        let capsLockEngIncludes = document
          .querySelector(".keyboard #capslock")
          .classList.toString();
        let capsLockMkdIncludes = document
          .querySelector(".mkd-keyboard #capslock")
          .classList.toString();;

        if (capsLockEngIncludes.includes("keyboard-key-active")) {
          capsLockMkd.classList.add("keyboard-key-active");
        } else if (capsLockMkdIncludes.includes("keyboard-key-active")) {
          capsLockEng.classList.add("keyboard-key-active");
        }

        if (
          capsLockEngIncludes.includes("keyboard-key-active") &&
          !capsLockMkdIncludes.includes("keyboard-key-active")
        ) {
          capsLockEng.classList.remove("keyboard-key-active");
        } else if (
          !capsLockEngIncludes.includes("keyboard-key-active") &&
          capsLockMkdIncludes.includes("keyboard-key-active")
        ) {
          capsLockMkd.classList.remove("keyboard-key-active");
        }
        if (
          div.style.display === "none" ||
          divSecond.style.display === "block"
        ) {
          divSecond.style.display = "none";
          div.style.display = "block";
        } else if (
          divSecond.style.display === "none" ||
          div.style.display === "block"
        ) {
          div.style.display = "none";
          divSecond.style.display = "block";
        }
      } else if (key === "enter") {
        para.innerHTML += "<br>";
      } else if (key === "arrowDown") {
        div.classList.add("keyboard-hidden");
        divSecond.classList.add("keyboard-hidden");

        let icon = document.createElement("i");
        icon.setAttribute(
          "style",
          "font-size: 4rem; color: white; cursor:pointer"
        );
        icon.classList.add("material-icons");
        icon.innerHTML = "keyboard";
        document.body.insertBefore(icon, para);
        if (icon) {
          icon.addEventListener("click", () => {
            div.classList.remove("keyboard-hidden");
            divSecond.classList.remove("keyboard-hidden");
            icon.style.display = "none";
          });
        }
      } else {
        para.innerHTML += buttons.innerHTML;
      }
    });

    if (key === "space") {
      buttons.innerHTML = creatingIconHTML("space_bar");
      buttons.classList.add("keyboard-extra-widekey");
    } else if (key === "backspace") {
      buttons.innerHTML = creatingIconHTML("backspace");
      buttons.classList.add("keyboard-widekey");
    } else if (key === "caps") {
      buttons.setAttribute("id", "capslock");
      buttons.classList.add("keyboard-widekey", "keyboard-key-activatable");
      buttons.innerHTML = creatingIconHTML("keyboard_capslock");
    } else if (key === "arrowDown") {
      buttons.innerHTML = creatingIconHTML("arrow_downward");
    } else if (key === "enter") {
      buttons.innerHTML = creatingIconHTML("keyboard_return");
      buttons.classList.add("keyboard-widekey");
    } else if (key === "language") {
      buttons.innerHTML = creatingIconHTML("language");
      buttons.classList.add("keyboard-widekey");
    }

    fragment.appendChild(buttons);

    if (lineBrake || lineBrakeMKD) {
      fragment.appendChild(document.createElement("br"));
    }
    
  });

  return fragment;
}

let div = document.createElement("div");
div.classList.add("keyboard");
div.appendChild(creatingKeys(englishKeyboard));
document.body.appendChild(div);

let divSecond = document.createElement("div");
divSecond.appendChild(creatingKeys(keyboardLngMKD));
divSecond.classList.add("mkd-keyboard");
divSecond.style.display = "none";
document.body.appendChild(divSecond);

let keysEl = document.querySelectorAll(".keyboard-key");
let capsLock = false;
const capsLockToggler = () => {
  capsLock = !capsLock;
  for (const key of keysEl) {
    if (key.childElementCount === 0) {
      key.textContent = capsLock
        ? key.textContent.toUpperCase()
        : key.textContent.toLowerCase();
    }
  }
};

let capsLockEng = document.querySelector(".keyboard #capslock");
let capsLockMkd = document.querySelector(".mkd-keyboard #capslock");

// SLEDNATA TASTATURA E NAPRAVENA SO BARANJATA OD PREDIZVIKOT

// let para = document.getElementsByTagName("p");
// const englishKeyboard = [
//   "q",
//   "w",
//   "e",
//   "r",
//   "t",
//   "y",
//   "u",
//   "i",
//   "o",
//   "p",
//   "a",
//   "s",
//   "d",
//   "f",
//   "g",
//   "h",
//   "j",
//   "k",
//   "l",
//   "z",
//   "x",
//   "c",
//   "v",
//   "b",
//   "n",
//   "m",
//   "space",
// ];

// function creatingKeys(keyboardLng) {
//   const fragment = document.createDocumentFragment();

//   const creatingIconHTML = (icon_name) => {
//     return `<i class="material-icons">${icon_name}</i>`;
//   };

//   keyboardLng.forEach((key) => {
//     const buttons = document.createElement("button");
//     const lineBrake = ["p", "l", "m"].indexOf(key) !== -1;

//     buttons.innerText = key.toUpperCase();
//     buttons.classList.add("keyboard-key");
//     buttons.addEventListener("click", () => {
//       let para = document.querySelector("p");

//       if (key === "space") {
//         para.innerHTML += " ";
//       } else {
//         para.innerHTML += buttons.innerHTML.toLowerCase();
//       }
//     });

//     if (key === "space") {
//       buttons.innerHTML = creatingIconHTML("space_bar");
//       buttons.classList.add("keyboard-extra-widekey");
//     }

//     fragment.appendChild(buttons);
//     if (lineBrake) {
//       fragment.appendChild(document.createElement("br"));
//     }
//   });

//   return fragment;
// }

// let div = document.createElement("div");
// div.classList.add("keyboard");
// div.appendChild(creatingKeys(englishKeyboard));
// document.body.appendChild(div);

// let keysEl = document.querySelectorAll(".keyboard-key");
