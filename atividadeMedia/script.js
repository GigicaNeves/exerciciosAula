// Declarando as variáveis, que nesse caso são as três notas do nosso aluno fictício
var nota1 = 7;
var nota2 = 7;
var nota3 = 7;

// Criando uma variável pra atestar se o aluno foi aprovado
var aprovado = false;

// Variável que calcula o valor da média
var media = (nota1 + nota2 + nota3) / 3;

// Mostrando as notas e a média no console
console.log("Nota1: ", nota1.toFixed(2));
console.log("Nota2: ", nota2.toFixed(2));
console.log("Nota3: ", nota3.toFixed(2));

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
