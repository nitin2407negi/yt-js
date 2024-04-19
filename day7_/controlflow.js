// const score=200;
// if(score>100)
// {
//     const power="fly"
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`); (ye scope se bahar hai)

const userLoggedIn=true;
const debitCard=true;
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn&&debitCard){
   console.log("allow to buy course");
}         
if(loggedInFromEmail||loggedInFromGoogle)
{
    console.log("user logged IN");
}    
                             


