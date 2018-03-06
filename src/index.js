
import lexer from "./i7lex.js";
import lexrules from "./i7lexrules.js";
import io from "./input.js";

// main file...

const text = io.getInput("bronze.txt");
let lexOut = lexer(text, lexrules.rules, lexrules.rulemap);

const errors = lexOut.tokens.reduce((a,v,i)=> {
    if (v.type == 'junk') { ++a.junk; a.badTokens.push({...v, index: i}); }
    else if (v.type == 'error') { ++a.error; a.badTokens.push({...v, index: i}); }
    return a;
}, { junk: 0, error: 0, badTokens: [] });

io.writeOutput("output.out", lexOut.tokens.reduce((a,v)=> {
    a += `${v.type}: ${v.value} `;
    return a;
}, ''));

console.log(errors);
console.log(lexOut.tokens.length);
console.log(lexOut.time);