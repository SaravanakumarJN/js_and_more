/*
  Async await is another way of handling asynchronous requests.
  => it makes the execution wait for the asynchronous code which is moved to web api container
  => As it turns the asynchronus code into synchronous try catch block can be used to catch the errors
*/

const timer = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // return reject("Something went wrong")
      return resolve(console.log("I am to be in task queue"))
    }, time)
  })  
}

const async_to_sync = async () => {
  try{
    await timer(1000)
    console.log("I am synchronous, so no queues")
  }
  catch(error){
    console.log(error)
  }
}

async_to_sync()