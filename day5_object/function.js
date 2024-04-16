function sayMyName(){
    console.log('n');
    console.log('e');
    console.log('g');
    console.log('i');
}
// sayMyName()

// function add(number1,number2){
//  console.log(number1+number2);
// }

function add(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
    
   }

// console.log("addition=",add(2,3));

function logInUserMessage(username){
    if(username===undefined){                  
console.log("please ennter a username");
return 
    }
    return `${username} just logged in`
}
console.log(logInUserMessage("Negi"))