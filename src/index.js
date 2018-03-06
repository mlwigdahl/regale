
import lexer from "./i7lex.js";
import rules from "./i7lexrules.js";
import getText from "./input.js";

// main file...

const text = getText(undefined);
let lexOut = lexer(text, rules);

const errors = lexOut.tokens.reduce((a,v,i)=> {
    if (v.type == 'junk') { ++a.junk; a.badTokens.push({...v, index: i}); }
    else if (v.type == 'error') { ++a.error; a.badTokens.push({...v, index: i}); }
    return a;
}, { junk: 0, error: 0, badTokens: [] });

console.log(errors);
console.log(lexOut.tokens.length);
console.log(lexOut.time);