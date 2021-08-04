/*
  Lexical scoping 
  
  => determines the availability of variable for accees in the executional context 
  => Searching for variable happens inside the functional scope first, if not found then only searching happens in global scope
*/
let a = 10

function check(){
  console.log(a)
  let a = 3
  console.log(a)
}

check()