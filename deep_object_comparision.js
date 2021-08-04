function deepEqual(obj1, obj2){
  let obj1_keys = Object.keys(obj1)
  let obj2_keys = Object.keys(obj2)
  
  if(obj1_keys.length !== obj2_keys.length){
    return false
  }

  for(let keys in obj1){
    if(obj2[keys] === undefined){
      return false
    }
    
    if(typeof(obj1[keys]) === "object" && typeof(obj2[keys]) === "object"&& obj1[keys] !== null && obj2[keys] !== null){
      if(!deepEqual(obj1[keys], obj2[keys])){
        return false
      }
    }
    else{
      if(obj1[keys] !== obj2[keys]){
        return false
      }
    }
  }

  return true
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true