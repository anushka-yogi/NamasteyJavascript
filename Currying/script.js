//function currying using bind method
let multiply1 = function (x,y){
    console.log(x*y);
}
let multiplyByTwo = multiply1.bind(this,2);
multiplyByTwo(3);
let multiplyByThree = multiply1.bind(this,3);
multiplyByThree(10);
//function currying using closures
let multiply2 = function(x){
    return function (y){
        console.log(x*y);
    }
}
let multiplyByFour = multiply2(4);
multiplyByFour(10);
let multiplyByFive = multiply2(5);
multiplyByFive(10);
