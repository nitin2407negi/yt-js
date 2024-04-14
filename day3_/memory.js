// types of memory : stack ,heap
// primitive(stack),nonprimitive(heap)
// heap me referance milta hai

let myYouTubeName="chaiorcode"

let anotherName=myYouTubeName
anotherName="nitinnegi"
console.log(myYouTubeName);
console.log(anotherName);

let userOne={
    email:"user@gmail.com",
    upi:"8989@paytm"
}
let userTwo=userOne

userTwo.email= "negi@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);