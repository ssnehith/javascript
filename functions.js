// // let button=document.getElementById("btn");

// // let greet=function(){
// //     console.log("Good Morning");
// // }

// // button.addEventListener("click", greet());

// // function greet(name,food){
// //     console.log(name, "Good Evening", "had your", food);
// // }
// //     greet("Hari","Dinner");

// function add(a,b){
// return a+b;
// }

// // let result=add(4,5);
// // console.log(result);

// function sub(a,b){
//     return a-b;
// }

// function mul(a,b){
//     return a*b;
// }

// function div(a,b){
//     return a/b;
// }


const greet=()=>{
    console.log("Hello");
}

// let a=10;
function outer(){
    let a=10;

    console.log(a);
    
    function inner(){
        console.log("inner");
        console.log(a);
    }
    return inner;
}

let result=outer();
result();
