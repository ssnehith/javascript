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

const randomNumber =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

result.textContent = `Generated number: ${randomNumber}`;

if (minNumberInput.value === "" || maxNumberInput.value === "") {
    result.textContent = "Please enter both numbers.";
    return;
}

if (minNumber >= maxNumber) {
    result.textContent = "Maximum must be greater than minimum.";
    return;
}