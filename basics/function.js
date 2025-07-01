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

