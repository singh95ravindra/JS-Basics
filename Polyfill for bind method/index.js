let name = {
    firstname: "Ravinder",
    lastname: "Singh",
}

printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + ", " + hometown + ", " + state);
}

let bindPrintFullName = printFullName.bind(name,"Faridabad", "Haryana");
console.log(bindPrintFullName);
bindPrintFullName();

Function.prototype.myBind = function (...args) {
    let obj = this,
    params = args.slice(1);
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2]);
    }
}

let bindPrintFullName2 = printFullName.myBind(name);
console.log(bindPrintFullName2);
bindPrintFullName2("Badha", "Haryana");