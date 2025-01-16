//Object:Collection of key-value pairs.
let obj={
    name: "Love",
   // "full name":"Love Babbar"            //use ""in key when it has space in it.
    age:25,
    weight:85,
    height:"6ft 1in",
    greet: function(){
      console.log("hello jee kaise ho saare");
    }
};
console.log(obj);
obj.greet();

//shallow copy and deep copy (asked in interviews)

//Arrays:Collection of items/elements.

//creation of arrays:
let arr=[1,2,3,4,5];
console.log(arr);
//array constructor
let brr = new Array('self',1,true);
console.log(brr);

console.log(typeof(arr));       //object
console.log(typeof(brr));       //object
