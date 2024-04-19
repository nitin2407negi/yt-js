for (let i = 0; i <= 10; i++) {
    const element = i; 
    if(element==5)
    {
        // console.log("5 is best");
    } 
    // console.log(element);              
}


for (let i = 1; i < 10; i++) {
    // console.log(`outer loop value : ${i}`);
    for (let j = 1; j < 10; j++) {
        //console.log(`inner loop value : ${j} and inner loop ${i}`);
        // console.log(i+'*'+j+'='+i*j);
    }
}


let myArr=["flash","superman","batman"]
for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    // console.log(element);  
} 

//break and continue
//break=loop se bahar fekta hai(ya control flow se bahar jata hai)
for (let index = 1; index <=20; index++) {
    if(index==5){
        // console.log("detected five");
        break;
    }
    // console.log(`value of i is ${index}`); 
}

//continue=condition skip ho jati hai ek baar
for (let index = 1; index <=20; index++) {
    if(index==5){
        console.log("detected five");
        continue;
    }
    console.log(`value of i is ${index}`); 
}