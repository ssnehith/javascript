const fruits=["apple","banana",3,true]

console.log(fruits);

console.log(fruits[6]);

fruits.push("kiwi")

console.log(fruits);

fruits.pop()

console.log(fruits);

fruits.shift()

console.log(fruits);

fruits.unshift("kiwi")

console.log(fruits);

fruits.splice(2, 0, "pineapple");
console.log("After splice insert:", fruits);

const selectedFruits = fruits.slice(1, 4);
console.log("Selected fruits using slice:", selectedFruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i}:`, fruits[i]);
}

fruits.forEach((fruit, index) => {
    console.log(`forEach item ${index}:`, fruit);
});