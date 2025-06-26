
//OBJECTS

const symbol = Symbol("key1")


const jsuser = {
    name: "Shagill", // these commas are mandatory 
    "stream": "CSE",
    [symbol]: "mykey1", // the brackets are mandatory as if they'll be not given it's type will change to string
    age: 19,
    college: "TMSL",
    collegeYear: "2nd",
    year1: {                                             // when creating objects inside objects we have to treat them like object elements
        subject1: "Maths, Physics",
        prac1: "Physics"
    },
    year2: {
        sub2: "Maths, Chem",
        prac2: "Chem"
    },
    year3: {
        sub3: "Maths, DSA",
        prac3: "DSA"
    }
}

console.log(jsuser.name);
console.log(jsuser["stream"]); // another way for accesing object elements when the element is specifically defined as a string. in js the elements are already created as 
//strings but when we define them specifically as strings then it is the only way to access them. 
console.log(jsuser[symbol]);  // this is the correct way to define and print the symbol as here its printing like symbol only, it is not going to change to string


jsuser.age = 20
Object.freeze(jsuser)
jsuser.age = 21  // after freezing the object values never change
console.log(jsuser["age"]);


console.log(jsuser.year2.prac2);

const allsubs = Object.assign({}, jsuser.year1, jsuser.year2, jsuser.year3) // 1st way to combine objects together
console.log(allsubs);
const allsubj = { ...jsuser.year1, ...jsuser.year2, ...jsuser.year3 }  // another and easy method
console.log(allsubj);


console.log(Object.keys(jsuser));  // both methods are used to create an array of the elements inside an object for further work maybe loops or if else depends
console.log(Object.values(jsuser));
console.log(jsuser.year3.prac3);


const {collegeYear : year, year1 : Yr1, year2: Yr2, year3: Yr3} = jsuser   // this is destructuring basically yahan you are accesing values from your object 
// and storing it in a new variable aur fir jab bhi print karvana hai to you are just giving the variable name, syntax is easy:
// ":" se pehle object key ka name ":" ke bad uska new varible name and "="ke baad source object 
console.log(year, Yr1, Yr2, Yr3);

//**************************************OBJECTS BASICS END****************************************/
