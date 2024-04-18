// -----------this keyword=>current context ke baare me batata hai----------- 

// const user = {
//     username: "nitin",
//     price: 999,
//     welcomeMessage: function () {
//         console.log(`${this.username},welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage();
// user.username="hitesh"
// user.welcomeMessage();
// console.log(this);

// function chai(){
//     let userName="nitin"
//     console.log(this.userName);  //this keyword only object ke upr kaam krta hai not on function

// }
// chai();

// const chai=function(){
//     let userName="hitesh"
//     console.log(this.userName);
// }

// chai();


//arrow
// const chai=()=>{
//     let userName="hitesh"
//     console.log(this);  
// }
// chai();

// const addTwo=(num1,num2)=>{
// return num1+num2
// }
// console.log(addTwo(1,4));


const addTwo=(num1,num2) => (num1+num2)
console.log(addTwo(1,4));

    

