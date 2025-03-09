import React, { useEffect, useState } from "react";

function PromesasAPI() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums")  // Fecth para obtener los datos de la api del link
            .then(response => response.json())
            .then(data => {
                setAlbums(data);
            })
            .catch(error => {
                console.error("Error al obtener datos de la api:", error); // Devolver mensaje de error si falla la obtención
            });
    }, []);

    // Si no se han cargado los datos, mostramos un mensaje de carga
    if (albums.length === 0) {
        return (
        <div>
            <h3>Manejo de promesas</h3>
            <p>Cargando...</p>
        </div>
        );
    }

    // Obtendremos solo los 3 primeros usuarios con distintios userId para no tener al mismo usuario con diferentes roles
    const usuariosUnicos = []; 
    for (let i = 0; i < albums.length && usuariosUnicos.length < 3; i++) {
        let album = albums[i];
        let existe = false;

        for (let j = 0; j < usuariosUnicos.length; j++) {  // Verificamos si ya se agregó ya ese userId
            if (usuariosUnicos[j].userId === album.userId) {
              existe = true;
              break;
            }
        }
        if (!existe) {
            usuariosUnicos.push(album);
        }
    }
    

    // Construimos la lista de elementos para mostrar
    let listaItems = [];
    for (let k = 0; k < usuariosUnicos.length; k++) {
        let item = usuariosUnicos[k];

        listaItems.push(
            <li key={item.userId}>
                <p><strong>Usuario:</strong> {item.userId}</p>
                <p><strong>Rol:</strong> {item.id}</p>
                <p><strong>Tipo:</strong> {item.title}</p>
                {/* Se incluye una imagen de ejemplo, debería fallar al ser una simulación ya que la api no cuenta con imágenes, por lo que aparecerá un ícono */}
                <img src="https://via.placeholder.com/150" alt="Imagen de ejemplo" />
            </li>
        );
    };


    return (
        <div>
            <h3>Datos de usuarios</h3>
            <ul>
                {listaItems}
            </ul>
        </div>
    );
};

export default PromesasAPI;
