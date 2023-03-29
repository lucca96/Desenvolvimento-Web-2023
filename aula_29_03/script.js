function aumenta() {
    const a = document.getElementById("meu_span");
    let vlr = parseInt(a.innerText);
    vlr ++;
    a.innerText = vlr;

    if (vlr === 5) {
        mudaDivs()
    }
}

const mudaDivs =() =>{
    const divs = document.querySelectorAll(".minha_div")

    divs.forEach( ele => {
        ele.style.backgroundColor = "red";
        ele.style.height = "3em";
        ele.style.border = "solid black 1em";
    })
}

document.getElementById("meu_botao").onclick = aumenta;

