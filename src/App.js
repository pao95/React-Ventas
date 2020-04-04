import React, { Fragment, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.js'
import Producto from './components/Producto.js';
import Carousel from './components/Carousel.js';
import Carrito from './components/Carrito.js';

function App() {


  const [productos, guardarProducto] = useState([
    { id: 1, nombre: 'Camisa react.js', precio: 50, cant: 0,img: "https://d26lpennugtm8s.cloudfront.net/stores/526/574/products/img_63051-5940a955e5cfdbdc2c15495550841494-1024-1024.jpg" },
    { id: 2, nombre: 'Camisa node.js', precio: 40, cant: 0, img: "https://i.imgur.com/scrcyJ3.png"},
    { id: 3, nombre: 'Camisa angular', precio: 30, cant: 0, img: "https://srv.latostadora.com/designall.dll/angular__angularjs--i:135623783236013562321243;b:f8f8f8;s:H_J3;f:f;k:371ef3cabec6a9ebeebfd885b2395da8;p:1.jpg" },
    { id: 4, nombre: 'Camisa vue.js', precio: 20, cant: 0, img: "https://ae01.alicdn.com/kf/HTB1WQGcnMvD8KJjy0Flq6ygBFXa6/Nodejs-JavaScript-camiseta.jpg" },
    { id: 5, nombre: 'Camisa html5', precio: 20, cant: 0, img: "https://http2.mlstatic.com/remera-ranglan-hombre-html5-html-5-D_NQ_NP_942561-MLA29603557782_032019-Q.jpg" },
    { id: 6, nombre: 'Camisa php', precio: 20, cant: 0, img: "https://frikio.site44.com/sites/frikio.com.ar/files/productcache/4/8/php.jpg" },
    { id: 7, nombre: 'Camisa Java', precio: 20, cant: 0, img: "https://http2.mlstatic.com/remera-java-programacion-D_NQ_NP_957040-MLA31356346836_072019-F.jpg" },
    { id: 8, nombre: 'Camisa python', precio: 20, cant: 0, img: "https://frikio.site44.com/sites/frikio.com.ar/files/productcache/4/7/pythonii.jpg" },
    { id: 9, nombre: 'Camisa css', precio: 20,cant: 0, img: "https://srv.latostadora.com/designall.dll/i_hate_css_dark--i:135623243679201356232017092627;h:270;s:H_A27;b:C2C0C1;k:cae832738be065fa475f75c920a82614;p:1.jpg" },
    { id: 10, nombre: 'Camisa c++', precio: 20, cant: 0, img: "https://cimec.org.ar/foswiki/pub/Main/AED/ChuckNorris/remera1.png" },

  ]);

  const [carrito, agregarCarrito] = useState([

  ])
  const fecha = new Date().getFullYear();

  return (
    <Fragment>

      <Header
        titulo='Tienda virtual'
      />

      <Carousel />
  
        <div class="row m-5">
          <div class="col-9">
          <h1 className="text-center ">Lista de productos</h1>
            <div className="card-deck m-5">
              {productos.map(producto => {

                return <Producto key={producto.id}
                  producto={producto}
                  carrito={carrito}
                  productos={productos}
                  agregarCarrito={agregarCarrito}
                />
              })}
            </div>
          </div>
          <div class="col-3">

            <Carrito carrito = {carrito} agregarCarrito={agregarCarrito}/>
          </div>
      





      </div>


      <Footer fecha={fecha} />

    </Fragment>

  );
}

export default App;
