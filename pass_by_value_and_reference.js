let num = 10
let arr = [1, 2, 3]

function test(number, array){
  number = 20
  array.push(4)

  console.log(number, "inside")
  console.log(array, "inside")
}

test(num, arr)
console.log(num, "outside")
console.log(arr, "outside")


