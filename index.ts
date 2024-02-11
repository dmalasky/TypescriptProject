

// Display output to terminal
function display(message: string): void{
    console.log(message)
}

display("We are going to count to '40' using the Fibonacci and Lucas sequences.\n")

// Recursion Demonstrations

// Fibonacci sequence
function fibonacci(num: number): number{
    if (num <= 1){
        return num
    }
    else{
        return fibonacci(num - 1) + fibonacci(num - 2)
    }     
}

// Lucas Number
function lucas(num: number): number{
    if (num == 0){
        return 2
    }
    else if(num == 1) {
        return 1
    }
    else{
        return lucas(num - 1) + lucas(num - 2)
    }     
}

console.log(`Fibbonacci number 40 = ${fibonacci(40)}`)
console.log(`Lucas number 40 = ${lucas(40)}`)
console.log('\n')

// Class Demonstration
class Instrument{
    constructor(private name: string, private classifcation: string) {}

    public getInstrument(): string {
        return `A ${this.name} is a ${this.classifcation} instrument`
    }

}

// List (array) demonstration
let instruments: Instrument[] = [
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
async function fetchUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}

// Async function to fetch a pokemon's (ditto) stats
async function fetchPokemon() {
    try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching pokemon:', error);
        throw error;
    }
}

// Calls both fetch functions and handles errors.
async function FetchAll() {
    try {
        const users = await fetchUsers();
        const weather = await fetchPokemon();
        console.log('Fetched users:', users);
        console.log(weather);
    } catch (error) {
        console.error('Error:', error);
    }
}

FetchAll()

