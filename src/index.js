
import lexer from "./i7lex.js";
import rules from "./i7lexrules.js";
import text from "./input.js"; // this is fake, eventually need to get this from disk

// main file...

let tokens = lexer(text, rules);

const errors = tokens.reduce((a,v,i)=> {
    if (v.type == 'junk') { ++a.junk; a.badTokens.push({...v, index: i}); }
    else if (v.type == 'error') { ++a.error; a.badTokens.push({...v, index: i}); }
    return a;
}, { junk: 0, error: 0, badTokens: [] });

console.log(errors);
//console.log(tokens);