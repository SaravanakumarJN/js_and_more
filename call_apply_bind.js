/*
  wrapper function (use mutability)
*/
function wrapper(obj){
  obj.greet = function(greet_text){
    console.log(`${greet_text}, ${this.name}`)
  }
}

let person = {
  name: "Saravana",
  age: 22,
}
wrapper(person)
person.greet("Good Evening")


/*
  call (wrappes the context and call the function)
  1st argument => refernce object
  other arguments => arguments for the function being called

  **The call() method calls a function with a given this value and arguments provided individually.**

  can be used to write methods that can be used on different objects
*/
function greet(greet_text){
  console.log(`${greet_text}, ${this.name}`)
}

greet.call(person, "Good Evening")


/*
  apply (wrappes the context and call the function)
  1st argument => reference object 
  2nd argumenr => array of arguments to be passed for the function being called

  **The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).**
*/
greet.apply(person, ["Good Evening"])


/*
  bind (wrappes the context and returns a new function with that context)
  1st argument => reference object
*/
let binded_function = greet.bind(person)
binded_function("Good Evening")


