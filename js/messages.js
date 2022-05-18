let message;
const generatedMixedMessage = document.getElementById("generated-mixed-message");
const generateMessage = document.getElementById("generate-message");

generateMessage.addEventListener("click", () => {
  message = createMixedMessage();
  generatedMixedMessage.innerText = message;
});
