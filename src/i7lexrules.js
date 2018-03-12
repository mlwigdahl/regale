
// the order is significant here...
// probably going to need some explicitly multitoken rules as well for inclusion marks, etc.

const rules = [
    { key: 'nl',            regex: /([\n\r]+)/ },
    { key: 'tab',           regex: /(\t)/ },
    { key: 'ws',            regex: /(\s+)/ },
    { key: 'num',           regex: /([\d\.]+?[\d,\.]+)/ },
    { key: 'tok',           regex: /([\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+?[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-']*[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+?|[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-])/ },
    { key: 'sent_term',     regex: /([\.\?!])/ },
    { key: 'dquote',        regex: /(")/ },
    { key: 'brack_start',   regex: /(\[)/ },
    { key: 'brack_end',     regex: /(\])/ },
    { key: 'paren_start',   regex: /(\()/ },
    { key: 'paren_end',     regex: /(\))/ },
    { key: 'misc',          regex: /([\{\}\/\*\|><=@:;,\+-])/ },
    { key: 'squote',        regex: /(')/ },
    { key: 'junk',          regex: /(.+)/ },
];

export default rules;