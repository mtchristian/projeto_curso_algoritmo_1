/* Var
// Se��o de Declara��es das vari�veis
   numero, fatorial, contador: inteiro

Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc...
   escreval("Digite o n�mero para calcular o fatorial.")
   leia(numero)
   fatorial := 1

   para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreval("O fatorial de ", numero," �: ", fatorial)
*/

function acaoBotao() {
    var numero, fatorial
    numero = prompt("Digite o n�mero para calcular o fatorial")
    fatorial = 1
    for (var contador = 1; contador <= numero; contador++) {
        fatorial = fatorial * contador
    }
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " �: " + fatorial
}
