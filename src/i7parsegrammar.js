
// using RD parsing

// grammar structure is:

/*
 source
    title pb
    paragraph { pb paragraph }

title
    qt
    qt 'by' words
    qt 'by' qt

qt
    '"' words '"'

words
    tok
    tok words
*/ 

const grammar = [

];


export default grammar;