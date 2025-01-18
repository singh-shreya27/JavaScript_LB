//Hoisting:
//It is a process which shifts the variable(using var keyword) and function declaration to the top in their scope.

sayMyName("Shreya");

function sayMyName(finalName){         //it will still print name
    console.log(finalName);
}

//but in case of var keyword only declaration moves above and not the value given to it...so undefined
console.log(age);
var age=25;                         //undefined

//variables created using let and const keyword
console.log(age);
let age=25;                       //error

console.log(age);
const age=25;                    //error

//so variable hoisting is possible only in case of var keyword.

//if function is created using function expression then it will not be shifted to the top of the file.

sayHello();

let sayHello=function(){
    console.log("Hello jee");              //reference error
}

//class hoisting
const object1 = new Human();

class Human{                         //error

}

//function callstack
//STACK(Data structure) It is a container which stores data in LIFO(Last in first out format)
//functions are called first class citizens.
//functions can be used to assign as a variable, can be passed as an argument,can return functions,can used as a data structure,as property.

function greetMe(greet, fullName){
  console.log("hello",fullName);
  greet();
}
function greet() {
    console.log("Greetings for the day.");
}
greetMe(greet,"shreya");

function solve(number){
    return function(number){
        return number*number;
    }
}

let ans=solve(5);
let finalAns= ans(10);
console.log(finalAns);

                       //Variable scoping:
//1.Global scoping. (created using any key word will work everywhere)
//2.Function scoping.
//3.Block scoping.

function sayHello(){
    var name="Earth";
    console.log("Hello ",name);
}

sayHello();

//Temporal dead zone:
console.log(marks);
console.log("shreya");     //this se temporal dead zone because let/const keyword is being used for hoisting.
console.log("singh");
let marks=100;
