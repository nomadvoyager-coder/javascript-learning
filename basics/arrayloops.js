//for of the values of any type of object

let sem1 = ["Calculus", "Physics", "EE"]

for (let sub of sem1){
 console.log(sub);
}


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


for (const key in jsuser) {
   console.log(`The ${key}'s values is ${jsuser[key]}`);   // 1st is for key 2nd is for values
   
}

sem1.forEach(                   //it is defined to do any functionon an array.Here it is just printing 
    function (indVal,index) {
console.log(index,indVal);

    }
)

const people = [
  { name: 'Alice', age: 25, city: 'New York' },
  { name: 'Bob', age: 30, city: 'Los Angeles' },
  { name: 'Charlie', age: 35, city: 'Chicago' },
  { name: 'David', age: 40, city: 'Miami' },
  { name: 'Eve', age: 28, city: 'San Francisco' }
];


people.forEach ( function (item)            //in for each funtion you dont have to assign a name to the function
{
    console.log(item.name);
    
} )

people.forEach ( (item) =>
{
    console.log(item.city);
    
} )

const arr = [1,2,3,4,5,6,7,8]

const nayanum =arr.filter ( (num) => num>3)

const aurnayanum =arr.filter ( (num) => {
    return num >2
})
console.log(nayanum);
console.log(aurnayanum);

const books = [
  { name: 'The Catcher in the Rye', genre: 'Fiction', publishYear: 1951 },
  { name: 'To Kill a Mockingbird', genre: 'Fiction', publishYear: 1960 },
  { name: '1984', genre: 'Dystopian', publishYear: 1949 },
  { name: 'Moby-Dick', genre: 'Adventure', publishYear: 1851 },
  { name: 'Pride and Prejudice', genre: 'Romance', publishYear: 1813 },
  { name: 'The Great Gatsby', genre: 'Fiction', publishYear: 1925 },
  { name: 'The Hobbit', genre: 'Fantasy', publishYear: 1937 },
  { name: 'Brave New World', genre: 'Dystopian', publishYear: 1932 },
  { name: 'War and Peace', genre: 'Historical Fiction', publishYear: 1869 },
  { name: 'The Odyssey', genre: 'Epic Poetry', publishYear: -800 },
  { name: 'Fahrenheit 451', genre: 'Dystopian', publishYear: 1953 },
  { name: 'The Picture of Dorian Gray', genre: 'Fiction', publishYear: 1890 }
];

let newBooks = books.filter( (year) => year.publishYear >= 1950)//.map((year)=>{return year.publishYear+100})       //A subtle but crucial aspect of map() is its potential for side effects. 
                                                                                                                    // When you modify objects or arrays inside the map() callback, it may unintentionally mutate the original data, 
                                                                                                                    // since objects and arrays are passed by reference in JavaScript.
console.log(newBooks);

// filters are used to check a test while map is used to do some operations on the objects

const courses = [                                                       
  { name: 'JavaScript for Beginners', price: 29.99 },
  { name: 'Advanced React', price: 149.99 },
  { name: 'Python Fundamentals', price: 139.99 },
  { name: 'Data Science with Python', price: 159.99 },
  { name: 'Web Development Bootcamp', price: 189.99 },
  { name: 'Machine Learning Basics', price: 199.99 },
  { name: 'React Native for Mobile Apps', price: 169.99 },
  { name: 'The Complete Node.js Developer Course', price: 179.99 },
  { name: 'Intro to JavaScript Frameworks', price: 119.99 },
  { name: 'Learn Git and GitHub', price: 119.99 }
];

const totalPrice = courses.reduce ((accumulator,price)=> accumulator+price.price , 0)            //basicaly for adding up array values and accumulate them upto a single value
console.log(totalPrice);                                                                         //it does not creates new array
