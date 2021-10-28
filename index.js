let url = "http://127.0.0.1:5501/info.json";

//CARACTERISTICAS
$(".caract1").click(()=>{
    $(".desc1").slideToggle();
});

$(".caract2").click(()=>{
    $(".desc2").slideToggle();
});

//AJAX

let flag = false
$(".reserva1").click(() =>{

    if(flag){
        $.get(url, function(rta, estado){
            if (estado === "success"){
                //para que se muestre una sola vez, y no se sume la info cada vez que se apreta el botón
                $(".precio1").html("")
                let datos = rta;
                for (const dato of datos){
                    $(".precio1").prepend(`
                        <p>Tipo: ${dato.tipo}</p>
                        <p>Precio: ${dato.precio}</p>
                        <hr>
                    `);
                };
            };
            console.log(rta);
            console.log(estado);
        });

        $(".precio1").fadeIn();
    
    }else {
        $(".precio1").fadeOut();
    };
    flag = !flag;

});

let flag2 = false


$(".reserva2").click(() =>{
    if (flag2){
        $.get(url, function(rta, estado){
            if (estado === "success"){
                $(".precio2").html("")
                let datos = rta;
                for (const dato of datos){
                    $(".precio2").prepend(`
                        <p>Tipo: ${dato.tipo}</p>
                        <p>Precio: ${dato.precio}</p>
                        <hr>
                    `);
                };
               
            };
            console.log(rta);
            console.log(estado);
        });

        $(".precio2").fadeIn();
        
    }else {
        $(".precio2").fadeOut();
    };
    flag2 = !flag2;
});

