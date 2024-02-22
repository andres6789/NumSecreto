
//titulo es un objeto que tiene metodos que define su comportamiento
/*
let titulo=document.querySelector('h1');//Es el metodo que permite acceder a los elementos de html
titulo.innerHTML='Juego del Número Secreto';//El metodo innerHTML para definirle un texto al h1

let parrafo=document.querySelector('p');// sintaxis document luego el metodo y luego el elemento html que deseo modificar
parrafo.innerHTML='Digite un número entre 1 y 10';
*/
//se crea la función que se va a llamar en el boton al hacer el evento onclick
//sintaxis para crear la función

//elemento es la etiqueta html que se va a cambiar --- texto es 
//los parametros son cosas que llegan a la función

//Juego

let numeroSecreto=0;
let intentos=1;
let listaNumerosSorteados=[];//La usamos para no repetir un n[umero que ya se haya jugado]
let numeroGenerado=0;

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return; //Es normal que una función retorne algo 
}
function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById('valorUsuario').value);//input captura el valorUsuario en String, usamos parseInt para psar el string a numero entero.
    console.log(numeroDeUsuario===numeroSecreto);//tripe igual para igual de tipo de dato y tipo de valor
    console.log(intentos);
    if (numeroDeUsuario===numeroSecreto){
        
     asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'vez' :'veces'} `);//Se utiliza el operador ternario para vez y veces
     document.getElementById('reiniciar').removeAttribute('disabled');//se usa el id reiniciar y aplicamos la funcion remove para quitar el atributo disable
    }else{
        //el usuario no acertó
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
     
    }
    return;    
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';//sintaxis para limpiar el imput usando el id y poniendo el valor como vacio
}
function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*10)+1;  
    //si el numero generado esta en la lista se hace una operacion si no se hace otra
    if(listaNumerosSorteados.includes(numeroGenerado)){//includes ayuda a buscar el numero generado en la lista para sabaer si ya se ha jugado o no
      
       return generarNumeroSecreto();
    }  else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1','JUEGO DEL NÚMERO SECRETO');//para llamar a la funcion es nombre de la funcion con parentesis
    //para llamarla en html se puede solo en el evento
    asignarTextoElemento('p','Digitar un número del 1 al 10');
    //generar el numero aleatorio
    numeroSecreto=generarNumeroSecreto();
    //inicializar el número de intentos
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja 
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    
    //Desahabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');//para query selectro se usa el id con #
    //el atritubo disable queda como verdadero para habilitarlo al iniciar el juego
}

condicionesIniciales();

//fin juego













/*
//Desafios 1
function saludo(){
    console.log('Hola mundo');
}
saludo();

function saludoNombre(nombre){
    let nombreUsuario= prompt('Escriba su nombre: ');
    return console.log(`Hola ${nombreUsuario}`);

}
saludoNombre();

function dobleNumero(numero){
    let numeroUsuario=parseFloat(prompt("Escriba un numero: "));
    return console.log(numeroUsuario*2);
}
dobleNumero();

function promedio(num1,num2,num3){
    let numero1=parseFloat(prompt('Digite un numero: '));
    let numero2=parseFloat(prompt('Digite un numero: '));
    let numero3=parseFloat(prompt('Digite un numero: '));
    let promedio=(numero1+numero2+numero3)/3;
    return console.log(`el promedio es: ${promedio}`);

}
promedio();

function mayor(num1,num2){
    let numero1=parseFloat(prompt('Digite un numero: '));
    let numero2=parseFloat(prompt('Digite un numero: '));
    if(numero1>numero2){
        console.log(`El numero mayor es: ${numero1}`);

    }else if(numero2>numero1){
        console.log(`El numero mayor es: ${numero2}`);

    }else{
        console.log(`los numeros son iguales`);
    }
}
mayor();

function multiSiMismo(num){
    let numero=parseFloat(prompt('Digite un numero: '));
    let multi=numero*numero;
    console.log(`El resultado es: ${multi}`);


}
*/

//Desafios 2
/*indice de masa corporal
function IMC(){
    let alturaPersona=parseFloat(prompt('Digite su altura en metros ej: 1,57 : '));
    let pesoPersona=parseInt(prompt('Digite su peso en  kilogramos: '));
    let imc=pesoPersona/(alturaPersona**2);
    console.log(`El IMC es: ${imc}`);
}

//factorial
function factorial(){
    let numeroFactorial=1;
    let numeroUsuario=parseInt(prompt('Digite un número para calcular el factorial: '));
    for(var i=1;i<=numeroUsuario;i++){
        numeroFactorial=i*numeroFactorial;

    }
    alert(`el factorial de ${numeroUsuario} es ${numeroFactorial}`);
}*/