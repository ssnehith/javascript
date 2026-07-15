const btn = document.getElementById("btn");
const inputBox = document.getElementById("inputbox");

function validate() {
    const email = inputBox.value.trim();

    if (email === "") {
        alert("Please enter your email");
    } 
    else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email");
    } 
    else {
        alert("Email is valid");
    }
}

btn.addEventListener("click",validate);