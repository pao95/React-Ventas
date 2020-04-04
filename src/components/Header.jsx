import React from 'react';

function Header ({titulo}){


    return (
<nav className="navbar fixed-top navbar-dark bg-dark">
  <h1 className="navbar-text">
{titulo}  </h1>
</nav>
    )
}

export default Header;
