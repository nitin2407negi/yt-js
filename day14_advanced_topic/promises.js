//  promise=A promise object represent the eventual completion (or failure) of an asynchronous operation and for resulting value  */
//1st promise
const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //db calls,cyptograpgy,network
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

//2nd promise

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

//3rd promise

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
       resolve({usename:"chai",email:"negi@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"hiitesh",password:"123"})
        }
        else{
            reject('ERROR:something went wrong');
        }
    },1000)
})
const username=promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{
  console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("finally the promise is resolved or rejected"))
 

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({
                username:"Negi",
                password:"321"
            })
        }
        else{
            reject("ERROR: promise five went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
   try {
    const response=await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive();

