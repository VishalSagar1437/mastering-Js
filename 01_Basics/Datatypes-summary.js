// Primitive
// 7 types:
// String, Number, Boolean, null, undefined, Symbol,BigInt


//Reference tpe or Non primitive
//Arrays, Objects, functions


const  id = Symbol('232')

const score = Symbol('232');
// Symbol treats it as different values even when there are same values in them
// console.log(id === score);

const bikes = ["Pulsar", "discover", "Bajaj"];

 let myObj = {
    name : "Vishal",
    age:22,
 }

 const myfunc = function(){
    console.log("Radhe Radhe");

 }
//  myfunc();
console.log(typeof myObj);

//Array => type is Object
//functions => type is function(Object Function)
//null => type is Object