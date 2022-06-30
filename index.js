function callback(name) {
    return name;
}

function receivesAFunction(callback) {
    return callback();
}

function returnsANamedFunction() {
    return function thisIsMyFunction() {};
}

function returnsAnAnonymousFunction() {
    return function() {};
}