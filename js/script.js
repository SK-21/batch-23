// ES6
// let/ const

// var is function scoped

// let is block


{
    // block in js
}

function myFunc(){
    if(true){

        var flag = true; //function scoped
        let localFlag = "localFlag";  //block scoped
        console.log("inside block");
        console.log(flag);
        console.log(localFlag);
    }
    console.log("outside block");
    console.log(flag);
    // console.log(localFlag);
}

myFunc();
// console.log(flag);


let variable;

variable = 1123;
const PI =3.14;  


// PI = 3;


// DataTypes in JS


/**
 * String
 * Number
 * boolean
 * objects
 * null->object
 * undefined ->type
 * NaN
 */

let s = "Hello World!"
s.length
console.log(s.toUpperCase());
console.log(s.substring(6,11));

let numStr = "abc1abc32abc";
console.log(parseInt(numStr));
console.log(+numStr);
let num = 10000000;

console.log(num.toLocaleString("en-in"));
console.log(num.toLocaleString());


// boolean

true
false


// non-truthy - treated as boolean false
    0
    ''
    ""
    NaN
    undefined
    null

// const emp = {
//     empId:101,
//     dept:"Engg"
// }


// console.log(emp.dept,emp.empId);
// let emp2 = null;

// function func(arg1,arg2){

// }
let func = (arg1,arg2)=>{

}

func = ()=>{console.log("abc")};
func = num=>num*2;
// func = ()=>{
//     return   "abc"
// };

func();


// callbacks -> function passed as argument


const fun1 = (cb)=>{
    console.log("function 1");
    cb();
};

const fun2 = ()=>{
    console.log("function 2")
};


fun1(fun2);


const arr = [1,2,3,4,5,6,7,8,9,10];

// const fn = (value,index,arr)=>console.log(value,index);
// arr.forEach(fn);

arr.forEach((value,index,arr)=>console.log(value,index));

// map method -> exactly like forEach and it return a new array
const arrPlus10 = arr.map((val,index)=>val+10);

console.log(arrPlus10);

const evenArr = arr.filter(e=>e%2===0);

// even squares

const evenSquares = arr.filter(e=>!(e%2)).map(e=>e*e);

// reduce = sum of values, product of values
// const arr = [1,2,3,4,5,6,7,8,9,10];
// arr.reduce(cb)
const sum = arr.reduce((prev,curr)=>{
    console.log(prev,curr,prev+curr);
    return prev+curr;
})

// const product = arr.reduce((prev,curr)=>prev*curr)
// console.log(sum);
// console.log(product);

console.log(arr.filter((e)=>e%2).map((e)=>e*e).reduce((pre,curr)=>pre+curr));

// ES6 Destructuring

// [1,2,3,[4,5,6],7,8,9,10];

// const [,,el1,el2,,,,,el3] = arr;
const [el1,el2,...rest] = arr;

console.log(el1,el2,rest);



const sumNumbers = (...rest)=>{
    console.log(rest);
};

sumNumbers(1,2,3,4)
sumNumbers(1,2)
// const arr = [1,2,3,4,5,6,7,8,9,10];

// const arr2 = arr.map(e=>e);

const arr1 = [1,2,3,[4,[5,[6]]],7,8,9] 
const arr2 = [...arr1] 
arr1[3][0] = 9
console.log(arr1,arr2);


// Object Destructing;
const emp = {
    empId:101,
    dept:["Engg"],
    salary:{
        amount:100000,
        currency:'INR',
        bankDetails:{
            bankAccountNumber:123123123,
            IFSC:"ABCD12345"

        }
    }
}

// not recommended
// const emp2 = emp1;

// const emp2 = {...emp}

// emp2.empId = 102;
const emp2 = {...emp,dept:[...emp.dept] ,empId:102,salary:{...emp.salary,bankDetails:{...salary.bankDetails}}};


emp.salary.amount = 200000;
console.log(emp,emp2);

