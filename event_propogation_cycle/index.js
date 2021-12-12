/*
 Executing callbacks at bubbling phase
*/
let one = document.querySelector(".one");
one.addEventListener("click", () => {
  console.log("Callback of one triggred");
});

let two = document.querySelector(".two");
two.addEventListener("click", () => {
  console.log("Callback of two triggred");
});

let three = document.querySelector(".three");
three.addEventListener("click", (e) => {
  // in this case the the propogation stops at three itself and other callbacks after this aren't executed.
  e.stopPropagation();
  console.log("Callback of three triggred");
});

/*
  Executing callbacks at capturing phase
*/
// let one = document.querySelector(".one");
// one.addEventListener(
//   "click",
//   (e) => {
//     e.stopPropagation();
//     console.log("Callback of one triggred");
//   },
//   { capture: true }
// );

// let two = document.querySelector(".two");
// two.addEventListener(
//   "click",
//   () => {
//     console.log("Callback of two triggred");
//   },
//   { capture: true }
// );

// let three = document.querySelector(".three");
// three.addEventListener(
//   "click",
//   () => {
//     console.log("Callback of three triggred");
//   },
//   { capture: true }
// );
