let url = "http://127.0.0.1:5500/info.json";

$("#caract1").click(()=>{
    $("#desc1").slideToggle();
});

$("#caract2").click(()=>{
    $("#desc2").slideToggle();
});

/*
let flag = false
$("#reserva1").click(() => {
    if (flag){
        $("#precio1").fadeIn();

    }else {
        $("#precio1").fadeOut();
    }
    flag = !flag;
});

let flag2 = false
$("#reserva2").click(() => {
    if (flag2){
        $("#precio2").fadeIn();

    }else {
        $("#precio2").fadeOut();
    }
    flag2 = !flag2;
});
*/

//AJAX
let flag = false
$("#reserva1").click(() =>{
    if(flag){
        $.get(url, function(rta, estado){
            if (estado === "success"){
                let datos = rta;
                for (const dato of datos){
                    $("#precio1").prepend(`
                        <p>${dato.tipo}</p>
                        <p${dato.precio}</p>
                    `);
                };
            };
            console.log(rta);
            console.log(estado);
        });

        $("#precio1").fadeIn();
    
    }else {
        $("#precio1").fadeOut();
    };
    flag = !flag;

});

let flag2 = false

$("#reserva2").click(() =>{
    if (flag2){
        $.get(url, function(rta, estado){
            if (estado === "success"){
                let datos = rta;
                for (const dato of datos){
                    $("#precio2").prepend(`
                        <p>${dato.tipo}</p>
                        <p${dato.precio}</p>
                    `);
                };
               
            };
            console.log(rta);
            console.log(estado);
        });

        $("#precio2").fadeIn();
        
    }else {
        $("#precio2").fadeOut();
    };
    flag2 = !flag2;
    
});

