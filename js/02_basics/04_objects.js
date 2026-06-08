// const tinderUser = new Object() singleton object
const tinderUser= {} //non singleton object 

tinderUser.id ="123abc"
tinderUser.name ="Rohit "
tinderUser.isLoggedin =false


// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
                        firstname: "Rohit",
                        lastname: "Dubey"
        }

    }
}
// console.log(regularUser?.fullname.userfullname.firstname) u can use questionmark like an exception handling while using apis

const obj1 = {1:"a",2:"b"}
const obj2 = {3: "a",4:"b"}
const obj4 = {5: "a",6:"b"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "r@gmail.com ",

    },
    {
        id: 2,
        email: "r@gmail.com "

    }  
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedin'));



