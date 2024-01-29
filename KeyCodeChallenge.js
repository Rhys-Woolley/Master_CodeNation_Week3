let inputValue = "";
let inputKeyCode ="";
let inputCharCode = "";
document.addEventListener("keypress", (event) => {
    inputValue = event.key
    inputCharCode = inputValue.charCodeAt(0)
    inputKeyCode = event.code
    userInput.textContent = inputValue
    CharCode.textContent = inputCharCode
    KeyCode.textContent = inputKeyCode
    console.dir(inputValue)
});
