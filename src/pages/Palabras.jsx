import React, { useState } from 'react'
import ListaPalabras from '../components/ListaPalabras';

function Palabras() {
    const [mostrar, setMostrar] = useState(true); // Cambiar la visualización del componente

    const toggleMostrar = () => {
        if(mostrar === true) {
            setMostrar(false);
        } else {
            setMostrar(true);
        }
    };

    let botonTexto;
    if (mostrar === true) {
        botonTexto = "Oculatar lista";
    } else {
        botonTexto = "Mostrar lista";
    };

    return (
        <div> 
            <h1>Lista de palabras</h1>
            <button onClick={toggleMostrar}>
                {botonTexto}
            </button>
            {mostrar && <ListaPalabras />}
        </div>
    );
}

export default Palabras;
