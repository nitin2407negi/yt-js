const userEmail="nitin@gmail.com"
// if (userEmail) {
//     console.log("got mail");
// }
// else{
//     console.log("dont get");
// }

//falsy values
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truely values
//"0",'false'," ",[],{},function(){}

//nullish coalescing operator(??):null undefined

let val1;
// val1=5??10
val1=null??10
// console.log(val1);

// terniary operator

// condition? true:false

const iceTeaPrice=100;
iceTeaPrice>=80?console.log("less than 80"):console.log("more than 80");                       