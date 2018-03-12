
// the parser will go here

let cur;
let gTokens;
let gInd = 0;

function ntok() {
    if (gInd == gTokens.length) {
        error(`ntok: out of tokens at ${gInd}`);
    }
    cur = gTokens[gInd++];
}

function error(err) {
    console.log(err);
}

function accept(tok) {
    if (cur == tok) {
        ntok();
        return true;
    }
    return false;
}

function expect(tok) {
    if (accept(tok)) return true;
    error("expect: unexpected symbol");
    return false;
}

function parse(tokens, grammar)
{
    // set up the globals
    gTokens = tokens;
    return;
}

export default parse;