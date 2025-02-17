import React from "react";
import MiembroEquipo from "./MiembroEquipo"

const ListaEquipo = ({ miembros }) => {
    return (
        <div>
            <h1>Miembros del Equipos</h1>

            {miembros.map((miembro, index) => (
                <MiembroEquipo 
                 key={index} 
                 nombre={miembro.nombre} 
                 rol={miembro.rol} 
                 descripcion={miembro.descripcion} 
              />    
            ))}
        </div>
    )
}

export default ListaEquipo;