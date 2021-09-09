// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const bici = [
    {
       "nome": "Shimano",
       "peso": 10 
    },
    {
        "nome": "Wolf",
        "peso": 15
    },
    {
        "nome": "Tunder",
        "peso": 12
    }
];

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++) {
        if (bici[i].peso < biciLeggera.peso) {
            biciLeggera = bici[i];
        }
    }

const {nome, peso} = biciLeggera;

console.log(`La bici da corsa più leggera è la ${nome} col peso di ${peso} chili.`);