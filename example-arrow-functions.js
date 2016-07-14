var names = ['Andrew', 'Julie', 'Jen'];

names.forEach(function (name) {
    console.log('forEach', name);
});

// Using arrow functions

names.forEach((name) => {
    console.log('arrowFunc', name);
});

names.forEach((name) => console.log(name));

// Much simplified.  The value is returned automatically.
var returnMe = (name) => name + '!';
console.log(returnMe('Andrew'));

// anonymous functions have their own this binding, while arrow functions take on their parents this binding.
var person = {
    name: 'Andrew',
    greet: function () {
        names.forEach(function (name) {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};
person.greet();

var person2 = {
    name: 'Andrew',
    greet: function () {
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name)
        });
    }
};
person2.greet();

// Challenge Area
function add (a, b) {
    return a + b;
}

console.log(add(1,3));
console.log(add(9,0));

// Statement version (multiple lines)
var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(4,7));

// expression version
var addExpression = (a, b) => a + b;

console.log(addExpression(3,-2));
