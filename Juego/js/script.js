

var palabra="";
var arr=[];


function capturar(){
    var palabra= prompt("Introduzca la palabra a usar"); 
    var arr =[];
    for (let i = 0; i < palabra.length; i++) {
        arr[i]=palabra.substring(i,i+1);    
    }
    //console.log(arr);
    return arr;
}

const elArreglo= capturar()

var letra= "";

function chequeo(x, letra) {
    letra= prompt("Digite la letra a valorar");
    var contador=0;
    for (let i = 0; i < x.length; i++) {
        
        if (letra == x[i]) {
            console.log("Coincide", letra);
            
        } else {
            contador=contador+1
            console.log("No coindice", letra, i);
        }

        
    }  
    console.log(contador);
}




