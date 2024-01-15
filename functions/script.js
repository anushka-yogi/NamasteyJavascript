var x = "x defined globally" ;
console.log(x);
console.log(a);
console.log(b);
a();
b();
function a (){
    var x = "x defined inside function a" ;
    console.log(x);
}
function b (){
    var x = "x defined inside function b" ;
    console.log(x);
}
