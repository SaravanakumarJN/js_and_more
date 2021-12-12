let container = document.querySelector("#container");

container.addEventListener("click", (e) => {
  let { id } = e.target;
  console.log(`Button with id - ${id} was clicked`);
});
