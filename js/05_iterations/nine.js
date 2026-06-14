const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc:${acc} and curvval: ${currval} `);    
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)

console.log(myTotal);


const shoppingcart = [
    {
        itemname: "jscourse",
        price:2999
    },
    {
        itemname: "py course",
        price:999
    },
    {
        itemname: "mobile dev course",
        price:5999
    },
    {
        itemname: "data science course",
        price:12999
    },
]

const pricetopay = shoppingcart.reduce( (acc, item) => acc + item.price,0)

console.log(pricetopay);
