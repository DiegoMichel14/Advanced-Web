import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg'
import './App.css'
import ListaEquipo from './componentes/ListaEquipo'

function App() {

  const miembros = [
    {nombre: 'Juan', rol: 'Frontend', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'},
    {nombre: 'Pedro', rol: 'Backend', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'},
    {nombre: 'Diego', rol: 'DevOps engineer', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien.'},
  ];

  return (
    <div>
      <h1>Integrantes del Equipo</h1>
      <ListaEquipo miembros = {miembros} />
    </div>
  );
};

export default App
