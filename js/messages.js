let target;
let message;
const generatedMixedMessage = document.getElementById("generated-mixed-message");
const generateMessage = document.getElementById("generate-message");

generateMessage.addEventListener("click", () => {
    target = generateMessageNumber()
    // console.log(target)
    generatedMixedMessage.innerText = returnMessage(target);
});

