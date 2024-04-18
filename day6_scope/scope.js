
let a=300;
if(true){
    let a=10;
    const b=20;
    var c=30;
    // console.log("inner="+a);
}

//{}=>scopes

 
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
const username="nitin";
function two(){
    const website="utube";
    console.log(username);
}
// console.log(website);
two();
}
// one();
if(true)
{
    const username="negi"
    if(username==="negi")
    {
        const website=" youtube "
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);



// ++++++++++++++++++++interesting++++++++++++++++++

console.log(addOne(5));
function addOne(num){
  return num+1
}


const addTwo=function(num){
    return num+1
}
addTwo(2); //hoisting isko uper ni likh skte mtlb declaration se phle access nhi kr skte



