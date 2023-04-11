/*
  The rules for fizzBuzzBooz
  if the number is divisible by three with no remainder print out fizz
  if the number is divisible by five with no remainder print out buzz
  if the number is divisible by five and three with no remainder print out booz
*/

//This is a function, will explain more in another class
const fizzBuzzBooz = () => {
  const hundred = 100;
  // This is a for loop, we will go into more detail Thursday night
  for (let i = 1; i <= hundred; i++) {
    // This is a personal preference. This will make more sense when he get to arrays
    const index = i;
    if (index % 5 === 0 && index % 3 === 0) {
      console.log(
        `${index} is divisible by five and three with no remainder so booz`
      );
    } else if (index % 3 === 0 || index % 5 === 0) {
      if (index % 3 === 0) {
        console.log(`${index} is divisible by three with no remainder so fizz`);
      } else {
        console.log(`${index} is divisible by five with no remainder so buzz`);
      }
    }
  }
};

//This is a function header it call a function
fizzBuzzBooz();

const animalSounds = (animal) => {
  switch (animal) {
    case "cow":
      console.log("moo");
      break;
    case "sheep":
      console.log("baa");
      break;
    default:
      console.log("the animal sound has not been added yet");
  }
};

let animal = "cow";
// This is a function header and this time we are passing in a parameter
animalSounds(animal);
animal = "sheep";
animalSounds(animal);
animal = "dog";
animalSounds(animal);

let bool = true;
if (bool) {
  console.log("This is true");
}
bool = false;
// ! in front of a boolean means you are looking for the opposite
if (!bool) {
  console.log("This is false");
}

//Some traps to lookout for
const number = 0;
// This is looking for a false value not zero
if (number) {
  console.log("This is a trap don't do this");
}

if (number === 0) {
  console.log("This is one way to check for zero");
}

const vanilla = true;
const chocolate  = vanilla ? false: true;
console.log(`Is this chocolate ${chocolate}`)