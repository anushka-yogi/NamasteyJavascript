let name1 = {
    firstName : "Hello" ,
    lastName  : "World" ,
}
 
let name2 = {
    firstName : "Call",
    lastName  : "Method",
}

let printFullName = function (hometown,state,country) {
    console.log(this.firstName + " " + this.lastName + " from " + hometown + " , " + state + " , " + country + " . ");
}

// function borrowing 
// call method
printFullName.call(name1,"Gurgaon","Delhi NCR","India");
printFullName.call(name2,"Gurgaon","Delhi NCR","India");

//apply method
let name3 = {
    firstName : "Apply" ,
    lastName  : "Method" ,
}
 
let name4 = {
    firstName : "Java",
    lastName  : "Script",
}
printFullName.apply(name3,["Gurgaon","Delhi NCR","India"]);
printFullName.apply(name4,["Gurgaon","Delhi NCR","India"]);

//Bind Method
let name5 = {
    firstName : "Bind" ,
    lastName  : "Method" ,
}
 
let name6 = {
    firstName : "Java",
    lastName  : "Script",
}
let printMyName1 = printFullName.bind(name5,"Gurgaon","Delhi NCR","India");
let printMyName2 = printFullName.bind(name6,"Gurgaon","Delhi NCR","India");
console.log(printMyName1);
console.log(printMyName2);
printMyName1();
printMyName2();