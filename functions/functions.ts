console.log("Hello World");
function meme(){
    return("Moye Moye");
};
let message = meme();
console.log(message);
function sum(num1:number,num2:number)/*these are the parameters we define when creating a function*/:number{
    let c = num1+num2;
    return c;
};
console.log(sum(5,6)/*when we call functions we have to define the defined parameters which are called arguments here*/);
function sub(num1:number,num2:number):number{
    let d = num1-num2;
    return d;
};
function mul(num1:number, num2:number):number{
    let e = num1*num2;
    return e;
};
function div(num1:number, num2:number):number{
    let f = num1/num2;
    return f;
};
console.log(mul(5,6));
console.log(div(5,2));
console.log(sub(9,9));
console.log(sum(10,11));

function printFullName(firstName:string, lastName:string):string{
    return `${firstName} ${lastName}`
};
let costumerName = printFullName("Anas", "Ahmed");
console.log(costumerName);

//DEFAULT PARAMETERS
function printName(firstName:string, lastName="shaikh"):string{
    return `${firstName} ${lastName}`
};
let defName = printName("Anas");
console.log(defName);

//ARROW FUNCTION/LAMDA FUNCTION (=>)

    let greet =()=> "Hello World";
let result = greet();
console.log(result);
console.log('ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

function factorial(n:number):number{
    if (n<=0){return 1}
    else{
    return n*factorial(n-1)}
}
let factorialResponse=factorial(5)
console.log(factorialResponse);