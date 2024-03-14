const entradaTexto = document.querySelector(".container-entrada__texto");
const resultado = document.querySelector(".container-resultado__saida");
const botaoCopiar = document.querySelector(".container-botao__copiar");

const textoEntrada = document.querySelector(".container-entrada__texto");

textoEntrada.addEventListener("input", function() {
  habilitarBotoes();
});


function habilitarBotoes() {
    const botaoCriptografar = document.querySelector(".container-botao__criptografar");
    const botaoDescriptografar = document.querySelector(".container-botao__descriptografar");

    if (textoEntrada.value.length > 0) {
      botaoCriptografar.disabled = false;
      botaoDescriptografar.disabled = false;
    } else {
      botaoCriptografar.disabled = true;
      botaoDescriptografar.disabled = true;
    }
}

function botaoEncriptar() {
    document.getElementById("resultado_imagem").style.display = "none";
    document.getElementById("resultado_titulo").style.display = "none";
    document.getElementById("resultado_texto").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("copiar").style.display = "block";

    const textoEncriptado = encriptar(entradaTexto.value);
    resultado.value = textoEncriptado;
    entradaTexto.value = "";
}

function botaoDesencriptar() {
    document.getElementById("resultado_imagem").style.display = "none";
    document.getElementById("resultado_titulo").style.display = "none";
    document.getElementById("resultado_texto").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("copiar").style.display = "block";
    
    const textoDesencriptado = desencriptar(entradaTexto.value);
    resultado.value = textoDesencriptado;
    entradaTexto.value = "";
}

botaoCopiar.addEventListener("click", () => {
    navigator.clipboard.writeText(resultado.value)
    .then(() => {
        console.log("Texto copiado!");
        resultado.innerHTML = "Texto copiado!";
        botaoCopiar.style.display = "none";
    })
    .catch(err => {
        console.error("Erro ao copiar texto: ", err);
    })
});

function encriptar(stringEncriptada) {
    let matrizCriptografica = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada;

    if (/[A-Z]/.test(stringEncriptada)) {
        alert("Ops! Digite apenas letras minúsculas para criptografar.");
        return;
    }

    for(let i=0; i < matrizCriptografica.length; i++) {
        if(stringEncriptada.includes(matrizCriptografica[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCriptografica[i][0], matrizCriptografica[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCriptografica = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    if (/[A-Z]/.test(stringDesencriptada)) {
        alert("Ops! Digite apenas letras minúsculas para descriptografar.");
        return;
    }

    for(let i=0; i < matrizCriptografica.length; i++) {
        if(stringDesencriptada.includes(matrizCriptografica[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCriptografica[i][1], matrizCriptografica[i][0]);
        }
    }

    return stringDesencriptada;
}

// Versão com conversão automática de texto para minúsculas

// function encriptar(stringEncriptada) {
//     let matrizCriptografica = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringEncriptada = stringEncriptada.toLowerCase();

//     for(let i=0; i < matrizCriptografica.length; i++) {
//         if(stringEncriptada.includes(matrizCriptografica[i][0])) {
//             stringEncriptada = stringEncriptada.replaceAll(matrizCriptografica[i][0], matrizCriptografica[i][1]);
//         }
//     }

//     return stringEncriptada;
// }

// function desencriptar(stringDesencriptada) {
//     let matrizCriptografica = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
//     stringDesencriptada = stringDesencriptada.toLowerCase();

//     for(let i=0; i < matrizCriptografica.length; i++) {
//         if(stringDesencriptada.includes(matrizCriptografica[i][0])) {
//             stringDesencriptada = stringDesencriptada.replaceAll(matrizCriptografica[i][1], matrizCriptografica[i][0]);
//         }
//     }

//     return stringDesencriptada;
// }