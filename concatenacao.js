/*
nome: caractere
   numero: real

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval ("Digite o nome: ")
   leia(nome)
   escreval ("Digite o n�mero: ")
   leia(numero)

   escreval (nome, ": ", numero)
*/

var nome, numero; 

nome = prompt("Digite o seu nome: ")
numero = prompt("Digite o n�mero: ")

document.getElementById("paragrafo").innerText = nome + ": " + numero