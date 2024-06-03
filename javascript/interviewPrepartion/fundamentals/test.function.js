// how many ways we can call a function 

function show() {
  console.log("show function called");
}
// 1
show();
// 2
show.call({});
// 3
show.apply(this);
// 4
setTimeout(show,0);
// 5
new show();

// all the 5 ways we are using () to call a function

// How we can Invoke a function without parenthesesis ()
new show; // here () only required when want to pass the argument
show``; // using string literal
const obj = {
  show: 1,
  get show() {
    console.log('show called');
  }
}
obj.show; // using getter property in object


const obj2 = {
  email: "abc@mail.com",
  updateEmail: email => {
    this.email = email;
  }
}

obj2.updateEmail('updated@gmail.com');
console.log(obj2.email);//
