const button = document.getElementById("changeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Button clicked successfully! JavaScript is working.";

    button.textContent = "Clicked!";
});