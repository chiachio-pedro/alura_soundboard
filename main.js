function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();

};

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const idBase = '#som_'

    let tecla = listaDeTeclas[contador];
    let instrumento = tecla.classList[1];
    let idAudio = `${idBase}${instrumento}`;

    listaDeTeclas[contador].onclick = function () {
    
        tocaSom(idAudio);
    
    };

};
