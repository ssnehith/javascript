const minNumberInput = document.getElementById("minNumber");
const maxNumberInput = document.getElementById("maxNumber");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");

generateButton.addEventListener("click", function () {
    const minNumber = Number(minNumberInput.value);
    const maxNumber = Number(maxNumberInput.value);

    console.log("Minimum:", minNumber);
    console.log("Maximum:", maxNumber);
});