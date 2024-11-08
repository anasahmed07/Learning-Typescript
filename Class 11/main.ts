
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

let fName=Math.random()>0.6 ? "Meer" : 18;  // Math.random agar 0.6 sy bara hai to meer print karo warna Mehmet print kar do

console.log(fName);
if(typeof fName=="string")  // fName:string Narrowing
{
    console.log(fName.toUpperCase());
}else                     //  fName:number Narrowing
{
    console.log(fName.toFixed(2));
}

               // ======= null =======

let number:null=null;

                //    ===== interface ======
                // object ki data type banany ky lye use hota hai 
                    

                interface Address{
                    city:string;
                    state:string;
                }
    
    interface Student{
        name:string;
        age:number;
        address:Address;
    }
    let std1:Student={
        name:"Meer",
        age:18,
        address:{
            city:"Delhi",
            state:"Delhi"
        }
        };


//  ============ Example of interface ======================== 

interface Deal1{
    food:string
}
interface Deal2{
    food:string
    drink:string
}
let   myOrder:Deal1={food:"Biryani"}

let myfriendOrder:Deal2={
    food:"Biryani",
    drink:"Coffee"
}

let a:number=20;
let b:string="20"
// a=b will show an error 

let myTable1:Deal1=myfriendOrder;   /// stale object ky case main extra property allow kar daita hai 


let myTable:Deal1={
    food:"Biryani",
    drink:"Coffee"
}                      // fresh object ky cas main extra property allow ni karta 

// let myfriendTable:Deal2=myOrder;   // This will show error because drink is missing 
console.log(myTable);  // this will print the value of myfriendTable    because myTable has value of myfriendOrder 







