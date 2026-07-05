const output = document.getElementById("output");

function printReport(message) {
    output.textContent += message + "\n";
    console.log(message);
}

const studySessions = [
    {
        day: 16,
        topic: "JavaScript Variables",
        duration: 45,
        completed: true
    },
    {
        day: 17,
        topic: "Data Types",
        duration: 50,
        completed: true
    },
    {
        day: 18,
        topic: "Operators and Conditions",
        duration: 60,
        completed: true
    },
    {
        day: 19,
        topic: "Arrays",
        duration: 55,
        completed: true
    },
    {
        day: 20,
        topic: "Loops Practice",
        duration: 70,
        completed: true
    }
];

printReport("JavaScript Study Session Report");
printReport("--------------------------------");