function addDigitoCampo (digito) {
  
    let numeroAtualizavel = document.querySelector('input[type="tel"]');
    
    numeroAtualizavel.value = numeroAtualizavel.value + digito;
    
};

const listaDeTeclasFone = document.querySelectorAll('input[type="button"]');
  
for (let contador = 0; contador < listaDeTeclasFone.length; contador++) {
    
    let tecla = listaDeTeclasFone[contador];
    let digito = tecla.value;
    
    listaDeTeclasFone[contador].onclick = function () {
      
      addDigitoCampo(digito);
      
    }
    
};
