const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
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
function calculateConditionalWages() {
    let totalHours = 0;
    let totalWages = 0;
    let totalDays = 0;

    while (totalHours < MAX_WORKING_HOURS && totalDays < MAX_WORKING_DAYS) {
        const workType = Math.floor(Math.random() * 3);
        const dailyHours = getWorkHours(workType);

        if (totalHours + dailyHours > MAX_WORKING_HOURS) break;

        const dailyWage = dailyHours * WAGE_PER_HOUR;

        totalHours += dailyHours;
        totalWages += dailyWage;
        totalDays++;

        console.log(`Day ${totalDays}: Worked ${dailyHours} hours, Earned $${dailyWage}`);
    }

    console.log(`Total Days Worked: ${totalDays}`);
    console.log(`Total Hours Worked: ${totalHours}`);
    console.log(`Total Wages Earned: $${totalWages}`);
}
calculateConditionalWages();