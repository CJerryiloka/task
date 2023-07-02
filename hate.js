var integer = Number(
    prompt("please enter a number less than 1 quadrillion(10^15)")
);

function Verbose(integer) {
    this.unit = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    this.teens = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    this.teens_up = [
        "",
        "",
        "twenty",
        "thirty",
        "fourty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    this.integer_array = Array.from(String(integer), Number);
    this.integer = integer;
    this.suffix = " ";

    this.below_hundred = function (numb) {
        let su =
            numb < 10
                ? this.unit[numb]
                : numb < 20
                    ? this.teens[numb % 10]
                    : this.teens_up[Math.floor(numb / 10)] +
                    (this.unit[numb % 10] ? "-" + this.unit[numb % 10] : "");
        return su;
    };

    this.below_thousand = function (numb) {
        if (numb.toString().length < 3) {
            console.log('below thousand');
            return this.below_hundred(numb);
        } else {
             
        let su =
            this.unit[Math.floor(numb / 100)] + " " + 'hundred';
        let remainder = numb % 100;
        return su + (remainder ? " " + this.below_hundred(remainder) : "");
        }
    };

    this.below_million = function (numb) {
        if (numb.toString().length < 4) {
            console.log('below million');
             return this.below_thousand(numb);
         } else {
        let next = Math.floor(numb / 1000);
        let su = this.below_thousand(next);
        let remainder = numb % 1000;
        su += ' thousand';
        return su + (remainder ? ', ' + this.below_thousand(remainder) : "" );
         }
    };

    this.below_billion = function (numb) {
        if (numb.toString().length < 7) {
            console.log('below billion');
             return this.below_million(numb);
         } else {
        let next = Math.floor(numb / 1000000);
        let su = this.below_million(next);
        let remainder = numb % 1000000;
        su += ' million';
        return su + (remainder ? ', ' + this.below_million(remainder) : "" );
         }
    };

    this.below_trillion = function (numb) {
        if (numb.toString().length < 10) {
            console.log('below trillion');
             return this.below_billion(numb);
         } else {
        let next = Math.floor(numb / 1000000000);
        let su = this.below_billion(next);
        let remainder = numb % 1000000000;
        su += ' billion';
        return su + (remainder ? ', ' + this.below_billion(remainder) : "" );
         }
    };

    this.below_quadrillion = function (numb) {
        if (numb.toString().length < 13) {
            console.log('below quadrillion');
             return this.below_trillion(numb);
         } else {
        let next = Math.floor(numb / 1000000000000);
        let su = this.below_trillion(next);
        let remainder = numb % 1000000000000;
        su += ' trillion';
        return su + (remainder ? ', ' + this.below_trillion(remainder) : "" );
         }
    };

 
}

let verbose = new Verbose(integer);

    if (integer === 0) {
        console.log('zero');
    }else if(integer === 1000000000000000) {
        console.log("one quadrillion");
    } else { console.log(verbose.below_quadrillion(integer));
    }

  