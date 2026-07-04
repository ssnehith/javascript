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

printMessage("\nMultiplication table of 2:");

let num = 2;

for (let i = 1; i <= 10; i++) {
    printMessage(`${num} x ${i} = ${num * i}`);
}

printMessage("\nFrontend skills list:");

const skills = ["HTML", "CSS", "JavaScript", "React"];

for (let i = 0; i < skills.length; i++) {
    printMessage(`Skill ${i + 1}: ${skills[i]}`);
}