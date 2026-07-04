const output = document.getElementById("output");

function printMessage(message) {
    output.textContent += message + "\n";
    console.log(message);
}

printMessage("Basic number sequence:");

for (let i = 1; i <= 5; i++) {
    printMessage(`Number: ${i}`);
}

printMessage("\nEven numbers from 2 to 20:");

for (let i = 2; i <= 20; i += 2) {
    printMessage(`Even number: ${i}`);
}

printMessage("\nWhile loop countdown:");

let count = 5;

while (count >= 1) {
    printMessage(`Countdown: ${count}`);
    count--;
}