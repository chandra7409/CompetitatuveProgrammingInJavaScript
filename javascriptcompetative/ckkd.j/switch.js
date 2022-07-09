let weekDayNum = 2;
let weekDay;

switch (weekDayNum > 0) {
    case (weekDayNum == 1):
        weekDay = "Monday";
        break;

    case (weekDayNum == 2):
        weekDay = "Tuesday";

    case (weekDayNum == 3):
        weekDay = "Wednesday";

    case (weekDayNum == 4):
        weekDay = "Thursday";

    case (weekDayNum == 5):
        weekDay = "Friday";

    case (weekDayNum == 6):
        weekDay = "Saturday";

    case (weekDayNum == 7):
        weekDay = "Sunday";
    default:
        weekDay = "any day";
}

console.log(weekDay);