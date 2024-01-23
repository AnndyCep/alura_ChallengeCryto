let clave = "Miclave";

function tomarValoresEncriptar() {
    let valor = document.getElementById('inputText').value;
    let textoEncriptado = encriptar(valor,clave);
    console.log(textoEncriptado);
    mostrarElementos("outputText",textoEncriptado); //
}

function tomarValoresDesencriptar() {
    let valor = document.getElementById("outputText").value;
    let textoDesencriptado = desencriptar(valor,clave);
    console.log(textoDesencriptado)
    mostrarElementos("outputText",textoDesencriptado); //
}

function mostrarElementos(element, text) {
    let elementHTML = document.getElementById(element);
    elementHTML.value = text; 
    return;
}


function encriptar(texto, clave) {
    var textoEncriptado = CryptoJS.AES.encrypt(texto, clave).toString();
    return textoEncriptado;
  }
  
  // Función para desencriptar el texto
  function desencriptar(textoEncriptado, clave) {
    var bytesDesencriptados = CryptoJS.AES.decrypt(textoEncriptado, clave);
    var textoDesencriptado = bytesDesencriptados.toString(CryptoJS.enc.Utf8);
    return textoDesencriptado;
  }

  function copiarTexto() {
    var copia = document.getElementById('outputText').value;
    navigator.clipboard.writeText(copia);
    alert("¡El texto se ha copiado correctamente!");
  }