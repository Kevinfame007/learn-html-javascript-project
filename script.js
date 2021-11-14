// learn JavaScript Scope

//  local scope------------
function myFunc() {
    var myName = "Suphanut";
    console.log(myName);
}

myFunc();
//-------------------------

//  Global Scope-----------
var myCar = "BMW";

console.log(myCar);
//-------------------------

//  Auto Global Scope------
function myFunc2() {
    fName = "Fame";
}

myFunc2();

console.log(fName);
//--------------------------