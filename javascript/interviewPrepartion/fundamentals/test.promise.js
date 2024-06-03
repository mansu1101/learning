function job() {
  return new Promise(function(resolve, reject) {
    reject();
  });
}

let promise = job();
promise.then(function() {
  console.log("Success1");
}).then(function() {
  console.log("Success2");
}).then(function() {
  console.log("Success3");
}).catch(function() {
  console.log("Error1");
}).then(function() {
  console.log("Success4");
});

// function job() {
//   return new Promise(function(resolve, reject) {
//     reject();
//   });
// }

// let promise = job();
// promise.then(function() {
//   console.log("Success1");
// }).then(function() {
//   console.log("Success2");
// }).then(function() {
//   console.log("Success3");
// }).catch(function() {
//   console.log("Error1");
// }).then(function(){
//   console.log("Success4");
// }).then(function(){
//   console.log("Success5")
// }).catch(function() {
//   console.log("Error2");
// }).finally(()=> {
//   console.log("finally called");
// }).then(()=> {
//   console.log("Success-6");
// }).finally(()=> {
//   console.log("finally-3");
// }).catch(()=> {
//   console.log("Error3");
// });

const obj = {lang: "react"};
const temp = {};
temp.name = obj;
obj = null;
console.log(temp.name); // output?

console.log([1,2].map((ele)=> {return 'a'}));

const promiseArr = [
  // new Promise(resolve => setTimeout(resolve, 100, 'apple')),
  // new Promise((resolve, reject) => setTimeout(reject, 10, 'Rejected after 10 milliseconds')),
  // new Promise(resolve => setTimeout(resolve, 3000, 'orange')),
  new Promise((resolve, reject) => {
    throw new Error('I will fall into catch block of allSettled');
  })
]
Promise.allSettled(promiseArr)
  .then(fruits => console.log(fruits))
  .catch(err => console.log('Exception aayi hai :', err))