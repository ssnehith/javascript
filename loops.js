const output = document.getElementById("output");

function printMessage(message) {
    output.textContent += message + "\n";
    console.log(message);
}

printMessage("Basic number sequence:");

for (let i = 1; i <= 5; i++) {
    printMessage(`Number: ${i}`);
}