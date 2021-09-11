"use strict";
const salary = 5645;
const friendSalaries = [232, 45, 346, 567, 564];
const friends = ['masum', 'hossain', 'kabir', 'sabbir'];
friendSalaries[0] = 2332;
friendSalaries.push(1211);
/* not allow
friendSalaries[2] = '23233'
*/
friendSalaries[2] = 23233;
console.log(friendSalaries);
