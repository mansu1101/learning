const obj = {};

Object.defineProperty(obj, "name", {value: "Manish"});// enumerable:true

console.log(obj);
console.log(Object.keys(obj));
console.log(obj?.name);