const div_colorida = document.getElementById("colorida");
const input_cor = document.getElementById("input_cor");
const botao = document.getElementById("botao");
const meu_array = [1,2,3,4,"casa"];

div_colorida.style.height = '1em';
div_colorida.style.backgroundColor = 'black';

botao.style.borderRadius = '25px';
botao.style.borderWidth = '1px';


function mudar_cor(){
    div_colorida.style.backgroundColor = input_cor.value;
}

botao.onclick= mudar_cor;

/*imprimir array*/

let cont = 0
while(cont<meu_array.length){
    console.log("while",meu_array[cont]);
    cont ++;
}

for (let i = 0; i<meu_array.length; i++){
    console.log("for",meu_array[i]);
}

meu_array.forEach((ele,i) => {
    console.log("for each", ele,i);
}
)

for( const ele of meu_array){
    console.log("for of",ele);
}

console.log('map',meu_array.map((e) => e+1))