let course="Javascript"

console.log(course.length)

let courses=["Javascript","java","c"]

console.log(courses.length)

//includes()
let email="student@gmail.com"
console.log(email.includes("@"))

//split
let skills="HTML,CSS,Java Script"

console.log(skills.split(","))

//replace and trim
let text=" I Love You "
console.log(text.replace("You","Vamika"))
console.log(text.trim())

//regex
let onlynums=/^[0-9]+$/
let correctnums=onlynums.test("12345")
console.log(correctnums)
