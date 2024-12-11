const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const WORKING_DAYS = 20;
function getWorkHours(workType) {
    switch (workType) {
        case 0:
            return 0;
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
function calculateMonthlyWages() {
    let totalWages = 0;
    let totalHours = 0;

    for (let day = 1; day <= WORKING_DAYS; day++) {
        const workType = Math.floor(Math.random() * 3);
        const dailyHours = getWorkHours(workType);
        const dailyWage = dailyHours * WAGE_PER_HOUR;

        totalHours += dailyHours;
        totalWages += dailyWage;

        console.log(`Day ${day}: Worked ${dailyHours} hours, Earned $${dailyWage}`);
    }

    console.log(`\nTotal Hours Worked in the Month: ${totalHours}`);
    console.log(`Total Wages for the Month: $${totalWages}`);
}
calculateMonthlyWages();