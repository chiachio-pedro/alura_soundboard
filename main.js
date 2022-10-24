function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {

        console.log('Elemento não encontrado!');

    } else {

        if (elemento.localName === 'audio') {

            elemento.play();

        } else {

            console.log('Elemento existe, mas não é um áudio...')

        };

    };

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

    tecla.onkeydown = function (evento) {

        if (evento.code === "Enter" || evento.code === "Space") {
    
          tecla.classList.add('ativa');
          tecla.classList.add('active');
    
        };
    
    };
    
    tecla.onkeyup = function () {
    
        tecla.classList.remove('ativa');
        tecla.classList.remove('active');
    
    };

};
