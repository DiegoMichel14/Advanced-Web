import React from "react";

const algoritmoLuhn = (numeroTarjeta) => {
    if (numeroTarjeta === "") {
        return "Ingresa un número de tarjeta";
    };
    
    let arreglo = [];
    let suma = 0;    

    for(let i = numeroTarjeta.length - 1; i >= 0; i--){
        if(i % 2 == 0){   // Si el módulo 2 de la posición i = 0, se ingresa al arreglo multiplicado * 2
            arreglo.push(numeroTarjeta[i] * 2)  // Multiplicamos * 2 el valor de dicha posición
        } else if(i % 2 != 0) {
            arreglo.push(parseInt(numeroTarjeta[i])) // De lo contrario lo ingresamos directamente
        };
    };

    for(let i = 0; i < arreglo.length; i++){
        if(arreglo[i] > 9) {  // Si el elemento es mayor a 9
            arreglo[i] = arreglo[i] - 9;  // Le restamos 9 y sustuimos el valor
        };
    };

    for(const elemento of arreglo) {  // Sumamos todos los elementos en el arreglo
        suma += elemento;
    };

    if(suma % 10 == 0) {
        return "Tarjeta válida";
    } else {
        return "Tarjeta no válida"
    };

};


const DespliegueTarjeta = ({ numeroTarjeta }) => {
    const resultado = algoritmoLuhn(numeroTarjeta);
    return (
      <h3>La tarjeta es {resultado}</h3>
    );
  };


export default DespliegueTarjeta;