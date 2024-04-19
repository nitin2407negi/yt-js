//---------javascript execution context------------
// 1.global execution context 
// 2.Function execution context 
// 3.eval execution context 
let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2;
    return total;
}
let result1=addNum(val1,val2);
let result2=addNum(10,2);

//-----steps-------
/* step1=global execution(jb kaam ho jata to delete ho jata)

   step2=memory phase(sare variable)
   ex=> val1=undefined
        val2=undefined
        addNum=> defination
        result1=undefined
        result2=undefined
        
    step3=execution phase
    ex=> val1=10
         val2=5
         addNum=>new environment+execution thread(memory phase,execution context)
*/

// call stack 
// LIFO 