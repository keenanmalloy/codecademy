// const getSleepHours = (day) => {
//   switch (day) {
//     case "monday":
//       return 7;
//     case "tuesday":
//       return 8;
//     case "wednesday":
//       return 8;
//     case "thursday":
//       return 8;
//     case "friday":
//       return 7;
//     case "saturday":
//       return 8;
//     case "sunday":
//       return 8;
//     default:
//       break;
//   }
// };

const getActualSleepHours = () => 7 + 8 + 8 + 8 + 8 + 8 + 7;
//   getSleepHours("monday") +
//   getSleepHours("tuesday") +
//   getSleepHours("wednesday") +
//   getSleepHours("thursday") +
//   getSleepHours("friday") +
//   getSleepHours("saturday") +
//   getSleepHours("sunday");

console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => idealHours * 7;
//   const idealHours = 8;
//   return idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep. Great job!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You've got " +
        (idealSleepHours - actualSleepHours) +
        " more hours of sleep this week."
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You should get some rest because you've slept " +
        (idealSleepHours - actualSleepHours) +
        " hours less than needed this week."
    );
  }
};

calculateSleepDebt();
