"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Display output to terminal
function display(message) {
    console.log(message);
}
display("We are going to count to '40' using the Fibonacci and Lucas sequences.\n");
// Recursion Demonstrations
// Fibonacci sequence
function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
// Lucas Number
function lucas(num) {
    if (num == 0) {
        return 2;
    }
    else if (num == 1) {
        return 1;
    }
    else {
        return lucas(num - 1) + lucas(num - 2);
    }
}
console.log(`Fibbonacci number 40 = ${fibonacci(40)}`);
console.log(`Lucas number 40 = ${lucas(40)}`);
console.log('\n');
// Class Demonstration
class Instrument {
    constructor(name, classifcation) {
        this.name = name;
        this.classifcation = classifcation;
    }
    getInstrument() {
        return `A ${this.name} is a ${this.classifcation} instrument`;
    }
}
// List (array) demonstration
let instruments = [
    new Instrument("tuba", "brass"),
    new Instrument("violin", "string"),
    new Instrument("clarinet", "woodwind"),
    new Instrument("trumpet", "brass"),
];
// Displays Instruments
instruments.forEach(instrument => {
    console.log(instrument.getInstrument());
});
// Async Function to fetch users
function fetchUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch('https://jsonplaceholder.typicode.com/users');
            let data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Error fetching users:', error);
            throw error;
        }
    });
}
// Async function to fetch a pokemon's (ditto) stats
function fetchPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let response = yield fetch('https://pokeapi.co/api/v2/pokemon/ditto');
            let data = yield response.json();
            return data;
        }
        catch (error) {
            console.error('Error fetching pokemon:', error);
            throw error;
        }
    });
}
// Calls both fetch functions and handles errors.
function FetchAll() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield fetchUsers();
            const weather = yield fetchPokemon();
            console.log('Fetched users:', users);
            console.log(weather);
        }
        catch (error) {
            console.error('Error:', error);
        }
    });
}
FetchAll();
