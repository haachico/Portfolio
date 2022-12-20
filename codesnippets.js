const namesOfStudents = ["Nilesh", "Sudhir", "Nishant", "Raj", "Yash"];
const newNamesOfStudents = namesOfStudents.filter((word) => word.length > 6);
console.log(newNamesOfStudents); // ---> ['Nishant]

const newNumbers = numbers.map((num) => num + 10);
console.log(newNumbers); //---> [11, 12, 13, 14, 15, 16]

//Descending Order
const numbers = [1, 2, 3, 4, 5, 6];
const descendingOrder = numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(descendingOrder); // ---> [6, 5, 4, 3, 2, 1]

//Ascending Order
const alphabets = ["c", "a", "d", "b", "f", "e"];
const ascendingOrder = alphabets.sort((a, b) => (a > b ? 1 : -1));
console.log(ascendingOrder); // ---> ['a', 'b', 'c', 'd', 'e', 'f']

const oddNumbers = [1, 3, 5, 7, 9];
const evenNumbers = [2, 4, 6, 8];
const allNumbers = oddNumbers.concat(evenNumbers);
console.log(allNumbers);
