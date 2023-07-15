/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, 
      si la edad ingresada no es un número válido indicarlo en un mensaje.*/
      
      var edad = parseInt(prompt("Ingrese su edad:"))
      while (true) {
            
            
            if (isNaN(edad)) {
              console.log("El numero ingresado no es valido.")
            } else {
              if (edad >= 18) {
                console.log("Usted esta habilitado para conducir.")
              } else {
               console.log("Debe ser mayor de 18 años para conducir.")
              }
              break;
            }
          }

      //     2- Escribir un programa que solicite una nota (número) de 0  a 10. 
      //Luego mostrar la calificación en un alert según los siguientes rangos de nota:

      //     0-2: Muy deficiente
      //     3-4: Insuficiente
      //     5-6: Suficiente
      //     7: Bien
      //     8-9: Notable
      //     10: Sobresaliente
          
      //     Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
      // Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.



 //usar switch
while (true) {
      var calificacion='';
      var nota = parseFloat(prompt("Ingrese la nota:"));
      if (isNaN(nota)) {
    alert("Por favor ingrese un número válido");

  } else if (nota < 0 || nota > 10) {
    alert("Número erróneo.");


  } else {if (nota >= 0 && nota <= 2) {
      calificacion = "Muy deficiente";
    } else if (nota >= 3 && nota <= 4) {
      calificacion = "Insuficiente";
    } else if (nota >= 5 && nota <= 6) {
      calificacion = "Suficiente";
    } else if (nota == 7) {
      calificacion = "Bien";
    } else if (nota >= 8 && nota <= 9) {
      calificacion = "Notable";
    } else if (nota == 10) {
      calificacion = "Sobresaliente";
    }
    
    alert("La calificación es: " + calificacion);
    

    break;
  }
}



// 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. 
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

// Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp


let textos=prompt("ingrese una frase")
let listaDeTextos=''

while(textos){
 
      listaDeTextos= listaDeTextos + " - " + textos
      textos=prompt("ingrese una frase") 
} 
   


console.log(listaDeTextos);



// 4- Realiza un script que pida números hasta que se pulse “cancelar”. 
//Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.



let numero = parseFloat(prompt("Ingrese un numero: "));
let suma = 0;
if(isNaN(numero)){
  alert("el numero ingresado no es válido")
  numero = parseFloat(prompt("Ingrese un numero: ")); 
while (!isNaN(numero)){
    suma = suma + numero;
    numero = parseFloat(prompt("Ingrese un numero: "));   
}
  
}


console.log(`La suma de los números es = ${suma}`);




// Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

// El algoritmo para calcular la letra del dni es el siguiente :

// El número debe ser entre 0 y 99999999
// Debemos calcular el resto de la división entera entre el número y el número 23.
// Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
// Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
// Deberá de repetirse el proceso hasta que el usuario pulse «cancelar»


      
let documento=parseInt(prompt("Por favor ingrese el numero de documento"))
let resto=0

while(!isNaN(documento)){
  while (documento>0 && documento<99999999){ 
    resto=documento%23
     switch (resto) {
      case 0:
        console.log(`corresponde la letra "T"`)
        break;
      case 1:
          console.log(`corresponde la letra "R"`)
          break;
      case 2:
            console.log(`corresponde la letra"W"`)
            break;       
      case 3:
           console.log(`corresponde la letra"A"`)
              break;
      case 4:
           console.log(`corresponde la letra"G"`)
              break;
      case 5:
           console.log(`corresponde la letra"M"`)
              break;
      case 6:
            console.log(`corresponde la letra "Y"`)
              break;
      case 7:
            console.log(`corresponde la letra"F"`)
              break;
      case 8:
            console.log(`corresponde la letra"P"`)     
                break;        
      case 9:
            console.log(`corresponde la letra"D"`)
                  break;
      case 10:
            console.log(`corresponde la letra"X"`)
                    break;
      case 11:
        console.log(`corresponde la letra"B"`)
            break;
      case 12:
        console.log(`corresponde la letra"U"`)
        break;
      case 13:
        console.log(`corresponde la letra"J"`)
        break;
      case 14:
        console.log(`corresponde la letra"Z"`)
        break;
      case 15:
        console.log(`corresponde la letra"S"`)
        break;
      case 16:
        console.log(`corresponde la letra"Q"`)
        break;
      case 17:
        console.log(`corresponde la letra"V"`)
        break;
      case 18:
        console.log(`corresponde la letra"H"`)
        break;
      case 19:
        console.log(`corresponde la letra"L"`)
        break;
      case 20:
        console.log(`corresponde la letra"C"`)
        break;
      case 21:
        console.log(`corresponde la letra"K"`)
        break;
      case 0:
        console.log(`corresponde la letra"E"`)
        break;
      default:
        console.log("el numero ingresado no es valido")
        break;

  }
     documento=parseInt(prompt("Por favor ingrese el numero de documento"))

  }
}
