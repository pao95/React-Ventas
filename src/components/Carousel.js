import React from 'react';

const Carousel = () => {
    return (


<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://images.sipse.com/5DHtsNHh-tX85448bIzZUB5a3rs=/1654x1016/smart/2020/03/23/1584991130386.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="https://cdn-3.expansion.mx/dims4/default/9bf330a/2147483647/strip/true/crop/1500x844+0+0/resize/1800x1013!/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F51%2F2f%2F3e0822874b7d9b4812e1a87fc319%2Fistock-1093929298.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
    <img src="https://zonanortevision.com.ar/wp-content/uploads/2020/03/home.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>



    )
}

export default Carousel;