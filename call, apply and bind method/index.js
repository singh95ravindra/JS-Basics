let name = {
    firstname: "Ravinder",
    lastname: "Singh",
}

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

// a function to print full name
printFullName = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", " + state);
}

// invoking call method on a function
printFullName.call(name, "Faridabad", "Haryana");

// invoking apply method on a function
printFullName.apply(name2, ["Mumbai", "Maharastra"]);

// binding bind method on a function
let bindFullName = printFullName.bind(name2, "abc", "xyz");

console.log(bindFullName);

// invoking binded method
bindFullName();