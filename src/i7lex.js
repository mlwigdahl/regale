
import { performance } from "perf_hooks";

function lex(line, rules) {
    const t0 = performance.now();
    let tokens = output(applyRules(line, assembleRules(rules)).map(v=>v.groups));
    return { tokens, time: (performance.now() - t0) };
}

function applyRules(line, rules) {
    let result, results=[];
    while ((result = rules.exec(line)) !== null) {
        if (results.length > 0 && result.index === results[results.length-1].index) break;
        results.push(result);
    }
    return results;
}

function assembleRules(rules) {
    let concat = rules.reduce((a, v) => { return a += v.source + '|'; }, '').slice(0, -1);
    return new RegExp(concat, 'umy'); // sticky, Unicode, and multiline by default
}

function output(tokens) {
    return tokens.map(v=>{
        // apparently the object we're working with (at least in V8) does not have a standard 
        // hasOwnProperties prototype function.  Assume all params are own...
        for (const key in v) {
            if (v[key] !== undefined) { return { type: key, value: v[key] }; }
        }
        return { type: "error", value: "error" };
    });
}

export default lex;