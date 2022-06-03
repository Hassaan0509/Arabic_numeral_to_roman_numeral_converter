function convertToRoman(num) {
    let arabic = [];
    let j = 0
    let number;
    let roman = [];
    let temp;
    let output;
    let one = "I";
    let four = "IV";
    let five = "V";
    let nine = "IX";
    let ten = "X";
    let forty = "XL";
    let fifty = "L";
    let ninty = "XC";
    let hundred = "C";
    let four_hundred = "CD";
    let five_hundred = "D";
    let nine_hundred = "CM";
    let thousand = "M";
    let val;
    let val1;
    let val2;
    while (num >= 10) {
        arabic[j] = num % 10;
        num = parseInt(num / 10);
        j++;
    }

    arabic[arabic.length] = num;
    j = 0;
    
    for (let i = 0; i < arabic.length; i++) {
    
        if (i === 0) {
            val = one;
            val1 = four;
            val2 = nine;
        }
    
        else if (i === 1) {
            val = ten;
            val1 = forty;
            val2 = ninty;
        }
    
        else if (i === 2) {
            val = hundred;
            val1 = four_hundred;
            val2 = nine_hundred;
        }
    
        else if (i === 3) {
            val = thousand;
        }
    
        number = parseInt(arabic[i] / 5);
    
        if (number != 0) {
    
            if (i === 0) {
                roman[j] = five;
            }
    
            else if (i === 1) {
                roman[j] = fifty;
            }
    
            else if (i === 2) {
                roman[j] = five_hundred;
            }
    
            else if (i === 3) {
                roman[j] = thousand.repeat(5);
            }
        }
    
        number = arabic[i] % 5;
    
        if (number != 0) {
    
            if (roman[j] === undefined) {
                roman[j] = val.repeat(number);
    
                if (number == 4) {
                    roman[j] = val1;
                }
    
                j++;
            }
    
            else {
                roman[j] += val.repeat(number);
    
                if (number == 4) {
                    roman[j] = val2;

                }
    
                j++;
            }
        }
    }
    
    for (let i = 0; i < roman.length / 2; i++) {
        temp = roman[i];
        roman[i] = roman[roman.length - i - 1];
        roman[roman.length - i - 1] = temp;
    }
    console.log(roman)
    output = roman.join("");
    return output;
}


let a = convertToRoman(6623);
console.log(a);