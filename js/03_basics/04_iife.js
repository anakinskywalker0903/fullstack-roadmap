// Immediately Invoked Function Expessions (IIFE)


(function chai(){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB Connected Two ${name}`);
})('rohit')

