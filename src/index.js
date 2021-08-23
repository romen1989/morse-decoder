const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let n = 0;
    let result = '';
    while(n < expr.length) {
        let str = expr.substring(n, n + 10);
        let buffer = '';
        if (str === '**********') {
            result = result + ' ';
        } else {
            for (let i = 0; i < str.length; i += 2) {
                let symbol = str.substring(i, i + 2);
                if (symbol === '10') {
                    buffer = buffer + '.';
                } else if (symbol === '11') {
                    buffer = buffer + '-';
                }
            }
            result = result + MORSE_TABLE[buffer];
        }
        n = n + 10; 
    }
    return result;
}

module.exports = {
    decode
}