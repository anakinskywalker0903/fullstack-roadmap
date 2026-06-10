
function sayMyname(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");

}
// sayMyname()

// function addTwonumbers(number1,number2){
//     console.log(number1 + number2)
    
// }
function addTwonumbers(number1,number2){
    
    // let result = number1+number2
    // return result 
    return number1+number2
}

const result = addTwonumbers(3,5)

// console.log("Result: ",result);

function loginUserMessage(username= "Rohit"){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just loggedin`
}

// console.log(loginUserMessage("rohit"))
// console.log(loginUserMessage());


function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500,2000));

const user ={
    username: "Rohit",
    price: 199
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username:"Rohit",
    price:399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,5000,2000]));
