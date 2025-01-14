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

