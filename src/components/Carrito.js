import React from 'react';
import './Carrito.css'

import Producto from './Producto';

const Carrito = ({ carrito, agregarCarrito }) => {



    return (

        <div className="Carrito">
            <h2>Carrito de compras</h2>
            
            <ul class="list-group" >
            {carrito.map(producto => {
                return <Producto key={producto.id}
                                     producto={producto}
                                     carrito = {carrito}
                                     agregarCarrito={agregarCarrito}/>
                    
                
            })}
             </ul>
        </div>

    );
}

export default Carrito;