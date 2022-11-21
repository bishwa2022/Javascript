//ex.7
function rollDice(dice) {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  let total = 0;
  for(let i = 0; i < dice; i++) {
    total += diceRoll;
  }
  return total;
}

dice = parseInt(prompt("Enter number of dice you want to roll: "));
output = rollDice(dice);
document.write(" The result is " + output);