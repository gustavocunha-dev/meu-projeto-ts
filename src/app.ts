import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const exercises = [
  { title: "Soma de dois números", func: sumTwoNumbers },
  { title: "Par ou ímpar", func: isEvenOrOdd },
  { title: "Média de 3 notas", func: averageOfThreeGrades },
  { title: "Celsius → Fahrenheit", func: celsiusToFahrenheit },
  { title: "Números pares de 1 a 20", func: evenNumbers },
  { title: "Armazenar e mostrar 5 números", func: storeAndShowFiveNumbers },
  { title: "Maior número de um array", func: largestNumberInArray },
  { title: "Contar vogais de uma string", func: countVowels },
  { title: "Calculadora básica", func: basicCalculator },
  { title: "Ordenar array", func: sortArray },
  { title: "Classe Pessoa", func: personClass },
  { title: "Herança: Pessoa → Aluno", func: inheritanceExample },
  { title: "Interface Veículo com classe Carro", func: vehicleInterface },
  { title: "Tabuada de um número", func: multiplicationTable },
  { title: "Calculadora de IMC", func: bmiCalculator },
  { title: "Validador de senha", func: passwordValidator },
  { title: "Jogo de adivinhação", func: guessingGame },
  { title: "Contador de palavras em uma string", func: wordCounter },
];

function mainMenu() {
  console.log("\nEscolha um exercício (0 para sair):");
  exercises.forEach((exercise, index) => {
    console.log(`${index + 1}: ${exercise.title}`);
  });

  rl.question('Opção: ', (option) => {
    const choice = parseInt(option);
    if (choice === 0) {
      console.log("Programa encerrado.");
      rl.close();
    } else if (choice > 0 && choice <= exercises.length) {
      const selectedExercise = exercises[choice - 1];
      console.log(`\nVocê escolheu: ${selectedExercise.title}`);
      selectedExercise.func();
    } else {
      console.log("Opção inválida. Tente novamente.");
      mainMenu();
    }
  });
}

// Exercise functions
function sumTwoNumbers() {
  rl.question('Digite o primeiro número: ', (num1) => {
    rl.question('Digite o segundo número: ', (num2) => {
      const result = parseFloat(num1) + parseFloat(num2);
      console.log(`Resultado: ${result}`);
      waitForEnter();
    });
  });
}

function isEvenOrOdd() {
  rl.question('Digite um número: ', (num) => {
    const number = parseInt(num);
    const result = number % 2 === 0 ? 'Par' : 'Ímpar';
    console.log(`Resultado: ${result}`);
    waitForEnter();
  });
}

function averageOfThreeGrades() {
  rl.question('Digite a primeira nota: ', (grade1) => {
    rl.question('Digite a segunda nota: ', (grade2) => {
      rl.question('Digite a terceira nota: ', (grade3) => {
        const average = (parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade3)) / 3;
        console.log(`Média: ${average}`);
        waitForEnter();
      });
    });
  });
}

function celsiusToFahrenheit() {
  rl.question('Digite a temperatura em Celsius: ', (celsius) => {
    const fahrenheit = (parseFloat(celsius) * 9/5) + 32;
    console.log(`Temperatura em Fahrenheit: ${fahrenheit}`);
    waitForEnter();
  });
}

function evenNumbers() {
  const evens = Array.from({ length: 20 }, (_, i) => i + 1).filter(num => num % 2 === 0);
  console.log(`Números pares de 1 a 20: ${evens.join(', ')}`);
  waitForEnter();
}

function storeAndShowFiveNumbers() {
  const numbers: number[] = [];
  const askForNumber = (count: number) => {
    if (count < 5) {
      rl.question(`Digite o número ${count + 1}: `, (num) => {
        numbers.push(parseFloat(num));
        askForNumber(count + 1);
      });
    } else {
      console.log(`Números armazenados: ${numbers.join(', ')}`);
      waitForEnter();
    }
  };
  askForNumber(0);
}

function largestNumberInArray() {
  rl.question('Digite números separados por vírgula: ', (input) => {
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    const largest = Math.max(...numbers);
    console.log(`Maior número: ${largest}`);
    waitForEnter();
  });
}

function countVowels() {
  rl.question('Digite uma string: ', (input) => {
    const vowelsCount = (input.match(/[aeiou]/gi) || []).length;
    console.log(`Número de vogais: ${vowelsCount}`);
    waitForEnter();
  });
}

function basicCalculator() {
  rl.question('Digite a operação (ex: 5 + 3): ', (input) => {
    const [num1, operator, num2] = input.split(' ');
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let result: number;

    switch (operator) {
      case '+':
        result = n1 + n2;
        break;
      case '-':
        result = n1 - n2;
        break;
      case '*':
        result = n1 * n2;
        break;
      case '/':
        result = n1 / n2;
        break;
      default:
        console.log('Operador inválido.');
        waitForEnter();
        return;
    }
    console.log(`Resultado: ${result}`);
    waitForEnter();
  });
}

function sortArray() {
  rl.question('Digite números separados por vírgula: ', (input) => {
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    const sorted = numbers.sort((a, b) => a - b);
    console.log(`Array ordenado: ${sorted.join(', ')}`);
    waitForEnter();
  });
}

function personClass() {
  class Person {
    constructor(public name: string, public age: number) {}
  }

  const person = new Person("João", 30);
  console.log(`Nome: ${person.name}, Idade: ${person.age}`);
  waitForEnter();
}

function inheritanceExample() {
  class Person {
    constructor(public name: string, public age: number) {}
  }

  class Student extends Person {
    constructor(name: string, age: number, public grade: number) {
      super(name, age);
    }
  }

  const student = new Student("Maria", 20, 9.5);
  console.log(`Nome: ${student.name}, Idade: ${student.age}, Nota: ${student.grade}`);
  waitForEnter();
}

function vehicleInterface() {
  interface Vehicle {
    brand: string;
    model: string;
    start(): void;
  }

  class Car implements Vehicle {
    constructor(public brand: string, public model: string) {}
    start() {
      console.log(`O carro ${this.brand} ${this.model} está ligado.`);
    }
  }

  const car = new Car("Ford", "Mustang");
  car.start();
  waitForEnter();
}

function multiplicationTable() {
  rl.question('Digite um número: ', (num) => {
    const number = parseInt(num);
    console.log(`Tabuada do ${number}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }
    waitForEnter();
  });
}

function bmiCalculator() {
  rl.question('Digite seu peso (kg): ', (weight) => {
    rl.question('Digite sua altura (m): ', (height) => {
      const bmi = parseFloat(weight) / (parseFloat(height) ** 2);
      console.log(`Seu IMC é: ${bmi.toFixed(2)}`);
      waitForEnter();
    });
  });
}

function passwordValidator() {
  rl.question('Digite uma senha: ', (password) => {
    const isValid = password.length >= 8;
    console.log(`Senha válida: ${isValid}`);
    waitForEnter();
  });
}

function guessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const guess = () => {
    rl.question('Adivinhe um número entre 1 e 100: ', (input) => {
      const number = parseInt(input);
      if (number === randomNumber) {
        console.log('Parabéns! Você adivinhou o número!');
        waitForEnter();
      } else if (number < randomNumber) {
        console.log('Muito baixo! Tente novamente.');
        guess();
      } else {
        console.log('Muito alto! Tente novamente.');
        guess();
      }
    });
  };
  guess();
}

function wordCounter() {
  rl.question('Digite uma string: ', (input) => {
    const wordCount = input.split(/\s+/).filter(word => word.length > 0).length;
    console.log(`Número de palavras: ${wordCount}`);
    waitForEnter();
  });
}

function waitForEnter() {
  rl.question('Pressione Enter para continuar...', () => {
    mainMenu();
  });
}

// Start the program
mainMenu();