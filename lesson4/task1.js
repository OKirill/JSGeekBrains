function numToObj(number) {
    var digit = {
        number: number,
        units: 0,
        tens: 0,
        hundreds: 0,
    };
    if (digit.number <= 9){
        digit.units = digit.number;
    } else if (digit.number <= 999){
        digit.units = Math.floor(digit.number % 10);
        digit.tens = Math.floor(digit.number / 10 % 10);
        digit.hundreds = Math.floor(digit.number / 100 % 10);
    } else  {
        
        console.log('Введите число от 0 - 999!');
    }
  
    console.log(digit);
}

numToObj(234);
numToObj(111);
numToObj(999);
numToObj(1);
numToObj(52);
