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

//objects methods
let students1={
    name:"Roxy",
    greet:function(){
        console.log(students.name)
    }
}
students1.greet()

//Destructing
let student2={
    name1:'Ram',
    age1:21
}
console.log("Before Destructing")
console.log(student2.name1)
console.log(student2.age1)

let{name1,age1}=student2
console.log("After Destructing")
console.log(name1)
console.log(age1)

//spread operator
let student4={
    name:"roll",
    age:25
}
let updatedstudent={
    ...student4,
    city:"Hyderabad"
}
console.log(updatedstudent)

//Rest operator
let student5={
    name:"rax",
    age:25,
    city:"Hyderabad"
}
let{name2,...others}=student5
console.log("Rest Operator")
console.log(student5)
