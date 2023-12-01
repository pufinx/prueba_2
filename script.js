nombre = prompt("Ingrese nombre");
nom = document.querySelector('#nombre');
nom.innerHTML = nombre;
renta = parseFloat(prompt("ingrese su renta"));
sueldo = document.querySelector('#renta');
sueldo.innerHTML = renta.toLocaleString();


function calcular() {
    sueldo = document.querySelector('#renta');
    sueldo.innerHTML = renta;
    var contrato;

    if (document.getElementById("rhonorario").checked) {contrato = "honorario";
    } else if (document.getElementById("rplazo").checked) {contrato = "plazo_fijo/indefinido";
    } else {alert("seleccione un tipo de contrato.");return;
    }
    if (contrato === "honorario") {total = renta * 0.1;
    } else {total = renta * 0.8;}
    resultado = document.querySelector('#total');
    resultado.innerHTML = total.toLocaleString();
}
function limpiar() {
    document.querySelector('#nombre').textContent = "";
    document.querySelector('#renta').textContent = "";
    document.getElementById("rhonorario").checked = false;
    document.getElementById("rplazo").checked = false;
    document.querySelector('#total').textContent = "";

}
function nuevocalculo() {
    limpiar();
    nombre = prompt("Ingrese su nombre");
    nom = document.querySelector('#nombre');
    nom.innerHTML = nombre;
    renta = parseFloat(prompt("Ingrese su renta"));
    sueldo = document.querySelector('#renta');
    sueldo.innerHTML = renta.toLocaleString();
    calcular();
    

}