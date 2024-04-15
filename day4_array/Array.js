//declaration
const myArr=[2,3,4,5,6,'negi','nitin']
//console.log(myArr);

let myHeros=['bajrangbali','Ganeshji']
//console.log(myHeros);

let Myarrr=new Array(1,2,3,4)
//console.log(Myarrr);

//array methods
// myArr.push('mihir'); //push other element
// myArr.pop();  //delete last element
// myArr.unshift("unshift");  //insert in statrting
// myArr.shift(); //deleting first


// console.log(myArr.includes(5));
// console.log(myArr.indexOf(3));

const newArr=myArr.join();
//console.log( typeof newArr);

//slice and splice

console.log('A',myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3);
console.log('C',myn2);
console.log('check',myArr);


//diff bw slice and splice=>slice() extracts elements into a new array without modifying the original. splice() changes the contents of the original array.


