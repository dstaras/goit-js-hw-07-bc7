const inputText = document.querySelector("#validation-input");
const inputNum = inputText.getAttribute("data-length");

inputText.addEventListener("blur", (event) => {
  if (inputText.value.length === +inputNum) {
    inputText.classList.add("valid");
  } else {
    inputText.classList.add("invalid");
  }
});

inputText.addEventListener("focus", (event) => {
  inputText.classList.remove("valid");
  inputText.classList.remove("invalid");
});
