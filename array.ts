const salary: number = 5645;
const friendSalaries: number[] = [232,45,346,567,564];
const friends: string[] = ['masum', 'hossain', 'kabir', 'sabbir'];
friendSalaries[0] = 2332;
friendSalaries.push(1211);
/* not allow 
friendSalaries[2] = '23233' 
*/
friendSalaries[2] = 23233;
console.log(friendSalaries);

/* not allow
let max = '0';
for(const salary of friendSalaries){
    if(salary > max){
        max = salary;
    }
} */

let max = 0;
for(const salary of friendSalaries){
    if(salary > max){
        max = salary;
    }