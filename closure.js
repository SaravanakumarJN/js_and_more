/*
  closures => Even after returning a function, variables (outer function's scope) inside that functions are accessible through the inner function (inside that function)

  Inner function searches for num1 during scope creation. 
  But as it is not declared inside inner function it searches the outer scope here it's outer function's scope

  ***blocked scoped variables are kept in closure scope***
*/

// Example 1
function add(num1){
  return function add_to(num2){
    return num1 + num2
  }
}
console.log(add(10)(20))


// Example 2
let test_func;
function test(){
  let a = 10
  test_func = function(b){
    return a + b
  }
  return 
}
test()
console.log(test_func(40))


// Example 3 (Privatisation)
let counter = (function(){
  let count = 0
  function increament(){
    count = count + 1 
    return count
  }

  function decreament(){
    count = count - 1
    return count
  }

  return {
    increament,
    decreament
  }
})()

console.log(counter.increament())   // 0 => 1
console.log(counter.decreament())   // 1 => 0
console.log(counter.increament())   // 0 => 1
console.log(counter.increament())   // 1 => 2
