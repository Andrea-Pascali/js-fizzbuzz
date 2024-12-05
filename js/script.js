// Loop da 1 a 100
for (let i = 1; i <= 100; i++) {
    // Controllare se il numero è multiplo sia di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Controllare se il numero è multiplo di 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Controllare se il numero è multiplo di 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Stampare il numero se non è multiplo di 3 o 5
    else {
      console.log(i);
    }
  }