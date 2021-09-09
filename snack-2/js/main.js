// Snack2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const squadreSerieA = [
    {
        "nome": "Inter",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Milan",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Juventus",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Atalanta",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Napoli",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Roma",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Lazio",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Sampdoria",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Udinese",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Sassuolo",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Cagliari",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Fiorentina",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Torino",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Genoa",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Bologna",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Verona",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Empoli",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Venezia",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Spezia",
        "puntiFatti": 0,
        "falliSubiti": 0
    },
    {
        "nome": "Salernitana",
        "puntiFatti": 0,
        "falliSubiti": 0
    }
];

const numeroRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

for (let i = 0; i < squadreSerieA.length; i++) {
    squadreSerieA[i].puntiFatti = numeroRandom(0, 100);
    squadreSerieA[i].falliSubiti = numeroRandom(0, 500);
}

console.log(squadreSerieA);

const [inter, milan, juventus, atalanta, napoli, roma, lazio, sampdoria, udinese, sassuolo, cagliari, fiorentina, torino, genoa, bologna, verona, empoli, venezia, spezia, salernitana] = squadreSerieA;

const squadre = [inter, milan, juventus, atalanta, napoli, roma, lazio, sampdoria, udinese, sassuolo, cagliari, fiorentina, torino, genoa, bologna, verona, empoli, venezia, spezia, salernitana];

const statisticheSquadre = [];

for (let i = 0; i < squadre.length; i++) {
    statisticheSquadre.push(
        {
        "nome": squadre[i].nome,
        "falliSubiti": squadre[i].falliSubiti
        }
    );
}

console.log(statisticheSquadre);