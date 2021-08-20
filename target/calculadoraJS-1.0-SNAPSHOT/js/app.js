console.log("Calculadora de Santi");
document.addEventListener('DOMContentLoaded', function() {
    validarOperacion();
});

function validarOperacion() {
    //Seleccionar los operandos
    const operandoA = document.querySelector('#operandoA');
    const operandoB = document.querySelector('#operandoB');
    //Seleccionar las opciones de la lista
    const operador = document.querySelector('#opciones');
    //Seleccionar el boton de calcular
    const calcular = document.querySelector('#calcular');
    //Creamos el evento
    calcular.addEventListener('click', function() {
        //Evaluar operacion deseada
        if (operador.value == 0) {
            alert("No ha seleccionado una operación a realizar");
        } else if (operador.value == 1) {
            var result = suma(operandoA, operandoB);
        } else if (operador.value == 2) {
            result = resta(operandoA, operandoB);
        } else if (operador.value == 3) {
            result = multiplicacion(operandoA, operandoB);
        } else {
            result = division(operandoA, operandoB);
        }
        //Si no hay numeros 
        if (isNaN(result)) {
            result = 'Faltan numeros para realizar la operación';
        }
        //Mostrar el resultado
        document.querySelector('.resultado').innerHTML = `El resultado es: ${result}`;
    });
}

const suma = (op1, op2) => {
    var result = parseInt(op1.value) + parseInt(op2.value);
    return result;
}

const resta = (op1, op2) => {
    var result = parseInt(op1.value) - parseInt(op2.value);
    return result;
}

const multiplicacion = (op1, op2) => {
    var result = parseInt(op1.value) * parseInt(op2.value);
    return result;
}

const division = (op1, op2) => {
    var result = parseInt(op1.value) / parseInt(op2.value);
    return result;
}