//ex.6
const confirmation = confirm("Should I calculate the square root?");
if (confirmation == true) {
  num = parseInt(prompt("Enter number you want to calculate"));
  if (num < 0) {
    document.write("The square root of a negative number is not defined");
  } else {
    square = Math.sqrt(num)
    document.write("The square root of the given number is " + square);
  }
}else {
  document.write("The square root is not calculated.")
  }