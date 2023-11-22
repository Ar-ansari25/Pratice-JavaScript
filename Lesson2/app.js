//print hellow World in javascript
console.log("Hellow Aman")
// aritmatic Operations  in JavaScript
let a=7;
let b=5;
//additon
let c= a+b;
//substrition
let d=a-b;
let e=a/b;
//division
let f=a*b;
//Multiplication
let g=a%b;
//Modulus
let h=a**b;
//Exponential
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)

//Increment & Decrement 
let i=10;
i++
console.log(i)

let j=20;
j--
console.log(j)

//ASSIGNMENT OPERATORS
let k= 15;
k+=5;
console.log(k)

let l=20;
l-=15;
console.log(l)

// logical OPerators
// And &&
let m=20;
let n=25;
cond1 = m<n;
cond2 = m==20;
console.log(cond1 && cond2);


let p=20;
let q=25;
cond1 = p<q;
cond2 = q==20;
console.log(cond1 && cond2);

let r=20;
let s=25;
cond1 = r<q;
cond2 = s==20;
console.log(cond1 || cond2);


//conditonational statement
// if statement
// let age=6;
// if(age>=18){
//     console.log(" You can vote")  
// }
// if (age<18){
//     console.log("You cant vote")
// }

//if-else statement

// let age=21;
// if(age>=21){
//     console.log("She Can Marry")
// }else{
//     console.log("She can not marry")
// }

// let num=15;
// if(num % 2===0){
//     console.log("number is Even")
// }else{
//     console.log("Number is odd")
// }

let age=30;
if(age<18){
    console.log("junior");
} else if(age>=30){
    console.log("senior")
}else{
    console.log("middle")
}

//patice Question 1
// get user inpur a number using prompt ("Enter a nunber") check the number is Multiple of 5or not?
// let num= prompt("Enter a number")
// if(num %5===0){
//     console.log(num,"Is amultiple of 5")
// }else{
//     console.log(num, "Is not amultiple of 5")
// }

//pretice Question 2
//write a code whhich can give grade to student according thair score
// 80-100 "A"
// 70-89  "B"
// 60-69  "C"
// 50-59  "D"
// 0-49   "F"

let score =95;
let grade;
if(score>=90 && score<=100){
    grade="A"
}else if(score>=70 && score<=89){
    grade="B"
}else if(score>=60 && score<=69){
    grade="C"
}else if(score>=50 && score<=59){
    grade="D"
}else if(score>=0 && score<=49){
    grade="F"
}
console.log("according to your score grade was:" ,grade) 


