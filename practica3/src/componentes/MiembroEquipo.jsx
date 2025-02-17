import React from 'react';

const MiembroEquipo = ({ nombre, rol, descripcion }) => {

  return (
    <div className="miembro-equipo">
      <h2>{nombre}</h2>

     <p><strong>rol:</strong> {rol}</p>

     <p>{descripcion}</p>
    </div>
  );
}; 

export default MiembroEquipo;