import React from "react";
import { useEffect, useState } from "react";

const ListaPalabras = () => {
    const [palabras, setPalabras] = useState([]); // Estado de la lista de palabras
    const [nuevaPalabra, setNuevaPalabra] = useState(""); // Estado para el valor de la nueva palabra

    useEffect(() => {
        setPalabras(["Ejemplo", "Tacos", "Pan"]);  // Iniciar la lista al montar el componente

        return () => {   // Limpiar la lista al desmontar el componente
            setPalabras([]);
        };
    }, []);

    function agregarPalabra() {
        const palabra = nuevaPalabra.trim();  // trim solo elimina espacios en blanco
        if (palabra === '') {
          return;
        }
        // Si la palabra ya existe, mostramos un mensaje y salimos de la función
        if (palabras.includes(palabra)) {
          window.alert('La palabra ya existe');  // Despliegue de mensaje de error con palabra repetida
          return;
        }
        // Si no existe, se agrega a la lista
        setPalabras([...palabras, palabra]);  // con spread . . . tomamos todos los elementos del arreglo palabras y al final agregamos la nueva
        setNuevaPalabra('');
    } 

    const listaItems = [];  // Construimos la lista de elementos
    for(let i = 0; i < palabras.length; i++){
        listaItems.push(<li key={i}>{palabras[i]}</li>);
    }

    return (
        <div>
            <h3>Lista de palabras:</h3>
            <ul>
                {listaItems}
            </ul>
            <input
                type="text"
                placeholder="Ingresa una palabra"
                value={nuevaPalabra}
                onChange={(e) => setNuevaPalabra(e.target.value)}
            />
            <button onClick={agregarPalabra}>Agregar palabra</button>
        </div>
    );
};

export default ListaPalabras; 