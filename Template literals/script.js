const template=document.getElementById('template')
let str1="Hello";
let str2="World";
let str3=`${str1} ${str2}`;
console.log(str3); // Hello World
let msg =`cat's name is "toto"`;
console.log(msg); // cat's name is "toto"
let msg2 =`cat's name is 'toto'`;
console.log(msg2); // cat's name is 'toto'
let num=10;
let Name="John";

let cities=["Chennai","Madurai","Trichy","Coimabtore"];
let marks=[10,20,30,40,50];

console.log(cities)
console.log(cities[0])
console.log(cities.length)
console.log("length of city Coimbatore " + cities[0].length)
console.log(marks)
console.log(marks.length)// 5
console.log(marks[marks.length-1])// 50

console.log(marks[marks.length-2])// 40
console.log(marks[marks.length])

let arr= [5,6,,7,8,9,2,1,,'hello', "world", [3,2]];
console.log(arr)
console.log(arr[11][1])

let matrix=[[1,2,3],
            [4,5,6],
            [7,8,9]];
console.log(matrix)
console.log(matrix[0][0]) // 1
console.log(matrix[1][1]) // 5
console.log(matrix[2][2]) // 9
console.log(matrix[0][2]) // 3

let array=['a', 'b', 'c', 'd', 'e'];
array.push('f')
console.log(array);
array.push('g');
console.log(array);
console.log(array.pop())  
array.pop();
console.log(array);
array.unshift('z');
console.log(array);
delete array[0];
console.log(array);// ['z', 'b', 'c', 'd', 'e']

array.shift();
console.log(array);// ['b', 'c', 'd', 'e']
array.splice(1,2);  // removes 2 elements starting from index 1
console.log(array); // ['c', 'd', 'e']
array.reverse();
console.log(array); // ['e', 'd', 'c']
// Converting string to array
let str4 = "g,t,r,e";
let arr3=str4.split(",");
console.log(arr3); // ['g', 't', 'r', 'e']

//concat and spread operator
let firstArr=[1,2,3];
let secondArr=[4,5,6];
let joinedArr=[firstArr, secondArr];
console.log(joinedArr); // [[1, 2, 3], [4, 5, 6]]
// Joining two arrays using concat
joinedArr=firstArr.concat(secondArr);
console.log(joinedArr); // [1, 2, 3, 4, 5, 6]
// Joining two arrays using spread operator
let joined=[...firstArr, ...secondArr];
console.log(joined); // [1, 2, 3, 4, 5, 6]

//If-else - conditional statement
let pwd_correct = true;

if(pwd_correct){
    console.log("You are logged in..")
}
    else
    {
        console.log("You are not logged in..")
    }
 console.log("Bye..")

 let pwd= false;
 if(pwd){
     console.log("You are logged in..")
 } else {
     console.log("You are not logged in..")
 }
    console.log("Bye..")

    //comparison operators
    //logical operators
     let age = 58;
     let gender= 'female';
     if (age>60 && gender === 'female') {
         console.log("You are eligible for senior citizen benefits!");
     }
     else if (age>60 || gender === 'female') {
         console.log("You are eligible for sepcial discounts!");
     }

     // Ternary operator

     let a=10, b=20;
      let max

//if (a > b)
  //  max = a
//else
  //  max = b


     max = (a > b) ? a : b;
     console.log(max); // 20