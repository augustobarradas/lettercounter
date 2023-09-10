var botao = document.querySelector('.botao');
var contador = document.querySelector('.contador');

botao.addEventListener("input", function() {
    var texto = botao.value;
    var totalLetras = texto.length;

    contador.textContent = totalLetras

});

