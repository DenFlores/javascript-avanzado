/* flujo, orden en que se ejecutan las declaraciones*/


//Se declara algo antes de utilizarla
/*let miVariable = 10;
console.log(miVariable);

let edad = 18;
let tienesINE = true;


if(edad >= 18 && tienesINE ==true){
    console.log('Puedes entrar');
}*/
/*
else{
    console.log('No puedes entrar');
}*/

/*Operador ternario
forma simplificada de un if else, se mete en una linea*/
/*(Condicion a evaluar) ? se ejecuta si es verdadero : se ejecuta si es falso)*/

/*let edad1 = 19;

// asi tambien es una linea aunque tengas saltos
let pregunta = (edad1 >=18) 
             ?'Mayor de edad' 
             :'Menor de edad';

    console.log(pregunta);

let preguntaEdad = `Tengo ${edad1} años y soy ${(edad1 >=18) 
    ?'Mayor' 
    :'Menor'} de edad`;

console.log(preguntaEdad);*/

let dia = 2;
if(dia === 0){
    console.log('Domingo');
} else if(dia ===1){
    console.log('Lunes');
} else if(dia ===2){
    console.log('Martes');
} else if(dia ===3){
    console.log('Miercoles');
}  else if(dia ===4){
    console.log('Jueves');
} else if(dia ===5){
    console.log('Viernes');
} else if(dia ===6){
    console.log('Sabado');
}
else {
    console.log('No es un día');S
}

//Switch - case
/*switch(variable a evaluar){
    case valor:
        -codigo a ejecutar-
    break
    case valor:
        -codigo a ejecutar-
    break;
    default:
        -codigo a ejecutar si sale de las opciones-
        break;

}*/

switch(dia){
    case 0:
        console.log('Domingo');
    break;
    case 1:
        console.log('Lunes');
    break;
    case 2:
        console.log('Martes');
    break;
    case 3:
        console.log('Miercoles');    
    break;
    case 4:
        console.log('Jueves'); 
    break;
    case 5:
        console.log('Viernes');  
    break;
    case 6:
        console.log('Sabado');
    break;
    default:
        console.log('No es un dia valido');
//si no hay un break no se detiene la ejecucion del switch
         
}

let cuponDescuento = 'Oro';
let descuento ;

switch(cuponDescuento){
    case 'Bronce':
    descuento = 5;
        break;
    case 'Plata':
        descuento = 10;
        break;
    case 'Oro':
        descuento =15;
        break;
    default: 
        console.log('Cupon no valido');        
}

console.log(descuento);
