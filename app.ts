console.log('Hi, typescript')

const myNum = 45;
console.log(myNum)

const myName = 'Masum hossain';
console.log('My name is', myName)

// not allow
// let age = 232;
// age = 'twentty';
// age = true;
// age = 32;

let money: number = 343;
let rich: string = 'bye bye';
rich = 'ok lets play';
let bool: boolean = false;
bool = true;
console.log(money);
console.log(rich);
console.log(bool);


// function add(first:number, second:number){
//     const result = first + second;
//     return result;
// }
// console.log(add(23,21))


// multi purpose 
// function addNum(first: number | string, second: number | string): number | string {
//     const result: string | number = first + second;
//     return result;
// }
// const output: number = addNum(34, 23);
// const fullName = addNum('Masum', 'Hossain')

// function numFunc = (number: number): void{
//     console.log(2 * number)
// }