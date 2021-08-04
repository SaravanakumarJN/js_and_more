/*
  Object Constructors (skeleton for creating new object)

  new - keyword for creating new binding
  => create a new object and bind the function with that new object and returns that object
*/
function Person(name, age, gender){
  this.name = name,
  this.age = age,
  this.gender = gender
}
let p1 = new Person("Saravana", 22, "male")
console.log(p1)



/* 
  example of new keyword working
*/
function Person1(name, age, gender){
  var _this_ = {}
  _this_.name = name,
  _this_.age = age,
  _this_.gender = gender

  return _this_
}
let p2 = Person1("Saravana", 22, "male")
console.log(p2)