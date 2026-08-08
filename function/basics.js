
// Normal function

// function addNumber(num1,num2,num3=0,num4=0){
//     return num1+num2+num3+num4;
// }

// console.log(addNumber(5,15,20));

// rest operator (...num)
// rest is used because we don't know exactly how many number of arguments are there
// rest is used for catching values
// it converts the number into array

// function addNumber(...num){
//     console.log(num)
// }

// addNumber(2,3);
// o/p: [2,3]
// addNumber(2,3,4,5);
// o/p: [2,3,4,5]

// function addNumber(...num){
//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     return sum;
// }

// console.log(addNumber(2,3,4));
// console.log(addNumber(5,6,7,9));

// const arr1 = [10,20,30,40];
// const arr2 = [20,30,40,50];

// const ans = [...arr1,...arr2];
// console.log(ans)

// console.log(...arr1);

// function expression

// const addNum = function(num1,num2){
//     return num1+num2
// }

// console.log(addNum(2,3))

// In function expression we can't call the function before its initialization but in case of normal function we can call it before initialization because of hoisting concept.


// arrow function
 
// ()=>{}

    // const addNumber = (num1,num2)=>{
    //     return num1+num2
    // }

    // console.log(addNumber(2,5))

    // const addNumber = (num1,num2)=>num1+num2;
    // console.log(addNumber(3,9))

    // let arr = [10,8,20,35,25];
    // arr.sort((a,b)=>a-b)
    // console.log(arr)

    // const squNum = (num)=>num*num;
    // console.log(squNum(3))

    // if there is only one parameter then there is no need of parenthesis ()

    //e.g  const sqNum = num => num*num

    // in case of arrow function if we are using curly braces then this function expects a return keyword

    // In case of objects we have to use parenthesis ()

    // const greeting = () => ({name:"Yash",age:25})
    
    // console.log(greeting())


    // IIFE

    // ()()

    // (function greeting(){
    //     console.log("Hello Ji")
    // })()

    // (()=>{
    //     console.log("Hello Ji")
    // })()



    // callback function

    // A callback function is a function passed as an argument to another function . This allows the receiving function , often called higher-order-function, to execute the callback function at a specific point during its operation, typically after a particular task is completed.

    // function greet(){
    //     console.log("Hello Ji, Kaise ho")
    // }

    // function meet(){
    //     console.log("I am going to meet someone")
    // }

    // greet();
    // meet();

    function greet(){
        console.log("Hello Ji, Kaise ho")
    }

    function dance(){
        console.log("I am dancing")
    }

    function meet(callback){
        console.log("I am going to meet someone")
        callback();
    }

    // meet(greet);
    // meet(dance);

    // callback function make the function dynamic, in the above example we can see like in meet() function we can pass any parameter


    function blinkitOrderPlaced(){
        console.log("Blinkit order placed")
    }

    function zomatoOrderPlaced(){
        console.log("Zomato order placed")
    }

    function payment(amount,callback){
        console.log(`${amount} payment has initialized`);
        console.log("Payment is received");
        callback();
    }

    payment(2000,blinkitOrderPlaced)
    payment(3000,zomatoOrderPlaced)


