function Person(){
  let _company_name = "Urban Company"
  const greet = function(user){
    console.log(`Hi ${user}! Welcome to ${_company_name}`)
  }
  return {
    greet
  }
}

let Person1 = Object.freeze(Person())
Person1.greet("Saravana")

