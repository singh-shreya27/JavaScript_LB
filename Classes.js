                           //Classes:
class Human{
  //properties/state
    age=13;  //public(default)
    #weight=80;                         //(to make it private use #)
    height=180;

   //functionality/behaviour
     walking(){
       console.log("I am wallking",this.#weight); //to access private property use this keyword
       }
     running(){                            
     console.log("I am running"); 
     }
}

                       //object creation
let obj= new Human();
console.log(obj.age);
obj.walking();
