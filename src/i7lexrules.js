
// the order is significant here...
// probably going to need some explicitly multitoken rules as well for inclusion marks, etc.

const rules = [
    /([\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+?[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-']*[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+?|[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-])/,
    /([\.\?!])/,
    /(")/,
    /(\[)/,
    /(\])/,
    /(\()/,
    /(\))/,
    /([\{\}\/\*\|><=@:;,\+-])/,
    /([\d\.]+?[\d,\.]+)/,
    /(')/,
    /([\n\r])/,
    /(\t)/,
    /(\s)/,
    /(.+)/
];

const rulemap = [
    "tok",
    "sent_term",
    "dquote",
    "brack_start",
    "brack_end",
    "paren_start",
    "paren_end",
    "misc",
    "num",
    "squote",
    "nl",
    "tab",
    "ws",
    "junk"
];

const exp = { rules, rulemap };
export default exp;