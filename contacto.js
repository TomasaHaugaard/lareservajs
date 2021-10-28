//MENU DESPLEGABLE - Eventos

const boton = document.querySelector(".boton");
const menuUl = document.querySelector(".menu-ul");

boton.addEventListener("click", () => {
    menuUl.classList.toggle("menu-ul-visible");

    if (menuUl.classList.contains("menu-ul-visible")) {
        boton.setAttribute("aria-label", "cerrar menu");
        
    }else{
        boton.setAttribute("aria-label", "abrir menu");
    }
});

//FORMULARIO
let miFormulario = document.getElementById("form1");

miFormulario.addEventListener("submit", enviarForm);

let nombre = document.getElementById("name");
nombre.onkeyup = () => {console.log(nombre.value)};


var email = document.getElementById("email");
email.onkeyup = () => {console.log(email.value)};

var consulta = document.getElementById("comment");
consulta.onkeyup = () => {console.log(consulta.value)};


function enviarForm (evento) {
    evento.preventDefault();
    alert("formulario enviado, muchas gracias por tu consulta " + nombre.value);

    class guardarInfo {
        constructor (nombre, email, consulta){
            this.nombre = nombre;
            this.email = email ;
            this.consulta = consulta;
        }
    }

    const info = [];
    info.push (new guardarInfo(nombre.value, email.value, consulta.value));

    let guardar = localStorage.getItem (info);

    localStorage.setItem("información", JSON.stringify (info));

}



