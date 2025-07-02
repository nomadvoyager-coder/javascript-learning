// FUNCTIONS

function itemsPrice (...itemprice){     // in this all the values are taken and return
    return itemprice
}
console.log(itemsPrice(2,3,24,200,26));

function penPrice(pen1,pen2, ...restpen){       // here first two values are stored in pen1 and pen2 and therest are in restpen and s
    return restpen                                 //ince only restpen is returned it is giving that values only
}

console.log(penPrice(22,23,300,400,500));

//Passing of objects and arrays in function

function greetuser(anyobject, datearray){
 console.log(`Hello ${anyobject.name}, how are you?`);
 console.log("Today's date is");
 return datearray[1]
}

const user = {
    name : "Shagill",
}
const date =[21,22,23]
console.log(greetuser(user,date));
//console.log(addtwo(3));
const addtwo= function(num){            //another way of declaring funxn but is ke execute hone se pehle we can't call it unlike other functions due to hoisting
    return num+2
}
console.log(addtwo(3));

const library = {
    cardholder: "user",
    date: 2025,

    greet: function() {                     //this is how you declare function inside an object
        console.log(`Welcome to library ${this.cardholder}`);
        console.log(this);
        
    },
}

library.greet()    
console.log(this);  // this line will give an empty output as "this" is telling about global context which is empty agar yahi browser par hota to "window" print hota

//arrow function
//two ways to declare them
const addnum = (num1,num2)=> {
    return num1+num2
}

const subnum = (num1,num2)=> (num1-num2)

console.log(addnum(5,6),subnum(6,5));

// IIFE functions : use to remove or avoid the pollution coming from global scope
                    //basic work is to execute the fnxn immediately
//SYNTAX:

(function UA () {                      //named IIFE
    console.log(`new student`);
    
})();           // semicolon is always needed when two IIFE are written 

(()=>{                      //unnamed IIFE
    console.log(`new member`);
    
}) ()

