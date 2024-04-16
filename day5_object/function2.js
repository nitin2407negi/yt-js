function CalculateCartPrice(...num1){
return num1
}
// console.log(CalculateCartPrice(200,400,500));
const user={
    username:"nitin",
    price:99
}
function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:199
})

const myArr=[200,300,400,500]
function returnValue(getarr){
  return getarr
}
console.log(returnValue(myArr));