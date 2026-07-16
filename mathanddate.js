console.log(Math.PI);
console.log(Math.random());

//Floor
console.log(Math.floor(10.2));
console.log(Math.floor(10.9));
console.log(Math.floor(-10.9));
console.log(Math.floor(Math.random()*6)+1);

//OTP Generator
console.log(Math.floor(100000 + Math.random() * 900000));

//Lottery 
const participants = [
    "Rahul",
    "Snehith",
    "Priya",
    "Vamika",
    "Arjun"
];

const randomIndex = Math.floor(Math.random() * participants.length);

const winner = participants[randomIndex];

console.log("Lottery winner:", winner);

