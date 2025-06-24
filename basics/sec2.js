const arr = [3,4,5,"Shagill","pie"]
console.log(arr);
let slice = arr.slice(2,4)    // in slice notheing changes to actual array (works on call by value)
console.log(slice);
console.log(arr);
let splice = arr.splice(2,4)
console.log(splice);      //in splice the array is change include the last index (works on call by reference)
console.log(arr);


let sem1 = ["Calculus","Physics","EE"]
let sem2 = ["Probability","Chemistry","DS"]
let sem3 = ["Discrete","COA","DSA"]


const  uptill =  [...sem1,...sem2,...sem3] // usefull when n arrays need to be concatenated while you want to createan overall new array
const  firstyr =  sem1.push(sem2) // useful when needed to contcat two arrays but is creates 2d, 3d or nd array

console.log(uptill);
console.log(firstyr);

//OBJECTS

