const findDayOfWeek = (day, month, year) => {
  if (month < 1 || month > 12){
    return "Invalid month";
  }
  let maximumday = 31
  if (month ===4 || month === 6 || month === 9 || month === 11) {
    maximumday = 30
  }
  if (month === 2) {
    maximumday = 28
  }
  if ( day < 1 || day > maximumday) {
    return "Invalid day";
  }
  const d = new Date(year, month -1 , day).getDay();
  if (d === 0) return "Sunday";
    if (d === 1) return "Monday";
    if (d === 2) return "Tuesday";
    if (d === 3) return "Wednesday";
    if (d === 4) return "Thursday";
    if (d === 5) return "Friday";
    if (d === 6) return "Saturday";
}
console.log(findDayOfWeek(4, 8, 2023));