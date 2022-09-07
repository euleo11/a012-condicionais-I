const num = Number(prompt("Insira um numero")) //seu numero aqui
const restoNum = num % 2

if(restoNum === 0){
    console.log("O número é par");
} else if(restoNum === 1){
    console.log("O número é ímpar")
}