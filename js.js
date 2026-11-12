function ex1(nom="LuisPElaez"){
    console.log(nom)
}
function ex2(nom=""){
    return typeof nom
}
console.log(ex2("LuisPElaez"))
function ex3(nom="LuisPElaez"){
    return  nom
}
function ex4(){ //El que pasa es que no veu la variable
    let nom="LuisPElaez"
}
// console.log(nom)
function ex5(text =""){
    let comptador = 0;
    for (let lletra of text.toLowerCase()) {
        if ("aeiou".includes(lletra)) {
            comptador++;
        }
    }
    return comptador
}
console.log(ex5("poyo"))

function ex6(a=0, b=0,c=0){
    return a+b+c
}
console.log(ex6(2,1,3))

function ex7(){
    ex3("LuisPelaez")
    return ex6(3,123,2)
}
function ex8(a=0, b=0){
    let treinta = false
    if(a === 30 || b ===30 ||a + b===30){
        treinta =true
    }
    return treinta
}
console.log(ex8(20,10))

let ex9 = (a = 0, b= 0)=>{
    let treinta = false
    if(a === 30 || b ===30 ||a + b===30){
        treinta =true
    }
    return treinta
}
console.log(ex9(10,20))

let ex10 = (a, b) => {
    let igual = false
    if (typeof a === typeof b){
        igual = true
    }
    return(igual)
}
console.log(ex9(10,"20"))

const ex11 = (valor) => Math.sqrt(valor).toFixed(2);
console.log(ex11(25));

const ex12= (a = "") =>{
    return a.toLowerCase()
}
console.log(ex12("JAUN"))

const ex13 =(a, b) =>{
    if( a != null){
        return a
    }else {
       return b
    }
}
console.log(ex13(null,"juasn"))

const posicio = (frase, paraula) => {
    const indexInici = frase.indexOf(paraula);
    if (indexInici === -1) return -1;
    return frase.length - indexInici;
};
console.log(posicio("Hola com estàs", "com"));

const dividir = (frase, paraula) => {
    const pos = posicio(frase, paraula);

    if (pos === -1) return "La paraula no es troba a la frase";

    return frase.slice(pos);
};

console.log(dividir("Hola com estàs", "com"));

const triple = (x) => x + x + x;
console.log(triple(5));
console.log(triple("Hola"));