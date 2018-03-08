
import lexer from "./i7lex.js";
import rules from "./i7lexrules.js";
import parser from "./i7parse.js";
import grammar from "./i7parsegrammar.js";
import io from "./input.js";

// main file...

const text = io.getInput("bronze.txt");
let lexOut = lexer(text, rules);

const lexErr = lexOut.tokens.reduce((a,v,i)=> {
    if (v.type == 'junk') { ++a.junk; a.badTokens.push({...v, index: i}); }
    else if (v.type == 'error') { ++a.error; a.badTokens.push({...v, index: i}); }
    return a;
}, { junk: 0, error: 0, badTokens: [] });

if (lexErr.junk == 0 && lexErr.error == 0) {
    // we now have a nice clean token array we can feed to the parser...    
    let parseOut = parser(lexOut, grammar); // more here...
}

io.writeOutput("bronze.out", lexOut.tokens.reduce((a,v)=> {
    a += `${v.type}: ${v.value}
`;
    return a;
}, ''));

console.log(lexErr);
console.log(lexOut.tokens.length);
console.log(lexOut.time);