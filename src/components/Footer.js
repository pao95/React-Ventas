import React from 'react';


const Footer = ({fecha}) => {

        return (
            <footer className=" uk-position-bottom m-5">
                <p className="text-center"> Todos los derechos reservados &copy; {fecha}</p>
            </footer>
        )

}

export default Footer;