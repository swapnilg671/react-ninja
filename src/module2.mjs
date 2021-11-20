//b is exported from module 1 and it is named as ui here 

import ui, {a,c}from './module1.mjs';
console.log("Default export of b from Module 1")
console.log(ui);
console.log("export of a and c from Module 1")
console.log(a);
console.log(c)