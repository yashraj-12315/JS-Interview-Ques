// function constructor is a function which is used to create multiple objects with same properties and methods. It is a blueprint for creating objects. It is a special type of function which is used to create objects. It is called as constructor function. It is a convention to start the name of constructor function with capital letter.

//function constructor

// function Person(fname,lname,age,contact){
//     this.fname = fname;
//     this.lname = lname;
//     this.age = age;
//     this.contact = contact;
//     this.getName = function(){
//         console.log(this.fname,this.lname)
//     }
// }

// const person1= new Person("Yash","Raj",22,1234567890);
// const person2= new Person("Ayush","Raj",21,1234597890);

// console.log(person1)
// console.log(person2)
// person2.getName();

//Object literal

// const person = {
//     fname:"Yash",
//     lname:"Raj",
//     age:22,
//     contact:1234567890,
//     getName:function(){
//         console.log("Yash")
//     }
// }

// const p1 = {
//     fname:"Ayush",
//     lname:"Raj",
//     age:21,
//     contact:1234597890,
//     getName:function(){
//         console.log("Ayush")
//     }
// }

// console.log(person)

// after ES6 we have class which is a syntactical sugar over constructor function. It is a blueprint for creating objects. It is a special type of function which is used to create objects. It is called as class. It is a convention to start the name of class with capital letter.

class Person{
    constructor(fname,lname,age,contact){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.contact = contact;
    }
    getName(){
        console.log(this.fname,this.lname)
    }
}

const person1= new Person("Yash","Raj",22,1234567890);
const person2= new Person("Ayush","Raj",21,1234597890);

console.log(person1) 
console.log(person2)
person2.getName();