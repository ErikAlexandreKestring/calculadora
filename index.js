const readline = require('readline');

// Classe que executa operações
class Calculadora {
  somar(a, b) {
    return a + b;
  }

  subtrair(a, b) {
    return a - b;
  }

  multiplicar(a, b) {
    return a * b;
  }

  dividir(a, b) {
    if (b === 0) return "Erro: divisão por zero.";
    return a / b;
  }
}

// Classe que gerencia o sistema
class SistemaCalculadora {
  constructor() {
    this.calculadora = new Calculadora();
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  iniciar() {
    console.log("Calculadora Simples");
    this.menu();
  }

  menu() {
    console.log("\nEscolha uma operação:");
    console.log("1. Somar");
    console.log("2. Subtrair");
    console.log("3. Multiplicar");
    console.log("4. Dividir");
    console.log("5. Sair");

    this.rl.question("Opção: ", (opcao) => {
      switch (opcao) {
        case "1":
        case "2":
        case "3":
        case "4":
          this.pegarNumeros(opcao);
          break;
        case "5":
          console.log("Encerrando...");
          this.rl.close();
          break;
        default:
          console.log("Opção inválida.");
          this.menu();
      }
    });
  }

  // Solicita dois números ao usuário
  pegarNumeros(operacao) {
    this.rl.question("Digite o primeiro número: ", (num1) => {
      this.rl.question("Digite o segundo número: ", (num2) => {
        const a = parseFloat(num1);
        const b = parseFloat(num2);

        if (isNaN(a) || isNaN(b)) {
          console.log("Erro: entrada inválida.");
          this.menu();
          return;
        }

        let resultado;

        if (operacao === "1") resultado = this.calculadora.somar(a, b);
        else if (operacao === "2") resultado = this.calculadora.subtrair(a, b);
        else if (operacao === "3") resultado = this.calculadora.multiplicar(a, b);
        else if (operacao === "4") resultado = this.calculadora.dividir(a, b);

        console.log(`Resultado: ${resultado}`);
        this.menu();
      });
    });
  }
}

// Inicia o sistema
const app = new SistemaCalculadora();
app.iniciar();
