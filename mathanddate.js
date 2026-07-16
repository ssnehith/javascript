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
console.log("Lottery winner:", participants[randomIndex]);


//Floor-down,ceil-up,round-nearest

console.log(Math.floor(10.2));
console.log(Math.ceil(10.2));
console.log(Math.round(10.2));
