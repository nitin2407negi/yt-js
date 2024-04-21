const myNums=[1,2,3]

// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval;
// },0)



//by arrow function

const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
// console.log(myTotal);


//example

const shoppingCart=[
    {
        itemName:"js-chaiorcode",
        price:99
    },
    {
        itemName:"java",
        price:999
    },
    {
        itemName:"python",
        price:235
    },
    {
        itemName:"ROR",
        price:89
    },
]
const priceTOPay=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceTOPay);