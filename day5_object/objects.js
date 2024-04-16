// const tinderUser=new Object() //singleton
const tinderUser={} //non singleton 
tinderUser.id="123abc"
tinderUser.name="Nitin"
tinderUser.isLoggedIn=true  
// console.log(tinderUser);

const regularUser={
    email:"nitin241@gmail.com",
    fullName: {
        userFullName:{
            firstname:"nitin",
            lastname:"negi"
        }
    }
}
console.log(regularUser.fullName.userFullName.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3: "a",
    4: "b"
} 
// const obj3={ obj1,obj2}
// const obj3=Object.assign({},obj1,obj2) //{}=>it's target and obj1 and 2 is source

const obj3={...obj1,...obj2} //ye bdiya hai spread operator

// console.log(obj3);

const users=[{
    id:1,
    email:"h@gmail.com"
}]
// console.log(users);

//tinder user

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedI'));
