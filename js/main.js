////////////////////////////////////////////////
// functions 
function isNumber(n) {
    isNaN(n) && Swal.fire(`${n} is not a numberr`);
}
function aComparar (evt){
    evt.preventDefault();
     cantidad1 = document.querySelector('#cantidad1').value;
     precio1 = document.querySelector('#precio1').value;
     cantidad2 = document.querySelector('#cantidad2').value;
     precio2 = document.querySelector('#precio2').value;

    if (cantidad1 && precio1 && cantidad2 && precio2) {
        isNumber(cantidad1);
        isNumber(precio1);
        isNumber(cantidad2);
        isNumber(precio2);

        precio2EscaladoDe1 = cantidad2 * precio1 / cantidad1;

        cantidad1 = parseFloat(cantidad1);
        cantidad2 = parseFloat(cantidad2);
        precio1 = parseFloat(precio1);
        precio2 = parseFloat(precio2);

        if (cantidad1 < cantidad2) {
            if (precio2EscaladoDe1 > precio2) {
                dibujarResultado(0);
                formulario.reset();
            }
            if (precio2EscaladoDe1 < precio2) {
                dibujarResultado(1);
                formulario.reset();
            }
        } else {
            if (precio2EscaladoDe1 > precio2) {
                dibujarResultado(0);
                formulario.reset();
            }
            if (precio2EscaladoDe1 < precio2) {
                dibujarResultado(1);
                formulario.reset();
            }
        }
    } else {
        Swal.fire("Faltan valores");
    }
    const borrarBtn = document.querySelector('.borrarBtn');
    borrarBtn.addEventListener('click',limpiarHTML)
}
function dibujarResultado (x) {
    // resultadoDiv = document.createElement('div');
    // resultadoDiv.classList.add('resultado');
    // resultadoDiv.setAttribute('data-aos','fade-up');
    // resultadoDiv.setAttribute('data-aos-duration','1000');
    // const resultadoSection = document.querySelector('.resultadoSection');
    // resultadoSection.appendChild(resultadoDiv);
    // const resultadoP = document.createElement('p');
    // if (x == 0) {
    //     resultadoP.innerHTML = `A precio de $ ${precio1} x ${cantidad1} -> ${cantidad2} costaría $ ${precio2EscaladoDe1} <br>Precio real: $ ${precio2} <br>Sale más barato comprar por cantidad de ${cantidad2}`
    // } else if (x == 1) {
    //     resultadoP.innerHTML = `A precio de $ ${precio1} x ${cantidad1} -> ${cantidad2} costaría $ ${precio2EscaladoDe1} <br>Precio real: $ ${precio2} <br>Sale más barato comprar por cantidad de ${cantidad1}`
    // }
    // resultadoDiv.appendChild(resultadoP);

    if (x == 0) {
        Swal.fire({
            title: `Sale más barato comprar por cantidad de ${cantidad2}`,
            html: `A precio de $ ${precio1} x ${cantidad1} -> ${cantidad2} costaría $ ${precio2EscaladoDe1} <br>Precio real: $ ${precio2}`,
            text: "more text",
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "amonos pues"
        });
    } else if (x == 1) {
        Swal.fire({
            title: `Sale más barato comprar por cantidad de ${cantidad1}`,
            html: `A precio de $ ${precio1} x ${cantidad1} -> ${cantidad2} costaría $ ${precio2EscaladoDe1} <br>Precio real: $ ${precio2}`,
            icon: "warning",
            confirmButtonColor: "#3085d6",
            confirmButtonText: "amonos pues"
        });
    }
}

function limpiarHTML() {
    resultadoDiv.remove();
}

////////////////////////////////////////
// DOM
const formulario = document.querySelector('.formulario');
formulario.addEventListener('submit',aComparar)
