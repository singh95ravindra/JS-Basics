let multiply = function(x, y){
    console.log(x * y);
}

// funtion currying using bind method
multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

// funtion currying using closure
let multiplyByClosure = function(x){
    return function(y){
        console.log(x * y);
    }
}

multiplyByTwo2 = multiplyByClosure(2);
multiplyByTwo2(10);

multiplyByThree2 = multiplyByClosure(3);
multiplyByThree2(7);