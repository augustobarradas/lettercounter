var botao = document.querySelector('.botao');
var contador = document.querySelector('.contador');

botao.addEventListener("input", function() {
    var texto = botao.value;
    var totalLetras = texto.length;

    contador.textContent = totalLetras

});

if (texto.trim() === " ") {
    contador.textContent = totalLetras - 1
}

function contarLetrasSemEspacos() {
    for (var i = 0; i < totalLetras; i++) {
      if (texto[i] !== ' ') {
        contador++;
      }
    }
}





// function contarLetrasSemEspacos(frase) {
    // Dividir a frase em um array de caracteres
    //var caracteres = frase.split('');
  
    // Inicializar uma variável para contar as letras
    //var contador = 0;
  
    // Iterar pelos caracteres e contar apenas as letras (ignorando espaços em branco)
    //for (var i = 0; i < caracteres.length; i++) {
      //if (caracteres[i] !== ' ') {
        //contador++;
      //}
    //}
  
    //return contador;
  //}
  
  // Exemplo de uso
  //var frase = "Esta é uma frase de exemplo";
  //var numeroDeLetras = contarLetrasSemEspacos(frase);
  //console.log("Número de letras (sem contar espaços): " + numeroDeLetras);
