                //Functions
//It is a block of code which performs a specific task.

//function definition
function sayName(){
    console.log("Love Babbar");
}

//function use - function
sayName();

function printCounting(){
    for(let i=0;i<=100;i++){
        console.log(i);
    }
}
printCounting();

//ARROW FUNCTION:
let getExp=(x,y) => {
  let ans=x**y;
  return ans;
}
console.log(getExp(2,10));
