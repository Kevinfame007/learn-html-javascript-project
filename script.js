// How to use JavaScript Objects

// var myCar = {
//     brand: "Ford",
//     model: "1",
//     color: "black"
// };

// console.log(myCar["brand"]);

var person = {
    FirstName: "Suphanut",
    LastName: "Taengtoemphon",
    eyeColor: "black",
    fullName: function() {
        return this.FirstName + " " + this.LastName;
    }
};

console.log(person.fullName());