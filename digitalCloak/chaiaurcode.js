const cloak=document.querySelector('#clock');
setInterval(function(){
let date=new Date()
// console.log(date.toLocaleTimeString());
cloak.innerHTML=date.toLocaleTimeString();
},1000)

//set interval khud run krta hai
//setINterval(function(){},1000)