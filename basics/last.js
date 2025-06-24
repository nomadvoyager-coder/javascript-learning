// console.log("Ye last time hum kar rhe hai please kaam kar")
console.log(3%2)
console.log("1"+2+5)
console.log(1+2+"5")
console.log("1"+(2+5)) //this is correct vesion but still not fully as though  it is  using brackets bu not that 1 thing

// all this is happening to ecma script rules and infact they are wrong ways to write a code

// COMPARISONS
// All comparisons  are easyy basic arithmetics but when you are comparing two different datatypes it creates problem

console.log(null>0)
console.log(null==0)
console.log(null>=0)  //its coz == and >< >= <= work differently and === is strict check that is it only compares same datatype


// js is dynamically typed language i.e unlike C++ aor Java we don't have to define the datatype befor creating a variable
// js has two datatypes 1.refrence {array,object,functions} 2.primitive{rest all eg string number etc}
// Here, array,null and object type is "object" and funtion type is "function" rest the primitive one's type are according to their name 
// Number is for both int and float
// object is similar to structure here
// undefined is something that the vaue hasn't been  assigned to the variable yet
// and null is like there is no value in the variable not even zero 
// Memory for datatype:
// Primitive (Stack: call by value), Non-primitive (Heap: call by reference)

let name="Shagill"
let stream= "CS majors"
console.log(`The guy name is ${name} and he is pursuing degree in ${stream}.`);


console.log(Math.abs(-10));  // you cannot do maths in js just bvy writintg the work, you have to write "Math" before evereyone
console.log(Math.round(183.567894));
console.log(Math.random());  //generates any valuye from 0 to 1 so we edit it accordingly to edit values


// generation of values for a die between 1 to 6

let min = 1
let max = 6
let random = Math.random()
console.log(random);
console.log(`${Math.floor(((random*10)+1)) + min }`);  //Math.random() gives a number in the range:
                                                            // [0, 1) → means 0 is possible, 1 is not.
                                                            // So, random * 10 gives a number in:
                                                            // [0, 10)
                                                            // Add 1:
                                                            // [1, 11)
                                                            // Now apply Math.floor(...):
                                                            //Math.floor(1) → 1
                                                            //Math.floor(10.999999...) → 10//

console.log(`${Math.floor((random*(max - min + 1))) + min }`);  // but this is isn't happening here
console.log(Math.round(random));
console.log(Math.floor(random));
console.log(Math.ceil(random));

// LEARN ABOUT DATE AND TIME AGAIN;