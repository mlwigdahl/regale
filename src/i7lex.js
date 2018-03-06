
import { performance } from "perf_hooks";

function lex(line, rules, rulemap) {
    const t0 = performance.now();
    let tokens = output(applyRules(line, assembleRules(rules)), rulemap);
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
    return new RegExp(concat, 'muy'); // sticky, Unicode, and multiline by default
}

function output(tokens, rulemap) {
    return tokens.map(v=>{
        for (const i in v) {
            if (i > 0 && v[i] !== undefined) { return { type: rulemap[i-1], value: v[i] }; }
        }
        return { type: "error", value: "error" };
    });
}

export default lex;