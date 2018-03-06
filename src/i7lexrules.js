
// the order is significant here...
// going to need some explicitly multitoken rules as well for inclusion marks, etc.
/*const rules = [ 
    /(?<sent_term>[\.\?!])/,
    /(?<dquote>")/,
    /(?<brack_start>\[)/,
    /(?<brack_end>\])/,
    /(?<paren_start>\()/,
    /(?<paren_end>)\)/,
    /(?<brace_start>\{)/,
    /(?<brace_end>\})/,
    /(?<slash>\/)/,
    /(?<star>\*)/,
    /(?<bar>\|)/,
    /(?<gt>>)/,
    /(?<lt><)/,
    /(?<equal>=)/,
    /(?<at>@)/,
    /(?<colon>:)/,
    /(?<semi>;)/,
    /(?<comma>,)/,
    /(?<num>\d+)/,
//    /(?<tok>[\w\-]+'?[\w\-]*)/,
    /(?<tok>([\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-']*[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+)|[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-])/,
    /(?<squote>')/,
    /(?<plus>\+)/,
    /(?<minus>-)/,
    /(?<nl>[\n\r])/,
    /(?<tab>\t)/,
    /(?<ws>\s+)/,
    /(?<junk>.+)/
];*/

const rules = [ 
    /(?<sent_term>[\.\?!])/,
    /(?<dquote>")/,
    /(?<brack_start>\[)/,
    /(?<brack_end>\])/,
    /(?<paren_start>\()/,
    /(?<paren_end>)\)/,
    /(?<misc>[\{\}\/\*\|><=@:;,\+-])/,
    /(?<num>\d+)/,
//    /(?<tok>[\w\-]+'?[\w\-]*)/,
    /(?<tok>([\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-']*[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-]+)|[\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}\-])/,
    /(?<squote>')/,
    /(?<nl>[\n\r])/,
    /(?<tab>\t)/,
    /(?<ws>\s+)/,
    /(?<junk>.+)/
];

export default rules;