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
