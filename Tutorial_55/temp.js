// var a=10     // Avoid using var as it is globally scoped ....
// var b=10
// console.log(a+b)
// alert(a+b)
// console.log(typeof a, typeof b)


// Use 'let' mostly 
let a=10      // let is block scoped 
let b=10
let c="Ekshith"
console.log(a+b)
alert(a+b)
console.log(typeof a, typeof b,typeof c)

let d=null;
let e=undefined;
let f="Ekshith"
let g=123;
let h=123.333
let i=true;
 
console.log(d,e,f,g,h,i)
console.log(typeof d,typeof e,typeof f,typeof g,typeof h,typeof i)

let o={
    "name":"Ekshith",
    "age":20
}
o.salary="20lakh"
console.log(o)