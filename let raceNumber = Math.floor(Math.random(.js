let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 24;

if (runnersAge > 18 && registeredEarly) {
    raceNumber += 1000
}

if (runnersAge > 18 && registeredEarly) {
    console.log(`${raceNumber} will race at 9:30 am.`);
} else if (runnersAge > 18 && !registeredEarly) {
    console.log(`${raceNumber} will race at 11:00 am.`);
}  else if (runnersAge < 18) {
    console.log(`${raceNumber} will race at 12:30 am.`);
}  else {
    console.log(`${raceNumber} meet at the registration desk.`);
}