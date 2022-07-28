alert("************************************\nBienvenido al simulador de tienda\n************************************");
let respuesta = true;
let tipo;
let valor = true;
let rta = true; 

let productos =  ["manzana", "naranja", "papa", "tomate", "lechuga"];
let cantidad = [5, 3, 6, 10, 2];
let precio = [18, 20, 50, 23, 48];
let almacen = [10, 0, 5, 8, 9];
let cantProductos = [];
let total = 0;

while(respuesta){
    respuesta = cliente();
    alert(respuesta);
}

function cliente(){
    let val = true;
    let dinero = prompt("¿Cuando dinero tiene para comprar?");
    alert(dinero);  
    let respuesta;
    let mensaje;
    while(val){
        while(!validar(dinero)){
            alert("La opción ingresada no es un numero o el valor ingresado es un cero");
            dinero = prompt("¿Cuando dinero tiene?");
        }

        respuesta = prompt("1) Conocer los productos\n"+
                "2) Comprar producto\n"+
                "3) consultar por el stock de productos\n"+
                "4) Ver el total de mis compras\n" +
                "5) Pagar\n"+
                "6) salir de la tienda");
        switch(parseInt(respuesta)){
            case 1: 
                mensaje = "Productos\n";
                for (elemento of productos){
                    mensaje = mensaje + elemento + "\n";
                }
                alert(mensaje);
                break;
            case 2: 
                while(rta){
                    mensaje = prompt("Ingrese el producto que quiere comprar").toLowerCase();
                    let pos = productos.indexOf(mensaje);
                    rta = comprarProducto(pos, mensaje);
                }
                break;
            case 3:
                rta = true;
                while(rta){
                    mensaje = prompt("¿Buenas que producto quiere consultar?").toLowerCase();
                    pos = productos.indexOf(mensaje);
                    if(pos != -1){
                        consultarProducto(parseInt(pos), mensaje);
                    }
                    else{
                        alert("El producto ingresado no existe\nIntentelo de nuevo");
                    }
                }
            case 4: 
                alert(listaDeProductosComprados());
            break;
            case 5: 
                pagarElTotal(dinero);
            case 6: 
                val =  false;    
            break;
        }
    }
    return false;
}
function pagarElTotal(dinero){
    let estado = true;
    alert("Su total a pagar es de " + total);
    while(estado){
        if(total <= dinero){
            alert("¡gracias por comprar!");
            estado = false;
        }
        else{
            let respuesta = prompt("Vemos que el dinero no te alcanza :(\n"+
                    "1) Tengo más dinero\n"+
                    "2) Lo siento debo irme");
            while(!validar(respuesta)){
                alert("El valor ingresado no es un número\nIntentelo de nuevo");
                cant = prompt("Vemos que el dinero no te alcanza :(\n"+
                "1) Tengo más dinero\n"+
                "2) Lo siento debo irme");
            }
            switch(parseInt(respuesta)){
                case 1: 
                    let newDinero = prompt("¿Cuando dinero tiene?");
                    while(!validar(newDinero)){
                        alert("La opción ingresada no es un numero o el valor ingresado es un cero");
                        dinero = prompt("¿Cuando dinero tiene?");
                    }
                    dinero = dinero + newDinero;
                break;
                case 2:
                    estado = false;
                break;
            }
        }
    }
}
function listaDeProductosComprados(){
    let msj = "";
    let totalApagar = 0;
    console.log(cantProductos);
    for(let i = 0; i < cantProductos.length-2; i+=3){
        msj = msj +"Producto: "+ cantProductos[i] + " Cantidad: " + cantProductos[i+1] + " Precio: " +  cantProductos[i+2] + "\n"; 
        totalApagar = totalApagar + (cantProductos[i+1] * cantProductos[i+2]); 
    }
    msj = msj + "-----------------\n";
    msj = msj + "Total a pagar: " + totalApagar;

    return msj;
}
function consultarProducto(pos, mensaje){
    if(almacen[pos] > 0){
        alert("Se encontro " + almacen[pos] + " de " + mensaje);
        let aux = almacen[pos];
        almacen[pos] = 0;
        cantidad[pos] = cantidad[pos] + aux;
        alert("Ahora hay " + cantidad[pos] + " de " + mensaje);
    }
}

function comprarProducto(pos, mensaje){
    let val = true;
    alert(pos + " dentro del while");
    while(val){
        if(parseInt(pos) != -1){
            let cant = prompt("¿Cuantos producto quiere llevar?");
            while(!validar(cant)){
                alert("El valor ingresado no es un número\nIntentelo de nuevo");
                cant = prompt("¿Cuantos producto quiere llevar?");
            }
            if(cant <= cantidad[pos]){
                cantProductos.push(mensaje);
                cantProductos.push(cant);
                cantProductos.push(precio[pos])
                total = total + (precio[pos] * cant);
                let msj = prompt("¿Quieres comprar otro producto?\n"+
                                "1) Si\n"+"2) no");
                while(!validar(msj)){
                    alert("El valor ingresado no es un número\nIntentelo de nuevo");
                    msj = prompt("¿Quieres comprar otro producto?\n"+
                                "1) Si\n"+"2) no");
                }
                switch(parseInt(msj)){
                    case 1: 
                        return true;
                    case 2:
                        return false;
                    break;
                }
            }
            else{
                alert("En la tiene no sé encuentra esa cantidad\n"+
                    "Por favor consulte por más stock");
                val = false;
            }
        }
        else{
            alert("El producto ingresado no existe\nIntentelo de nuevo");
            return true;
        }
    }
}
function validar(numero){
    if(numero != ""){
        if(isNaN(numero)){
            return false;
        }
        else{
            if(parseInt(numero) != 0 ){
                return true;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
    

}