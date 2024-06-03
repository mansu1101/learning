/***
 * 1. map,filter,reduce
 * 2. Tricky array questions 
 * */
 


// 2. Tricky array questions

// what wil be the output of belcode senppit
const result  =  [9,8,7,6][1,2];
console.log(result);// and why? --> [1,2] will be convert to 2 --> so output 7 at index 2

console.log(["1","5","11"].map(parseInt));// [ 1, NaN, 3 ]

let newList = [2,3].push(4);
console.log(typeof newList);// number 
console.log(newList.push(5)) // reference error b'z push() method returns number type so newList is an interger holding.