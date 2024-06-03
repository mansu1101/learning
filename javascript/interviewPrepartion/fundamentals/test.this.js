// "use strict";
// console.log("Global this ::: ",this);// {} empty object in node and window object in browser

// function logThis(){
//   // with use strict mode it will be undefined 
//   // with non strict mode it will be window object or global object
//   console.log("normal function this ", this);
// }
// logThis();

// const a = function () {
//   console.log("a", this);// Window/global objec in nodejs
//   const b = {
//     func1: function () {
//       console.log("b", this);// "current function" as its a normal old method which has block scope
//     },
//   };
//   const c = {
//     func2: () => {
//       console.log("c", this);// arrao function inherited from global object or Window object
//     },
//   };
//   b.func1();
//   c.func2();
// };
// a();

var myObject = {
  foo: "bar",
  func: function() {
      var self = this;
      console.log("outer func:  this.foo = " + this.foo);
      console.log("outer func:  self.foo = " + self.foo);
      (function() {
          console.log("inner func:  this.foo = " + this.foo);
          console.log("inner func:  self.foo = " + self.foo);
      }());
  }
};
myObject.func();

