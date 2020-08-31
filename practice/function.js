function collect(name) {
  function factorial(num = 1) {
    let temp = 1,
      fact = 1;
    while (temp <= num) {
      fact = fact * temp;
      temp++;
    }
    return fact;
  }

  const fibonacci = function (num) {
    if (num == 1) {
      return 1;
    }
    if (num == 0) {
      return 0;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  let concat = (a, b) => {
    console.log(String(a) + String(b));
    return a + b;
  };
  return `${name}!factorial is ${factorial(5)} fibo number is ${fibonacci(8)} concatening is ${concat("gaurav", "kumar")}`;
}
console.log(collect("hello"));

/**
 * OUTPUT :
 gauravkumar
 hello!factorial is 120 fibo number is 21 concatening is gauravkumar
 */
