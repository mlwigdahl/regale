
// the order is significant here...
// going to need some explicitly multitoken rules as well for inclusion marks, etc.
const rules = [ 
    /(?<sent_term>[\.\?!])/,
    /(?<dquote>")/,
    /(?<brack_start>\[)/,
    /(?<brack_end>\])/,
    /(?<paren_start>\()/,
    /(?<paren_end>\))/,
    /(?<slash>\/)/,
    /(?<star>\*)/,
    /(?<gt>\>)/,
    /(?<lt>\<)/,
    /(?<equal>=)/,
    /(?<at>@)/,
    /(?<colon>:)/,
    /(?<semi>;)/,
    /(?<comma>,)/,
    /(?<num>\d+)/,
    /(?<tok>[\w\-]+\'?[\w\-]*)/,
    /(?<squote>')/,
    /(?<plus>\+)/,
    /(?<minus>\-)/,
    /(?<nl>[\n\r])/,
    /(?<tab>\t)/,
    /(?<ws>\s+)/,
    /(?<junk>.+)/
];

export default rules;