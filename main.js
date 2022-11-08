const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
let arrayNew; //creaiamo nuovo array che conterra i numeri compresi tra 2 e 4
myArray.forEach((index) => { //con for each vai nel myarray e PER OGNI index => mettimi nel arrey New i valori di myArray.slice gli index tra 2 e 4
arrayNew = myArray.slice(2,4);
});

console.log(arrayNew); //stampa

const myArray2 = myArray.filter((element, index) => {
    if (index > 2 && index < 4) {
        return true;
    }
    else { return false; }
});
console.log(myArray2); //stampa

//ESESRCIZIO 2

let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
    ];

const targhe = students.map((element) => { //vai nella variabile students e con la funzione map prendimi element 
    return element.name.toUpperCase() //con uppercase tutte lettere maiuscolo dei nomi nell'elelement
});
console.log(targhe);


// 2- Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70


const studentiMigliori = students.filter((element) => {

    if (element.grades >= 70) {
        return true;
    }
})

console.log(studentiMigliori);

const studentiId = students.filter((element) => {

    if (element.grades >= 70 && element.id >= 120) {
        return true;
    }
})

console.log(studentiId);




//Snack 3 array di oggetti
const bycicle = [{
    name: 'bmx',
    weight: 20
},
{
    name: 'mountain-bike',
    weight: 15
},
{
    name: 'competition-bike',
    weight: 13
    }
];

//versione breve
var min = Math.min(...bycicle.map(item => item.weight));
console.log(min);

//versione lunga
var min = Math.min(...bycicle.map((item) => {
    return item.weight
}));
console.log(min);


//Snack 4
const team = [{
    name: 'Napoli',
    points: 0,
    fouls: 0
},
{
    name: 'Inter',
    points: 0,
    fouls: 0
},
{
    name: 'Chealse',
    points: 0,
    fouls: 0
},
{
    name: 'Barcelona',
    points: 0,
    fouls: 0
},
];
//generare numeri random nelle proprieta points e fouls

function randomNum(min,max) { {
    return Math.floor(Math.random() * (max - min) + min);
}
}
console.log(randomNum(10,100));


//Ficcare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.

team.forEach((element, index) => {
    return element.points = randomNum(10,100), element.fouls = randomNum(10,100);      //ritornami nel fouls e points del dato element il random num 
});
    console.log(team);


//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

team.forEach(({points, fouls}, index) => {
    console.log(points, fouls)
});
