import React from "react";

const Lista = ({productos}) => {
    if(productos.length === 0){
        return (<h2>No hay elementos en la lista</h2>)
    } else {
    return (
        <ul>
            {productos.map((producto) => (
                <li key={producto.album} style={{textAlign: "left"}}>
                    {producto.autor} - {producto.album}
                </li>
                ))}
        </ul>
        );
    }
}

export default Lista;
