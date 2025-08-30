function adicionarlog () {

    let divLogs = document.querySelector(".Logs");

    let tagP = document.createElement("p");

    tagP.innerHTML = "Excercicio executado em " + new Date().toLocaleDateString() + " as " + new Date().toLocaleTimeString();

    divLogs.appendChild(tagP);
}



// //Exercicio 1
function exercicio01 () {

    let idade = prompt("qual e a sua idade?");

if (idade >= 18) {
    alert("parabens, voce e maior de idade!");

} else {
    alert("vai pra super nani!! ");
}

 adicionarlog();


}

// //Exercicio 2
function exercicio02 () {

    let numero = Number(prompt("digite um numero"));

if (numero > 0 ) {
    console.log("O numero é positivo!");
    
} else {
    console.log("O numero é negativo!");
}

}

// //Exercicio 3

function exercicio03 () {

    let nota = Number(prompt("Digite a nota do aluno"));

if (nota >= 60) {
    alert (" Aluno aprovado!");

} else{
    alert ("Aluno reprovado!")
}

}

// //Exercicio 4 

function exercicio04 () {

    let number = Number(prompt("Digite um numero:"));

if (number > 0) {
    alert("O numero é positivo");
    
} else if (number < 0) {
    alert("O numero é negativo");

} else {
    alert("Seu numero é zero!");
}
}


// //Exercicio 5

function exercicio05 () {

    let idadec = Number(prompt(" 5.Insira a sua idade:"));

if (idadec > 0 && idadec < 12) {
    alert("Voce e uma crianca!");
    
} else if (idadec > 13 && idadec < 17) {
    alert("Voce e um adolescente!");

} else if(idadec == 18) {
    alert("Voce e um adulto!");
} else{
    alert("Idade Invalida");
}
}





// //exercicio 6
function exercicio06 (){

    if (numeroip % 2 ==0 ) {
        alert("O numero e par!")
    
        
    } else { 
        alert("O numero e impar")
        
    }
}


// //Exercicio 1 int

// let numero1 = Number(prompt("Insira um numero:"));
// let numero2 = Number(prompt("Insira outro numero:"));
// let operacao = prompt("Escolha uma operacao, +, -, *, /")
// if (operacao === "+") {
//     alert(numero1 + numero2)
    
// } else if(operacao === "-") {
//     alert(numero1 - numero2)


// }else if(operacao === "*") {
//     alert(numero1 * numero2)


// }else if(operacao === "/") {
//     alert(numero1 / numero2)

// }else{
//     alert("escolha uma das operacoes anteriores")
// }


// //exercicio 2 int

// let usuario = prompt("Insira um nome de usuario:");
// let senha = prompt("Insira uma senha:")

// if (usuario == "admin" && senha == "1234" ) {
//     alert("Login bem-sucedido")
    
    
// } else{
//     alert("Acesso negado")
// }

// //exercicio 3 int 

// let num1 = prompt("insira um numero")
// let num2 = prompt("insira outro numero")
// let num3 = prompt("insira mais um numero")
// if (num1> num2 && num1>num3) {
//     alert(num1, "e o maior")
    
// }else if(num2> num1 && num2>num3) {
//     alert(num2 + " e o maior")

// }else if (num3>num1 && num3>num2) {
//     alert(num3 + " e o maior")
// }

// //exercicio 1 av

// let ano = prompt("Digite um ano:")

// if (ano % 4 === 0 && ano % 400 === 0 ) {
//     alert("seu ano e bissexto")

    
// } else if (ano % 4 === 0 && ano % 100 === 0 ) {
//     alert("Seu ano e bissexto")


// } else if (ano % 4 === 0 && ano % 100 === 0  && ano % 400 === 0) {
//     alert("Seu ano e bissexto")


// }else{
//     alert("Seu ano nao e bissesto")
// }

// if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
//     alert("bissexto");
// } else {
//     alert("nao bissexto")
// }