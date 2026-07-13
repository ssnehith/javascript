const prices=[100,200,300]

const finalPrices=prices.map(price=>price*1.8);
console.log(finalPrices)

const products=[
    {name:"Laptop",price:50000},
    {name:"Phone",price:20000},
    {name:"Watch",price:5000}
];

const productNames=products.map(product=>product.name);
console.log(productNames)

//filter and sort
const marks=[30,45,90,80,20]

const passed=marks.filter(mark=>mark>=45);
console.log(passed)
const passedSort=passed.sort((a,b)=>a-b)
console.log(passedSort)


//reduce
const total=prices.reduce((sum,price)=>sum+price)
console.log(total)
