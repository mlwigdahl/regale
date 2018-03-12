
import { performance } from "perf_hooks";

function lex(text, rules) {
    const t0 = performance.now();
    let tokens = output(applyRules(text, assembleRules(rules)), rules);
    return { tokens, time: (performance.now() - t0) };
}

function applyRules(text, rules) {
    let result, results=[];
    while ((result = rules.exec(text)) !== null) {
        if (results.length > 0 && result.index === results[results.length-1].index) break;
        results.push(result);
    }
    return { results, rules };
}

function assembleRules(rules) {
    let concat = rules.reduce((a, v) => { return a += v.regex.source + '|'; }, '').slice(0, -1);
    return new RegExp(concat, 'muy'); // sticky, Unicode, and multiline by default
}

function output(tokens, rules) {
    return tokens.results.map(v=>{
        for (const i in v) {
            if (i > 0 && v[i] !== undefined) { return { type: rules[i-1].key, value: v[i] }; }
        }
        return { type: "error", value: "error" };
    });
}

export default lex;