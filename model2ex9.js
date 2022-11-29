//Exercise 9

const numbers = [1, 4, 5, 12, 15, 16, 20]

function even(numbers){
    const evenNumbers = []
    for (let number in numbers){
        if (number % 2 == 0){
            evenNumbers.push(number)
        }
    }
    return evenNumbers;
}

console.log("Original numbers: " + numbers);
console.log("New numbers: " + even(numbers));