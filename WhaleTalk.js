let input = "turpentine and turtles";
const vowels = ["a", "e", "i", "o", "u"];
const resultArray = [];

for (let index = 0; index < input.length; index++) {
  // console.log(`${input} is ` + index);
  for (let j = 0; j < vowels.length; j++) {
    // console.log([j])
    if (input[index] === vowels[j]) {
      if (input[index] === "e") {
        resultArray.push("ee");
      } else if (input[index] === "u") {
        resultArray.push("uu");
      } else {
        resultArray.push(input[index]);
      }
    }
  }
}

console.log(resultArray.join("").toUpperCase());
