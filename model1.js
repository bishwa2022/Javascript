//Ex.4

let name = prompt("Welcome to Hogwarts School of Witchcraft. " +
    "Give me your name and I will assign you in one of our 4 class.");

room = Math.floor((Math.random() * 4) + 1);

if (room === 1) {
  document.write("Congratulations " + name + "! " + " Your class is Gryffindor.");
}
else if (room === 2) {
  document.write("Congratulations " + name + "! " + " Your class is Slytherin.");
}

else if (room === 3) {
  document.write("Congratulations " + name + "! " + " Your class is Hufflepuff.");
}

else {
  document.write("Congratulations " + name + "! " + " Your class is Ravenclaw.");
}