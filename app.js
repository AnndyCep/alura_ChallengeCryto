

function tomarValoresEncriptar() {
    let valor = document.getElementById('inputText').value;
    let textoEncriptado = encriptar(valor);
    console.log(textoEncriptado);
    mostrarElementos("outputText",textoEncriptado); //
}

function tomarValoresDesencriptar() {
    let valor = document.getElementById("outputText").value;
    let textoDesencriptado = desencriptar(valor);
    console.log(textoDesencriptado)
    mostrarElementos("outputText",textoDesencriptado); //
}

function mostrarElementos(element, text) {
    let elementHTML = document.getElementById(element);
    elementHTML.value = text; 
    return;
}


function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g,"enter").replace(/i/g,"ines").replace(/a/g,"ai")
                            .replace(/o/g,"ober").replace(/u/g,"ufat")
    return textoEncriptado;                    
  }
  

  /*function encriptar(texto, clave) {
    var textoEncriptado = CryptoJS.AES.encrypt(texto, clave).toString();
    return textoEncriptado;
  }
  
  // Función para desencriptar el texto
  function desencriptar(textoEncriptado, clave) {
    var bytesDesencriptados = CryptoJS.AES.decrypt(textoEncriptado, clave);
    var textoDesencriptado = bytesDesencriptados.toString(CryptoJS.enc.Utf8);
    return textoDesencriptado;
  }*/
  // Función para desencriptar el texto
  function desencriptar(textoEncriptado) {
    let desencriptado = textoEncriptado.replace(/enter/g, "e")
                                    .replace(/imes/g, "i")
                                    .replace(/ai/g, "a")
                                    .replace(/ober/g, "o")
                                    .replace(/ufat/g, "u");
    return desencriptado;
  }

  function copiarTexto() {
    var copia = document.getElementById('outputText').value;
    navigator.clipboard.writeText(copia);
    alert("¡El texto se ha copiado correctamente!");
  }