// Ex: 5
const year = parseInt(prompt("Enter Year: "));
if (year % 4 == 0) {
  document.write("The Year " + year + " is leap Year.");
}
else if (year % 100 == 0 && year % 400 == 0) {
  document.write("The year " + year + " is leap year.");
}
else {
  document.write("The year " + year + " is not a leap Year.");
}