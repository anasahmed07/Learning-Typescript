//         //   =========== Code Whisperer =========
// // ksi 2 type cheez ko 1 type main convert karny ko narrowing kehty hain 
// let age:number | string;
// age=20;  // narrowing
// age.toFixed(2)  // ye yahan number ky lye narrowing kar rha hai 
// age='Meer'  //narrowing
// let toUpperCase=age.toUpperCase() // ye yahan string ky lye narrowing kar rha hai
// console.log(toUpperCase);
//          // =========== type of =========
// //  varaible main jo bi data type hai vo type of hamain bata daita hai 
// let sage=123;
// // console.log(typeof sage); // this will print the data type of variable string 
// console.log(typeof sage == "number");  // true
// console.log(typeof sage == "string");  // false
// // ========= Math.random()========   0.00 -- 0.999 
// console.log(Math.random() > 0.6);
var fName = Math.random() > 0.6 ? "Meer" : 18; // Math.random agar 0.6 sy bara hai to meer print karo warna Mehmet print kar do
console.log(fName);
if (typeof fName == "string") // fName:string Narrowing
 {
    console.log(fName.toUpperCase());
}
else //  fName:number Narrowing
 {
    console.log(fName.toFixed(2));
}
// ======= null =======
var number = null;
var std1 = {
    name: "Meer",
    age: 18,
    address: {
        city: "Delhi",
        state: "Delhi"
    }
};
var myOrder = { food: "Biryani" };
var myfriendOrder = {
    food: "Biryani",
    drink: "Coffee"
};
var a = 20;
var b = "20";
// a=b will show an error 
var myTable = myfriendOrder;
// let myfriendTable:Deal2=myOrder;   // This will show error because drink is missing 
console.log(myTable);
