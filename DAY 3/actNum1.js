function numberToWords(num) {
  if (num < 1 || num > 999) return "Number out of range";

  const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

  let words = "";

  const hundred = Math.floor(num / 100);
  const remainder = num % 100;

  if (hundred) words += ones[hundred] + " Hundred ";

  if (remainder >= 10 && remainder < 20) {
    words += teens[remainder - 10];
  } else {
    const ten = Math.floor(remainder / 10);
    const one = remainder % 10;
    if (ten) words += tens[ten] + " ";
    if (one) words += ones[one];
  }

  return words.trim();
}

console.log(numberToWords(999));