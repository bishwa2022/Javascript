//Exercise 8

let name = ["Johnny", "DeeDee", "Joey", "Marky"];
let newWords = "";

function concat(array){
    for (let name of array){
        newWords = newWords + name;
    }
    return newWords
}
document.write(concat(name));