//singleton<=constructoor se bnega jb
//Object.create
//object literal
const mySym=Symbol("key1")
const JsUser={
    name:" nitin",
    age:21,
    location:'Indore',
    lastLoggedIn:['monday','saturday'],
    [mySym]:"mykey1" //using square bracket
}
// console.log(JsUser.lastLoggedIn);
// console.log(typeof JsUser.mySym);
// console.log(JsUser[mySym]);
// Object.freeze(location) //not changed when we freeze the object

JsUser.greeting=function(){
    console.log(`hello js user${this.name}`);
}
console.log(JsUser.greeting()); 
