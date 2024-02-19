import React from "react";
import { Link, useLocation } from "react-router-dom";


export default function Header (){
    const location = useLocation();
    const rutaActual = location.pathname;
    
    return(
        <header>
                <div class="caja">
                    <img src="https://www.cariverplate.com.ar/images/favicon-96x96.png" alt="logo Club Atletico River Plate"/>
                    <a href="/"><h1>LA BANDA</h1></a>
                </div>
                <nav>
                    <ul>
                        <li><a href="/" className={rutaActual === "/" ? "resaltado" : ''}>Inicio</a></li>
                        <li><a href="/somos" className={rutaActual === "/somos" ? "resaltado" : ''}>Somos</a></li>
                        <li><a href="/historia" className={rutaActual === "/historia" ? "resaltado" : ''}>Historia</a></li>
                        <li><a href="/contacto" className={rutaActual === "/contacto" ? "resaltado" : ''}>Contacto</a></li>
                    </ul>
                </nav>
            </header>
    )
}