import React from 'react';

const Producto = ({ producto, carrito, agregarCarrito, productos }) => {
    const { nombre, precio, id, img, cant } = producto

    const seleccionarProducto = (id) => {

        
       const comprobarExistencia =  carrito.filter(pro => pro.id === id) 

       
        if(comprobarExistencia.length === 0)
        {
            
            const producto  = productos.filter(product => product.id === id)

         producto[0].cant +=1;
            console.log(producto[0].cant)
            agregarCarrito([...carrito, producto[0]])
     
        
        }else {


        }
      
        
  
    }

    const eliminarProducto = (id) => {
        const produc = carrito. filter (producto => producto.id !== id);
        agregarCarrito(produc)
    }
    return (
        <div className="Container m-2">
            
        {productos ?
            (
                <div className="card">
                <div className="card-body" >
                <img src={img}  width="100px" height="100px" alt="..."/>
                    <h5 className="card-title">{nombre}</h5>
                    <p className="card-text">${precio}</p>
                    <button type="button" className="btn btn-primary"
                     onClick={()=>seleccionarProducto(id)}>Comprar</button>
                </div>
                </div>
            )

            :
            
            (
                <li class="list-group-item" >{nombre} ${precio} {cant}
                <br></br>
                <button type="button" class="btn btn-secondary m-1"
                
                onClick={()=> eliminarProducto(id)}>Eliminar</button>

                </li>
            
     
            )

        }
</div>  

    )
}


export default Producto;