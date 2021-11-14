// learn how to use JavaScript For loop

// 1
// for(var i = 0; i <= 5; i++) {
//     console.log(i);
// }

// var cars = [
//     "BMW",
//     "Ford",
//     "Honda",
//     "Audi"
// ];

// for (var i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

//----------------------------------------------
// 2
// For in loop

// var person = {
//     fname: "Suphanut",
//     lname: "Taengtoemphon",
//     age: 23
// };

// for (var x in person) {
//     console.log(person[x]);
// }

//-----------------------------------------------
// 3
// For of Loop

var cars = [
    "BMW",
    "Ford",
    "Honda",
];

for (var x of cars) {
    console.log(x);
}

var myString = "JavaScript";

var y;

for (y of myString) {
    console.log(y);
}