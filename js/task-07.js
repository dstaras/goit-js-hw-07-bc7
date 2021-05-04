const range = document.querySelector("#font-size-control"),
  span = document.querySelector("#text");

range.addEventListener("change", function (event) {
  span.style.fontSize = this.value + "px";
});
