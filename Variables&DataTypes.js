//to check what is the output of js in terminal window.Write this in terminal:
// node (name of file).js

                                     //Variables and Datatypes:
//Variables are named memory locations.

// //3 types:
// //var let and const.
                                  // //var:
// //we don't use it as it is function scoped and global scoped but not block scoped.
//global scoped:
 var age=25;
 if(true){
     console.log(age);
 }
//function scoped:
function solve(){
    var age=25;
    console.log(age);
}
solve();
//redefinition/redeclaration is possible in var which leds to debugging issues.
var x=10;
var x=20;
                                   //let:
//It is block scoped.
//redefinition/redeclaration not possible.

//dynamically typed language: we can insert multiple types of values in a variable.
let a=10;
a="babbar";
a=true;
a=null;

                                   //const:
//redefinition/redeclaration/reassignment not possible.

           //VARIABLE NAMING CONVENTION:
//can start with number/_/$
// no space between
//camelCase
//meaningful
//don't use reserved keywords as names

//DATATYPES:
//1.Primitive data type : number,string,boolean,undefined,null,bigInt,symbol.
//2.Non-primitive data type. (we won't deal with them here)

//Number:1,2,23,4.14,5.79,3.14 (between -(2^53 -1) to (2^53-1))
//String: sequence of characters
//Boolean: true/false
//undefined: no value provided to data-type.
let age;
//null: null value is given to data-type.
let value=null;
//bigInt: numbers greater than (2^53-1)

