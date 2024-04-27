// document.getElementById('owl').onclick=function(){
//     alert("owl click ")
// }  old approach

//pdna kya kya hai=>types,timestamp,defaultPrevented,targer,toElement,srcElement,currentTarget
//clientx,clienty,screenX,ScreenY
//altkey,ctrlkey,shiftKey,KeyCode

document.getElementById('images').addEventListener('click',function(e){
    console.log("clicked inside the ul");
})
document.getElementById('owl').addEventListener('click',function(e){
    console.log("owl clicked");
    e.stopPropagation(); //ye laga ke bubbling bnd
})

//event propogation=>2 context hota hai=>event bubbling(false)=>mtlb pele jispe click hua,event capturing(true)=>top se bottom me

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault();
    console.log("google clicked"); 
    e.stopPropagation()
})

