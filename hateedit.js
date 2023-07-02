var integer = Number(
  prompt("please enter a number less than 10^63")
);

unit = [
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
teens = [
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
teens_up = [
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
upper_figures = [
  "thousand",
  "million",
  "billion",
  "trillion",
  "quadrillion",
  "quintillion",
  "sextillion",
  "septillion",
  "octillion",
  "nonillion",
  "decillion",
  "undecillion",
  "duodecillion",
  "tredecillion",
  "quattuordecillion",
  "quindecillion",
  "sexdecillion",
  "septendecillion",
  "octodecillion",
  "novemdecillion",
  "vigintillion",
];

function below_hundred(numb) {
  let su =
    numb < 10
      ? unit[numb]
      : numb < 20
      ? teens[numb % 10]
      : teens_up[Math.floor(numb / 10)] +
        (unit[numb % 10] ? "-" + unit[numb % 10] : "");
  return su;
}

function below_thousand(numb) {
  if (numb.toString().length < 3) {
    return below_hundred(numb);
  } else {
    let su = unit[Math.floor(numb / 100)] + " " + "hundred";
    let remainder = numb % 100;
    return su + (remainder ? " " + below_hundred(remainder) : "");
  }
}

function name_num(numb) {
  if (numb == 0) {
    return "zero";
  }
  let len = numb.toString().length;
  let base = 1000 ** Math.floor((len - 1) / 3);
  let index = Math.floor((len - 4) / 3);

  if (len < 4) {
    return below_thousand(numb);
  } else {
    let next = Math.floor(numb / base);
    let su = name_num(next);
    let remainder = numb % base;
    su += " " + upper_figures[index];
    return su + (remainder ? ", " + name_num(remainder) : "");
  }
}
console.log(name_num(integer));