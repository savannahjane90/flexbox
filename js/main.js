//datemethod

/*let today = new Date();
console.log(today);

let currentDay = new Date();
console.log(currentDay.getFullYear());

let stringDate = new Date("Aug 29 2019 08:34:00");
console.log(stringDate);

let dateString = new Date(2021, 10, 21);
console.log(
    today.getMonth()
);

let thisMonth = new Date();
console.log(thisMonth.setMonth(0));

let thatMonth = new Date();
console.log(thatMonth.setMonth(5));

let ohMonth = new Date();
console.log(ohMonth.getMonth());

console.log(
    ohMonth.toLocaleString('default',{
        month: 'long',
        weekday: 'short'
    })
);*/

//tasks

/*let date = new Date();
console.log(date);

let hour = date.getHours();
let minute = date.getMinutes();
console.log(`${hour}:${minute}`);

console.log(date.toLocaleString('default', {weekday: 'long'}));
*/


//switch statements
/*let favfood = "green olives";

switch(favfood){
    case "pizza":
        console.log(`Yep, ${favfood} is my fav`);
        break;
    case "gross":
        console.log(`Yep, ${favfood} is my fav`);
        break;
    case "you":
        console.log(`Yep, ${favfood} is my fav`);
        break;
    case "ope":
        console.log(`Yep, ${favfood} is my fav`);
        break;
    default:
        console.log('don\'t see my favorite food. I\'m hungry');

}*/


//ternary operators

/*
let message = 1 > 10 ? 'Condition is TRUE' : 'Condition is FALSE';
console.log(message);


let time = '12:00';
let greeting = time >= '12:00' ? 'good evening' : 'good morning';
console.log(greeting);
*/


//loops

/*
let display = document.querySelector("#display").innerHTML;

display = 0;
*/

/*const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

for(color = 0; color < colors.length; color++) {
    console.log(`${colors[color]} is my fav`);
}*/


/*
let x = 0;
while(x <= 100) {
    console.log(`The speed of the car is ${x}MPH`);
    x += 10;
}
*/
//do while loop
/*let a = 1;
let b = 10;
do {
    console.log(a);
    a++;
} while (a <= b);*/

//for in loop
/*const house = {
    type: 'Detatched',
    build: 'brick',
    year: 2019,
    price: 250000,
    driveway: true,
}

for(x in house) {
    console.log(`${x}: ${house[x]}`);
}

const salaries = {
    Peter: 24000,
    James: 34000,
    John: 55000,
}

for (i in salaries) {
    let salary = `$${salaries[i]}`;
    console.log(`${i} earns ${salary} per year`);
}*/

//for of
/*const list = ['red', 'orange', 'yellow', 'green', 'blue'];

for (color of list) {
    if (color === 'green') {
        break;
    } else {
        console.log(color);
    }
}*/

/*let supers = ['Superman', 'Batman', 'Flash', 'Aquaman', 'Thor', 'Spider-Man', 'Wolverine', 'Cyclops', 'Professor X'];
function uk(value, index, array) {
    console.log(value.toUpperCase());
}

supers.forEach(uk);


function upCase(value) {
    return value.toUpperCase();
}

console.log(supers.map(upCase));


let numbers = [1, 2, 3];

function double(valueX) {
    return valueX * 2;
}

console.log(numbers.map(double));

numbers.forEach(
    function (value) {
        console.log(value *2);
    }
)

console.log(numbers.filter(function (value) {
    return value % 2 === 0;}));





let sum = numbers.reduce(function (x, y) {
    return x + y;
});
console.log(sum);


console.log(numbers.some (
    function (me) {
        return me > 3;
    }
));



console.log(numbers.every(
    function (vlu) {
        return vlu < 5;
    }
));

console.log(supers.findIndex(
    function (vlu) {
        return vlu === 'Thor'
    }
));*/

/*
const fruits = ['apple', 'orange', 'banana'];

fruits.forEach(function(fru, no) {
    alert(fru + " - " + no)
});


function fru(yo) {
    return yo.toUpperCase();
}

console.log(fruits.map(fru));


let be = fruits.map(fru);

console.log(be);


function fro(letters) {
    return letters.length > 3;
};

let words = fruits.every(fro);
console.log(words);*/

/*
let game = {
    name: 'Songic',
    platform: 'SEGA',
    year: 1991,
}

let gameMap = new Map();

gameMap.set('Name', 'Sonic the Hedgehog').set(3, 'The number three').set(true, 'boolean');

for(let [me, you] of gameMap.entries()) {
    console.log(`${me} has the value of ${you}`);
}


const mappy = new Map();
mappy.set('Ryu', 'Japan').set('Ken', 'USA').set('Guile', 'USA').set('Blanka', 'Brazil');

for (let [character, country] of mappy.entries()) {
    console.log(`${character} is from ${country}`);
}

for(x of mappy) {
    console.log(x);
}
*/




const turnOn = document.querySelector("#on");

turnOn.addEventListener("click", function () {
    document.querySelector("#display").innerHTML = 0;
    });

const turnOff = document.querySelector("#off");

turnOff.addEventListener("click", function () {
    document.querySelector("#display").innerHTML = null;
    });


