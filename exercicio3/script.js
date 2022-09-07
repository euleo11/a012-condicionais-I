let nacionalidade= prompt("Você tem nacionalidade...").toLowerCase()
const paises = [
    "brasileira",
    "argentina",
    "uruguaia",
    "chilena",
    "colombiana",
]

if(nacionalidade === paises[0]){
    console.log("Nacionalidade brasileira")
    
}else if(nacionalidade === paises[1]){
    console.log("Nacionalidade argentina")

}else if(nacionalidade === paises[2]){
    console.log("Nacionalidade uruguaia")

}else if(nacionalidade === paises[3]){
    console.log("Nacionalidade chilena")

}else if(nacionalidade === paises[4]){
    console.log("Nacionalidade colombiana")

}else{
    console.log("Nacionalidade não encontrada")}