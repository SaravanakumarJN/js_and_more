/*
  Promise is object with state and some methods useful in handling the async behaviour

  States of promise,
    => pending (not yet resolved or rejected),  
    => fullfilled (resolved), 
    => rejected (rejected).

  Chainers,
    => .then()     normal chaining when the promise is resolved
    => .catch()    catches the rejection error    
    => .finally()  executes at the end even after catch block
  Promise have greater priority in event loops than the web apis and the setTimeout/setInterval functions.
*/

const playtime_request = (time) => {
  return new Promise((resolve, reject) => {
    if(!time || typeof(time) !== "number" || time > 3600){
      return reject("Overtime")
    }
    else{
      return resolve("Allowed")
    }
  })
}

playtime_request(30000)
.then((res) => console.log(res + "- Hurray!"))
.catch((error) => console.log((error + "- Oh no!")))


// storing promise response into some variable
const func = async () => {
  let response;
  await playtime_request(3000)
  .then((res) => {
    response = res
  })
  .catch((error) => {
    response = error
  })
  console.log(response)
}
func()

