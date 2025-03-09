import React, { useState } from 'react';
import DespliegueTarjeta from '../components/TarjetaCredito';

function Tarjeta() {
    const [numeroTarjeta, setNumeroTarjeta] = useState('')

    function handleInputChange(event) {
        const valorIngresado = event.target.value;
        const soloNumeros = valorIngresado.replace(/\D/g, '')
        setNumeroTarjeta(soloNumeros);
    }
    
    return (
        <div>
            <h1>Validador de tarjeta de crédito</h1>
            <input 
                type="text"
                placeholder="Ingresa el número de tarjeta"
                value={numeroTarjeta}
                onChange={handleInputChange}
            />
            <DespliegueTarjeta numeroTarjeta={numeroTarjeta} />
        </div>
    );
}
 
export default Tarjeta; 
