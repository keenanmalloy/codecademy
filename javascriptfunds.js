const greetWorld = () => {
  return "Hello, World!";
};

function canIVote(num) {
  if (num >= 18) {
    return true;
  } else {
    return false;
  }
}

const agreeOrDisagree = (string1, string2) => {
  if (string1 === string2) {
    return "You agree!";
  } else {
    return "You disagree!";
  }
};

const lifePhase = (age) => {
  if (age >= 0 && age <= 3) {
    return "baby";
  } else if (age >= 4 && age <= 12) {
    return "child";
  } else if (age >= 13 && age <= 19) {
    return "teen";
  } else if (age >= 20 && age <= 64) {
    return "adult";
  } else if (age >= 64 && age <= 140) {
    return "senior citizen";
  } else if (age < 0 || age > 140) {
    return "This is not a valid age";
  }
};

const finalGrade = (grade1, grade2, grade3) => {
  const average = (grade1 + grade2 + grade3) / 3;
  if (average >= 0 && average <= 59) {
    return "F";
  } else if (average >= 60 && average <= 69) {
    return "D";
  } else if (average >= 70 && average <= 79) {
    return "C";
  } else if (average >= 80 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 100) {
    return "A";
  } else {
    return "You have entered an invalid grade.";
  }
};

const reportingForDuty = (rank, lastName) => {
  return rank + " " + lastName + " " + "reporting for duty!";
};

reportingForDuty(Private, Fido);

const rollTheDice = () => {
  let die1 = Math.floor(Math.random() * 6 + 1);
  let die2 = Math.floor(Math.random() * 6 + 1);
  return die1 + die2;
};

const calculateWeight = (earthWeight, planet) => {
  switch (key) {
    case value:
      break;

    default:
      break;
  }
};

// const calculateWeight = (earthWeight, planet) => {
//   if (typeof earthWeight !== "number") {
//     throw new Error("earthWeight is not a number");
//   }
//   if (typeof planet !== "string") {
//     throw new Error("planet is not a string");
//   }
//   planet = planet.toLowerCase();

//   if (!["mercury", "venus", "mars", "jupiter", "saturn"].includes(planet)) {
//     return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
//   } else {
//     switch (planet) {
//       case "mercury":
//         return (earthWeight * 0.378).toFixed(1);
//       case "venus":
//         return (earthWeight * 0.907).toFixed(1);
//       case "mars":
//         return (earthWeight * 0.377).toFixed(1);
//       case "jupiter":
//         return (earthWeight * 2.36).toFixed(1);
//       case "saturn":
//         return (earthWeight * 0.916).toFixed(1);
//       default:
//         return;
//         break;
//     }
//   }
// };

const calculateWeight = (earthWeight, planet) => {
  planet = planet.toLowerCase();
  switch (planet) {
    case "mercury":
      return earthWeight * 0.378;
    case "venus":
      return earthWeight * 0.907;
    case "mars":
      return earthWeight * 0.377;
    case "jupiter":
      return earthWeight * 2.36;
    case "saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};

const truthyOrFalsy = (val) => {
  return !!val;
};

const numImaginaryFriends = (num) => {
  return Math.ceil(num / 4);
};

const sillySentence = (string1, string2, string3) => {
  return `I am so ${string1} because I ${string2} coding! Time to write some more awesome ${string3}!`;
};

const howOld = (age, year) => {
  const theCurrentYear = 2022;
  const yearDifference = year - theCurrentYear;
  const newAge = age + yearDifference;
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};

const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return "You are likely identical twins.";
  }
  if (percentSharedDNA > 34 && percentSharedDNA <= 99) {
    return "You are likely parent and child or full siblings.";
  }
  if (percentSharedDNA >= 14 && percentSharedDNA <= 34) {
    return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
  }
  if (percentSharedDNA >= 6 && percentSharedDNA <= 13) {
    return "You are likely 1st cousins.";
  }
  if (percentSharedDNA >= 3 && percentSharedDNA <= 5) {
    return "You are likely 2nd cousins.";
  }
  if (percentSharedDNA >= 1 && percentSharedDNA <= 2) {
    return "You are likely 3rd cousins";
  }
  return "You are likely not related.";
};

console.log(whatRelation(34));
// Should print 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'

console.log(whatRelation(3));
// Should print 'You are likely 2nd cousins.'

const tipCalculator = (quality, total) => {
  if (quality === "bad") {
    return total * 0.05;
  } else if (quality === "ok") {
    return total * 0.15;
  } else if (quality === "good") {
    return total * 0.2;
  } else if (quality === "excellent") {
    return total * 0.3;
  } else {
    return total * 0.18;
  }
};

const toEmoticon = (string) => {
  switch (string) {
    case "shrug":
      return '|_{"}_|';
    case "smiley face":
      return ":)";
    case "frowny face":
      return ":(";
    case "winky face":
      return ";)";
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
};

const colorMessage = (favoriteColor, shirtColor) => {
  if (favoriteColor === shirtColor) {
    return "The shirt is your favorite color!";
  } else {
    return "That is a nice color.";
  }
};

const isEven = (num) => {
  if (num % 2) {
    return false;
  } else if (num % 3) {
    return true;
  }
};

const numberDigits = (x) => {
  if (x >= 0 && x <= 9) {
    return `One digit: ${x}`;
  } else if (x >= 10 && x <= 99) {
    return `Two digits: ${x}`;
  } else {
    return `The number is: ${x}`;
  }
};
