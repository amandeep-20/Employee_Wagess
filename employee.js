const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let workType = Math.floor(Math.random() * 3);
let dailyHours;

switch (workType) {
    case 0:
        dailyHours = 0;
        console.log("not work today.");
        break;
    case 1:
        dailyHours = PART_TIME_HOURS;
        console.log("part-time today.");
        break;
    case 2:
        dailyHours = FULL_TIME_HOURS;
        console.log("full-time today.");
        break;
    default:
        console.log("Invalid work type.");
        dailyHours = 0;
}

const dailyWage = dailyHours * WAGE_PER_HOUR;
console.log(`Daily Hours: ${dailyHours}`);
console.log(`Daily Wage: $${dailyWage}`);