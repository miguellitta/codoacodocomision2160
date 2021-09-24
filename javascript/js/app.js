alert("Soy una ventana emergente!")
        /*Variables*/
        /*palabra reservada nombre de la variable*/
        var nombre_variable;
        /*palabra reservada nombre de la variable = asignamos el valor*/
        let otra_variable = "Hola" /*tipo string*/
        const PI = 3.1416  /*tipo enteros y float*/
        let num2=18;
        let hayClases=true; /*tipo boolean*/
        let terminoLaClase=false;
        /*Tipos undefined, numero, String Boolean, Objeto, arreglo, chart, array*/
        console.log(PI*num2);
        console.log(num2 +36 + " " +otra_variable) /*sumar y concatenar*/
        /*Condicionales*/
        hayClases=false;
        if(hayClases == true && terminoLaClase != true){
            console.log("Nos conectamos a la videollamada")
        }else{
            console.log("Salimos a celebrar el dia del Estudiante")
        }
        if(hayClases == false || terminoLaClase ==true){
            console.log("Salimos a celebrar el día del Estudiante")
        }

        let elemento = document.getElementById("principal");
    
        // console.log(elemento)
        elemento.innerHTML="MI valor para innerHTML"
        elemento.innerHTML+="<p>"+otra_variable+"</p>"
        document.write("<h3 class='text-center bg-primary'>Hola buen día</h3>");
        document.write("<h3>como están?</h3>")

        if(nombre_variable == undefined){
            elemento.innerHTML+="Estamos con una variable sin valor definido"
            elemento.innerHTML+="<p>Luis Navas</p><p>Brian</p><p>Barbara</p><p>Damian</p><p>Debora</p><p>Elias</p>"
            /*elemento.style.backgroundColor="Blue"
            elemento.style.color="white"*/
        }
        /*
        let mensaje = prompt("Introduce tu mensaje: ");
        elemento.innerHTML+="<h3> + mensaje+ </h3>";
        elemento.innerHTML+="<div class=\"alert alert-success\" role=\"alert\">"+A simple success alert—check it out!"</div>"
        */

        // let menu = prompt("Selecciona el pedido: \n 1. Milanesa con Fritas \n 2. Milanesa Napolitana \n 3. Fritas solas")

        // if(menu === '1'){ /*Valor y el tipo*/
        //     elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">"+Disfruta de tu Milanesa con Fritas"</div>"
        // }else if(menu === '2'){
        //     elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">"+Disfruta de tu Milanesa Napolitana"</div>"
        // }else if(menu === '3'){
        //     elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">"+Disfruta de tus Fritas"</div>"
        // }else{
        //     alert('Debes elegir una opcion valida')
        //     let menu = prompt("Selecciona el pedido: \n 1. Milanesa con Fritas \n 2. Milanesa Napolitana \n 3. Fritas solas")
        // }

        // switch (menu) {
        //     case '1':
        //         elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">"+Disfruta de tu Milanesa con Fritas"</div>"
        //         break;
        
        //     default:
        //         elemento.innerHTML="<div class=\"alert alert-success\" role=\"alert\">"+Disfruta de tu Milanesa Napolitana"</div>"
        //         break;
        // }

        // let num =0, num3=0;
        // let num = Number(prompt("Ingresa el primer número"));
        // let num3 = Number(prompt("Ingresa el segundo número"));
        // if(num === NaN){

        // }
        // let resultado="El resultado de la suma de "+num+" y "+num3+" es: "+ (num +num3);

        // palabra reservada nombreArreglo =[index0, index1,...nindex];
        let alumnos=["Natalia","Nicolas","Ramiro","Soledad"];
        
        for(let a=0; a < alumnos.length; a= a++){
            elemento.innerHTML+=`
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${alumnos[a]}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>}
        
        `;
        }
        alumnos.forEach((a)=>{
            elemento.innerHTML+=`
            <div class="card" style="width: 18rem;">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${alumnos[a]}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>}
            `;
        });
    
