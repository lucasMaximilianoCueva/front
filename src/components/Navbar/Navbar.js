import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

const Navbar = () => {
    const [dataUser, setDataUser] = useState([]);

    useEffect(() => {
      fetch("/api/getuser")
        .then((res) => res.json())
        .then((res) => setDataUser(res))
        .catch((err) => {
          console.log(`error: ${err}`);
        });
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-5">
                <Link className="navbar-brand title" to="/">
                    <img src="/img/logo.png" alt="logo" className="logo"/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 li_menu_item">
                        <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/about">Acerca</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" to="/contacto">Contacto</Link></li>
                        <li className="nav-item"><Link className="nav-link" to={{pathname: "https://www.getonbrd.com/blog/posts" }} target="_blank">Blog</Link></li>

                        {!dataUser.name && <li className="nav-item"><Link className="nav-link" to="/login">Iniciar sesion</Link></li>}
                        {dataUser.name && <li className="nav-item"><Link className="nav-link" to={`/dashboard/`}>Mi perfil</Link></li>}

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
