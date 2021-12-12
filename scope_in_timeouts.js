// expected out => 0, 1, 2
// actual out => 3, 3, 3

/*
  Reason: By the time the console is being executed after timeout, the value of i reached 3 as it's global scoped
*/
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i, "after timeout");
  }, 1000);
}

// fix 1
/*
  Using an IIFE we are creating a closure scope for the inner function and retaining the value of i.
*/
for (var i = 0; i < 3; i++) {
  setTimeout(
    ((i) => {
      return () => {
        console.log(i, "fix 1");
      };
    })(i),
    1000
  );
}

//fix 2
/*
  Using a normal function, we are creating a local scope and retaining the value of i
*/
function print_after_timeout(i) {
  setTimeout(() => {
    console.log(i, "fix 2");
  }, 1000);
}
for (var i = 0; i < 3; i++) {
  print_after_timeout(i);
}

//fix 3
/*
As the let is block scoped, once a iteration completes, it leaves the block so i (block scoped element) cannot be accessed after that iteration. 
As a function is using that block scoped i, a closure scope is created so that the function has access to it.
*/
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i, "fix 3");
  }, 1000);
}
