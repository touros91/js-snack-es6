// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

function arraySelection (array, num1, num2){
    const newArray = array.filter((element, index) => index >= num1 && index <= num2);
    return newArray;
}

const arr = [1, 2, 3, 4, 5];
let numStart = 1;
let numEnd = 3;

console.log(arraySelection(arr, numStart, numEnd));