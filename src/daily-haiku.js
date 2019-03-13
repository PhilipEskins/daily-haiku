export function dayReturn(time) {
  const spot = new Date(time)
  let day="";
  // const day1 = spot.getDay();
  // return day1;

  switch (spot.getDay()) {
    case 0:
    day = "Sunday";
    break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
  }
  return day;
}
