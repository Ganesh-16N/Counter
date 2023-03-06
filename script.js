let count = 0;
let multValue = 1;
let val = document.getElementById("mult").addEventListener("input", (e) => {
  multValue = parseInt(e.target.value);
});

let show = document.getElementById("show").nodeValue;

document.getElementById("incr").addEventListener("click", () => {
  show += multValue;
  document.getElementById("show").innerText = show;
});

document.getElementById("decr").addEventListener("click", () => {
  show -= multValue;
  document.getElementById("show").innerText = show;
});

document.getElementById("reset").addEventListener("click", () => {
  show = 0;
  document.getElementById("show").innerText = show;
  document.getElementById("mult").value = 1;
});
