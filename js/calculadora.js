/*Creamos dos constantes y guardamos los elementeos que necesitamos*/
const display = document.querySelector(".calculator-display");
const keypadButtons = document.getElementsByClassName("keypad-button");

/*creamos otra cosntante para convertir el HTMLcollection en Array*/
const keypadButtonsArray = Array.from(keypadButtons);

/*Iteramos por nuestro array de botones*/
keypadButtonsArray.forEach((button) => {
    /*a cada boton le agregamos un listener*/
    button.addEventListener("click", ()=> {
        calculadora(button, display);
    })
})

/*creamos la funcion calculadora*/
function calculadora (button, display){
    switch (button.innerHTML) {
        case "C":
            borrar(display)
            break;

        case "=":
            calcular(display)
            break;

        default:
            actualizar(display, button)
            break;
    }
}

/*le damos funcionalidad a cada caso del switch*/
function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button) {
    if (display.inner == 0) {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}

function borrar(display) {
    display.innerHTML = 0;
    
}
