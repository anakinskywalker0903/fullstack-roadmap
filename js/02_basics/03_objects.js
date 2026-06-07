///singleton 

//object literals

// Object.create

const JsUser = {
    name : "Rohit",
    "fullname": "Rohit Dubey",
    // [mySym]:"mykey1'",
    age: 21,
    location: "Kolkata",
    email: "rohit@google.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["fullname"])
// console.log(JsUser[mySym])

JsUser.email = "rohit@chagpt.com"
Object.freeze(JsUser)
JsUser.email = "rohit@microsoft.com"
console.log(JsUser);
