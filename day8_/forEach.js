// const lang=['js','java','python','cpp'];
// lang.forEach((item) => {
//     console.log(item);
//     //isme return undefined aata hai
// });

const no=[1,2,3,4,5,6,7,8,9,10];
//filter method
// const newNums=no.filter((num)=>num>4)
// console.log(newNums);

//2nd filter
const newNums=no.filter((num)=>{
    return num>4  //yaha return likhna jroori hai
})
// console.log(newNums);


//map

// const  myNo=[1,2,3,4,5,6,7,8,9,10]

// const newNo=myNo.map((num)=>num+10)
// console.log(newNo);

// chaining map

const  myNo=[1,2,3,4,5,6,7,8,9,10]

const newNo=myNo.map((num)=>num*10)
                .map((num)=>num+1)
                .filter((num)=>num>=40)
console.log(newNo);











