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

let totalDuration = 0;
let completedCount = 0;
let longestSession = studySessions[0];

printReport("JavaScript Study Session Report");
printReport("--------------------------------");

for (let i = 0; i < studySessions.length; i++) {
    totalDuration += studySessions[i].duration;

    if (studySessions[i].completed === true) {
        completedCount++;
    }

    if (studySessions[i].duration > longestSession.duration) {
        longestSession = studySessions[i];
    }
}

let averageDuration = totalDuration / studySessions.length;

printReport(`Total Study Time: ${totalDuration} minutes`);
printReport(`Average Session Time: ${averageDuration} minutes`);
printReport(`Completed Sessions: ${completedCount}/${studySessions.length}`);
printReport(`Longest Session: Day ${longestSession.day} - ${longestSession.topic}`);

printReport("\nDetailed Session List:");
printReport("--------------------------------");

for (let i = 0; i < studySessions.length; i++) {
    let session = studySessions[i];

    printReport(
        `Day ${session.day}: ${session.topic} - ${session.duration} minutes`
    );
}

printReport("\nCompletion Status:");
printReport("--------------------------------");

let index = 0;

while (index < studySessions.length) {
    let session = studySessions[index];

    if (session.completed) {
        printReport(`Day ${session.day}: Completed`);
    } else {
        printReport(`Day ${session.day}: Pending`);
    }

    index++;
}