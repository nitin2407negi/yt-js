//Immediately invoked function expression (IIFE)

(function chai(){
    console.log("db connected");
})(); //; ye lagana jroori hai iife mai

//interview(what is IIFE)=global scope ke pollution se problem hoti hai bhot bar   to uss global scope ke jo variable uske pollution ko hatahe ke liyee IIFE ka use hota hai

((name)=>{
    console.log(`db connected 2 ${name}`);
})('negi');
