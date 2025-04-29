# Documento de Requisitos Funcionais  
**Projeto**: Calculadora Simples (Terminal)  
**Grupo**: Andre Luiz Estevão, Eduardo de Paula, Erik Alexandre Kestring,  

---


## Funcionalidades (Requisitos Funcionais)

| Código | Descrição                                                                 |
|--------|---------------------------------------------------------------------------|
| RF01   | O sistema deve exibir um menu com opções de operação (+, -, *, /, sair). |
| RF02   | O sistema deve solicitar dois números ao usuário.                         |
| RF03   | O sistema deve validar se as entradas são numéricas.                      |
| RF04   | O sistema deve calcular e exibir o resultado da operação escolhida.       |
| RF05   | O sistema deve evitar a divisão por zero.                                 |
| RF06   | O sistema deve repetir o menu até que o usuário escolha sair.             |

---

## Casos de Teste

|   Id   | Caso de Teste                  | Entradas                    | Resultado Esperado                  |
|--------|--------------------------------|-----------------------------|-------------------------------------|
|  CT01  | Soma de dois números válidos   | Operação: 1 (Somar)         | Resultado: 7                        |
|        |                                | Número 1: 5, Número 2: 2    |                                     |
|  CT02  | Divisão por zero               | Operação: 4 (Dividir)       | Resultado: "Erro: divisão por zero."|
|        |                                | Número 1: 10, Número 2: 0   |                                     |
|  CT03  | Entrada inválida (não numérica)| Operação: 2 (Subtrair)      | Resultado: "Erro: entrada inválida."|
|        |                                | Número 1: "abc", Número 2: 4|                                     |

---
