const array = [];
const fn = () => {
  console.log('function');
}
const obj = {};

console.log('fn constructor : ',fn.constructor);
console.log('array constructor :',array.constructor);
console.log('object constructor :',obj.constructor);
console.log('', array.constructor === Array);
console.log('',Array);

(function(){
  var a = b = 3;
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));