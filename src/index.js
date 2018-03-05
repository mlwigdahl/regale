
// regale prototype main file

const line = `Bob is a man.  "Bob is one scary dude.  His 42 hairs are currently [bob-hair-color]."

Bob has a value called bob-hair-color.  Bob-hair-color defaults to red;

The bob-rule is:
	if bob-hair-color is not red:
		now bob-hair-color is red.`

function lex(line, rules) {
    let result, results=[];
    let val = 0;
    console.log(rules);
    while ((result = rules.exec(line)) !== null) {
        results.push(result);
        val++;
        if (val > 100) break;
    }
    return results;
}

function assembleRules(rules) {
    let concat = rules.reduce((a, v) => { return a += v.source + '|'; }, '').slice(0, -1);
    return new RegExp(concat, 'my'); // sticky and multiline by default
}

function output(tokens) {
    const lean = tokens.map(v=>{
        // apparently the object we're working with does not have a standard hasOwnProperties prototype function.  Assume all params are own...
        for (const key in v) {
            if (v[key] !== undefined) { return { type: key, value: v[key] }; }
        }
        return { type: "error", value: "error" };
    });

    console.log(lean);
}

let tokens = [];
// the order is significant here...
// probably need to shift the whitespace stuff to explicitly track newlines and tabs...
const rules = [ 
    /(?<sent_term>\.)/,
    /(?<quote>\")/,
    /(?<brack_start>\])/,
    /(?<brack_end>\])/,
    /(?<colon>\:)/,
    /(?<num>\d+)/,
    /(?<tok>[\w\-]+)/,
    /(?<nl>[\n\r])/,
    /(?<tab>\t)/,
    /(?<ws>\s+)/,
    /(?<junk>.+)/
];

tokens = lex(line, assembleRules(rules)).map(v=>v.groups);
output(tokens);