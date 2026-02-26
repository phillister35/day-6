const calculator = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    case '/':
      return number1 / number2;
    case '%':
      return number1 % number2;
    default:
      return 'Phép toán không hợp lệ';
  }
};

console.log('5 + 3 =', calculator(5, 3, '+'));           
console.log('10 - 4 =', calculator(10, 4, '-'));         
console.log('6 * 7 =', calculator(6, 7, '*'));           
console.log('20 / 4 =', calculator(20, 4, '/'));         
console.log('17 % 5 =', calculator(17, 5, '%'));         
console.log('Phép toán &:', calculator(5, 3, '&'));