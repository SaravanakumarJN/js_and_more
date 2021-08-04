/*
 A prototype is another object that is used as a fallback source of properties. 
 When an object gets a request for a property that it does not have, its prototype will be searched for the property, 
 then the prototype’s prototype, and so on.
*/

// creating own prototypes - I
let personMethods = {
  eating: function(energy){
    console.log(`${this.name} is eating`)
    this.energy = this.energy + energy
  },

  coding: function(energy){
    console.log(`${this.name} is coding`)
    this.energy = this.energy - energy
  }
}

function Person(name, energy){
  // adds the method as the parent object (prototype / fallback source)
  let obj = Object.create(personMethods)
  obj.name = name,
  obj.energy = energy

  return obj
}

let p1 = Person("Saravana", 30)
console.log(p1)
console.log(Object.getPrototypeOf(p1))

// creating own prototypes - II
let common = {
  native: "Salem",
  motherTongue : "Kannada"
}

let grandParent = Object.create(common)
grandParent.name = "Jayapal"
grandParent.age = 77

let parent = Object.create(grandParent)
parent.name = "Nagaraj"
parent.age = 52

console.log(parent.__proto__.__proto__)
console.log(grandParent.__proto__)



// creating prototypes using prototype keyword (new keyword does the same task internally)
function Person1(name, energy){
  this.name = name,
  this.energy = energy
}

Person1.prototype.eating = function(energy){
  console.log(`${this.name} is eating`)
  this.energy = this.energy + energy
}
Person1.prototype.coding = function(energy){
  console.log(`${this.name} is coding`)
  this.energy = this.energy - energy
}

let p2 = new Person1("Saravana", 40)
console.log(p2)
console.log(Object.getPrototypeOf(p2))



// create prototypes using setPrototype
let parents = {
  name: 'parent name'
}
let child = Object.setPrototypeOf(
  {
    name: "child name"
  },
  parents
)
console.log(child.__proto__)

// freezing proto object
Object.freeze(child.__proto__)
delete child.__proto__.name
console.log(child.__proto__)



