//FORMULARIO


$("#form1").submit((e) => {
    function e (evento) {
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
    
        localStorage.setItem("información", JSON.stringify (guardar));
    
    };
    
    e(evento);
});


