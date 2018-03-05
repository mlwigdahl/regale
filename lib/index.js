'use strict';

// regale prototype main file

var line = 'Bob is a man.  "Bob is one scary dude.  His 42 hairs are currently [bob-hair-color]."\n\nBob has a value called bob-hair-color.  Bob-hair-color defaults to red;\n\nThe bob-rule is:\n\tif bob-hair-color is not red:\n\t\tnow bob-hair-color is red.';

function lex(line, rules) {
    var result = void 0,
        results = [];
    var val = 0;
    console.log(rules);
    while ((result = rules.exec(line)) !== null) {
        results.push(result);
        val++;
        if (val > 100) break;
    }
    return results;
}

function assembleRules(rules) {
    var concat = rules.reduce(function (a, v) {
        return a += v.source + '|';
    }, '').slice(0, -1);
    return new RegExp(concat, 'my'); // sticky and multiline by default
}

function output(tokens) {
    var lean = tokens.map(function (v) {
        // apparently the object we're working with does not have a standard hasOwnProperties prototype function.  Assume all params are own...
        for (var key in v) {
            if (v[key] !== undefined) {
                return { type: key, value: v[key] };
            }
        }
        return { type: "error", value: "error" };
    });

    console.log(lean);
}

var tokens = [];
// the order is significant here...
// probably need to shift the whitespace stuff to explicitly track newlines and tabs...
var rules = [/(?<sent_term>\.)/, /(?<quote>\")/, /(?<brack_start>\])/, /(?<brack_end>\])/, /(?<colon>\:)/, /(?<num>\d+)/, /(?<tok>[\w\-]+)/, /(?<nl>[\n\r])/, /(?<tab>\t)/, /(?<ws>\s+)/, /(?<junk>.+)/];

tokens = lex(line, assembleRules(rules)).map(function (v) {
    return v.groups;
});
output(tokens);