//traditional bind method
let name1 = {
    firstname : "Hello",
    lastName  : "World"
}
let printName1 = function (){
    console.log(this.firstname + " " + this.lastName);
}

let printMyName1 = printName1.bind(name1);
printMyName1();

//manual bind method
let name2 = {
    firstname : "Hello_Hello",
    lastName  : "World_World"
}
let printName2 = function (hometown,state,country){
    console.log(this.firstname + " " + this.lastName + " , " + hometown + " , " + state + " , " + country);
}

Function.prototype.myBind = function(...args){
    let object = this ;
    params = args.slice(1);
    return function(...args2){
        object.apply(args[0],[...params,...args2]);
    } 
}

let printMyName2 = printName2.myBind(name2,"Gurgaon");
printMyName2("Delhi NCR","India");
