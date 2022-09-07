let idade= Number(prompt("Idade"));
let isMaiorIdade; 
let isCursandoOutraFaculdade= confirm("Está cursando alguma faculdade?");

if(idade >= 18){
    console.log("A pessoa é MAIOR de idade")
}else{
	console.log("A pessoa é MENOR de idade")
}


if(idade <= 18){
    console.log("Não terminou o Ensino Médio")
} else{
    console.log("Terminou o ensino médio ou Repetiu de ano")
}


if(isCursandoOutraFaculdade){
    console.log("A Pessoa está cursando faculdade")
} else{
    console.log("A pessoa NÃO está cursando faculdade")
}