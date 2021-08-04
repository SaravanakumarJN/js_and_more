/*
  Debouncing (the event/action (here network request) will be executed only after the user stops firing the event (generally making api calls))
*/

const debounce = ((delay_time) => {
  // declaring in outer function to have the state in closure scope (so that we could have the state for access)
  let call
  return (func_to_be_called) => {
    // if already call has some value (here the set timeout), clear that
    if(call){
      clearTimeout(call)
    }

    // making the new call after clearing the previous one
    call = setTimeout(() => {
      func_to_be_called()

      // once call is executed setting it back to undefined
      call = undefined
    }, delay_time)
  }
})(100)

const network_request = () => {
  console.log("Request successful")
}

debounce(network_request)
debounce(network_request)
setTimeout(() => {
  debounce(() => console.log("I was fired last - debouncer"))
}, 90)


/*
  Throttling (Once a event is triggered, all the further events will be cancelled till the first event completes it's execution)
*/
const throttle = (function(){
  let call;
  return (func_to_be_called ,delay_time) => {
    // check for previous call if exists cancel the current call
    if(call){
      return
    }

    call = setTimeout(() => {
      func_to_be_called()

      // once call is executed setting it back to undefined
      call = undefined
    }, delay_time)

  }
})()

throttle(network_request, 100)
setTimeout(() => {
  throttle(() => {console.log("I was fired last - throttler")}, 100)
}, 90)
