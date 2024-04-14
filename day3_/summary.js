// types=>primiticve
// 7 types : string,number,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temperature = null
let userEmail; //undefined

//symbol
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

//bigInt
const bigNumber = 2314234232424n

//types-Referece(Non primitive)
// types : array , object , function

const heros = ["shaktiman", "nagraj", "bajrangbali"]
let myObj = {
    name: "nitin",
    age: 22,
}
const myFunction = function () {
    console.log("hello");
}


