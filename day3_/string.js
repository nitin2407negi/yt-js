const name = "nitin"
const repoCount = 50

// console.log(name+repoCount+"value"); <=not recommended old school

console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //<=new way

const gameName=new String('nitin-new')

console.log(gameName[0]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(7));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString=gameName.slice(-8,4)
console.log(anotherString);

//trim and replace

const newOne="     Negi"
console.log(newOne.trim());  //removing spaces

const url="https//hitesh.com/nitin%20negi"
console.log(url.replace('%20' , "-"));
console.log(url.includes('nitin')); //check it is or not

console.log(gameName.split('-'));


