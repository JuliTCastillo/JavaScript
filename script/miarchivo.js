let val = 0;
let num;
do{
    num = prompt("ingrese un numero");
    if(isNaN(num)){
        alert("Ustede a ingresado una letra");
    }
    else{
        val = 1;
        document.write(`Tabla del ${num} <br><br>`);
        for(let i= 1; i <= 10;i++){
            console.log(`${num} x ${i} = ${num*i}`);
            document.writeln(`${num} x ${i} = ${num*i} <br>`);
        }
    }
}while(val == 0);

