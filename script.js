// learn how to use method arrays in JavaScript

var fruits = [
    "Banana",
    "Orange",
    "Apple",
    "Mango"
];

// document.getElementById("demo").innerHTML = fruits.toString();

// document.getElementById("demo").innerHTML = fruits.join(" - ");

// fruits.pop();
// fruits.push("Kiwi");
// fruits.shift();
// fruits.unshift("Lemon");

// fruits[0] = "Kiwi";

// delete fruits[0];
// fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.splice(0, 2);

console.log(fruits);

