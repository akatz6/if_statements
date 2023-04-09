// This is the function
const fizzBuzzBooz = () => {
  const hundred = 100;
  // This is a loop
  for (let i = 1; i <= hundred; i++) {
    const index = i;
    // Both statements are true
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(
        `${index} is divisible by three and five and does not have a remainder so booz `
      );
    }
    //  Either statements are true
    else if (index % 3 === 0 || index % 5 === 0) {
      if (index % 3 === 0) {
        console.log(
          `${index} is divisible by three and does not have a remainder so fizz `
        );
      } else if (index % 5 === 0) {
        console.log(
          `${index} is divisible by five and does not have a remainder so buzz`
        );
      }
    }
  }
};

// fizzBuzzBooz is an algorithm question the is given
// to junior developer during the interview process
// If a number is divisible by three and has not remainder print "fizz"
// If a number is divisible by five and has not remainder print "buzz"
// If a number is divisible by both five and three and has not remainder print "booz"
// This fizzBuzzBooz() is a function header, it calls a function
console.log(fizzBuzzBooz());

const animal = "Cow";

switch (animal) {
  case "Cow":
    console.log("Moo");
    break;
  case "Sheep":
    console.log("Baa");
    break;
  default:
    console.log("Animal has not been added yet");
}

let bool = true;
if (bool) {
  console.log("This is true");
}
bool = false;
// putting a ! before a statement is looking for the opposite
if (!bool) {
  console.log("This is not true");
}

// Never directly check is a value is zero
// It thinks you are asking if it is false
if (0) {
  console.log("This is trap, do not do this");
}

// Same thing if you are checking for an empty string
const str = "";
if (str) {
  console.log("Is this another trap, do not do this");
}
// ternary statement
// unless comparing to zero 
// you can check without comparing to true or false
const vanilla = true;
const chocolate = vanilla ? false : true;
console.log(chocolate)