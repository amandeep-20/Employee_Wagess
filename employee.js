const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
function getWorkHours(workType) {
    switch (workType) {
        case 0:
            return 0;
        case 1:
            return PART_TIME_HOURS;
        case 2: 
            return FULL_TIME_HOURS;
        default:
            console.log("Invalid work type.");
            return 0;
    }
}

const workType = Math.floor(Math.random() * 3);
const dailyHours = getWorkHours(workType);
if (dailyHours === 0) {
    console.log("Employee did not work today.");
} else {
    console.log(`Employee worked ${dailyHours} hours today.`);
}