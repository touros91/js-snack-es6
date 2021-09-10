// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function arraySelection(array, num1, num2){
    while (isNaN(num1) || num1 >= num2 || num1 < 0 || num1 >= array.length - 1 || isNaN(num2) || num2 > array.length - 1) {
        return false;
    }
    const newArray = array.filter((element, index) => index >= num1 && index <= num2);
    return newArray;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numStart = 3;
let numEnd = 6;

console.log(arraySelection(arr, numStart, numEnd));