// first exercise
let number = +prompt("enter a number");

if (number % 2 === 0) {
  console.log(`number ${number} is even`);
} else {
  console.log(`number ${number} is odd`);
}
// end of first exercise

// second exercise

for (let i = 10; i <= 100; i++) {
  if (i % 6 === 0) {
    console.log(i);
  }
}

// end of second exercise

// third exercise
// let numberOne = +prompt("enter a number");
// let numberTwo = +prompt("enter a number");
// let numberThree = +prompt("enter a number");
// let arr = [numberOne, numberTwo, numberThree];
// AKO TREBA DA ODI PREKU PROMPT BIDEJKI NE E KAZANO VO ZADACATA GO KOMENTIRAV

let arr = [15, 13, 20];
function findSmallestNumber(arr) {
  let howLarge = arr[0];
  let bigOrSmall = "smallest";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < howLarge) {
      howLarge = arr[i];
    }
  }
  primeOrNot(howLarge, bigOrSmall);
}
function findLargerstNumber(arr) {
  let howLarge = 0;
  let bigOrSmall = "biggest";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > howLarge) {
      howLarge = arr[i];
    }
  }
  primeOrNot(howLarge, bigOrSmall);
}
function primeOrNot(howLarge, bigOrSmall) {
  let isPrime = true;
  if (howLarge === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (howLarge > 1) {
    // looping through 2 to number-1
    for (let i = 2; i < howLarge; i++) {
      if (howLarge % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(
        `the ${bigOrSmall} number is ${howLarge} and is a prime number`
      );
    } else {
      console.log(
        `the ${bigOrSmall} number is ${howLarge} and is not a prime number`
      );
    }
  }
}

findLargerstNumber(arr);
findSmallestNumber(arr);

// end of third exercise
