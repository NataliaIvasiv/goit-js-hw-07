const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener("input", inputHandler);

function inputHandler(event) {
    nameOutput.textContent = event.currentTarget.value.trim();
    if (nameOutput.textContent === "" || nameOutput.textContent === " " ) {
      nameOutput.textContent = "Anonymous"
  }

}
