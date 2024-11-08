let fruits = ["apple","mango","grapes","kiwi"];
console.log(fruits[0]);//index start from 0
console.log(fruits[1],fruits[0]);
console.log(fruits[5]);
// change an element
fruits[1]="orange";
console.log(fruits[1]);
// add an element in array
console.log(fruits[4]);
let fi=fruits.push("strawberry");//returns the total length of arry after pushing the element
console.log(fruits);
console.log(fi);
// remove an element
let fru =fruits.pop();//also returns the value that is removed
console.log(fruits);
console.log(fru);
// removes enement from the start of array and also returns the removed value
fruits.shift();
console.log(fruits);// adds enement in  the start of array and also returns the new length of array
fruits.unshift("banana");
console.log(fruits);
// slice takes two input parameters (copy from index no, gahan tak copy karna hi woh index no which will be excluded )
let copyFr=fruits.slice(1,2)
console.log(copyFr);
// SPLICE
console.log(fruits);
fruits.splice(2,1);//parameters(start from index ,no of elements to delete)
console.log(fruits);
fruits.splice(2,1,"banana");//parameters(start from index ,no of elements delete,element to add on that place)
console.log(fruits);
