
// regale prototype main file

const line = 'Bob is a man.  "Bob is one scary dude.  His hair is currently [bob-hair-color]."';

function lex(line) {
    return line.split(' '); // actual logic will need to be slightly more complex...
}

let tokens = lex(line);
console.log(tokens);