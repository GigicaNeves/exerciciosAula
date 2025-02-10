
var notas = [5, 9, 8]
// Criando uma variável pra atestar se o aluno foi aprovado
var aprovado = false;
var contador = 1;

// Variável que calcula o valor da média
var media = (notas[0] + notas[1] + notas[2]) / notas.length;

// Passa por todas as notas, mostrando no console
for (var i = 0; i < notas.length; i++) {
    console.log("Nota ", contador, ":", notas[i].toFixed(2));
    contador++;
}

console.log("🎓 Média: ", media.toFixed(2));

// Verificando se a média está igual ou acima de 7
if (media >= 7) {

  // Caso sim, a variável "aprovado" recebe o valor "true"/verdadeiro
    aprovado = true;

} else {

  // Caso não, a variável "aprovado" continua "false"/falso e a mensagem, abaixo é imprimida no console
    console.log("❌ REPROVADO!");

}

// Por fim, caso o aluno esteja aprovado (variável "aprovado" estiver com o valor "true"/verdadeiro) a mensagem abaixo é impressa no console
while (aprovado) {

  console.log("✅ APROVADO!");
  break;

}
