const accountId = 144453
let accountEmail ="rohit@google.com"
var accountPassword ="12345"
accountCity ="Jaipur"


// accountId = 2 //not allowed

accountEmail = "hc@hc.com"
accountPassword ="21212121"
accountCity = "Bengaluru"
let accountState; 

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity])

/*
Prefer not to use var because
of issue in block scope & functional scope
*/ 