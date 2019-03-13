export function dayReturn(day, month, year) {
  const tester = isValidDate(day, month, year);
  if (tester === true) {
    const time = month + " " + day + " " + year;
    let weekDay="";
    const spot = new Date(time)
    switch (spot.getDay()) {
      case 0:
      weekDay = "Sunday";
      break;
      case 1:
      weekDay = "Monday";
      break;
      case 2:
      weekDay = "Tuesday";
      break;
      case 3:
      weekDay = "Wednesday";
      break;
      case 4:
      weekDay = "Thursday";
      break;
      case 5:
      weekDay = "Friday";
      break;
      case 6:
      weekDay = "Saturday";
    }
    return weekDay;
  } else {
    return false;
  }
}

export function haikuPusher(weekName){
  if (weekName === "Sunday" || weekName === "Monday" || weekName === "Tuesday" || weekName === "Wednesday" || weekName === "Thursday" || weekName === "Friday") {

    return " molasses. My flat stone, skipping along. Avoid still water.";

  } else {
    return " thick in the jungle. My code has grown far too dense. Testing is awful.";
  }
}

function isValidDate(d, m, y) {
    m = parseInt(m, 10) - 1;
    return m >= 0 && m < 12 && d > 0 && d <= checkDay(m, y);
}

function checkDay(m, y) {
  switch (m) {
    case 1 :
        return (y % 4 == 0 && y % 100) || y % 400 == 0 ? 29 : 28;
    case 8 : case 3 : case 5 : case 10 :
        return 30;
    default :
        return 31
    }
}
