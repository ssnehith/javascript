let name='Rahul'
let age=21
let city='Hyderabad'

console.log(name,age,city)

let objects={
    name:'Rahul',
    age:21,
    city:'Hyderabad'
};

console.log(objects)

//accessing by dot and bracket
console.log(objects.name)
console.log(objects.city)

console.log(objects["age"])

//Modifying objects
objects.name="Rahul"
objects.gender="Male"
console.log("After modifying",objects)
delete objects.gender
console.log("After deleting",objects)

//Nested objects
let students={
    name:"Ramu",
    address:{
        city:"Hyderabad",
        state:"Telangana"
    }
}

console.log(students)
console.log(students.address.city)