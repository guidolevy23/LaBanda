import React from "react";

export default function Footer(){
    return(
        // <footer>
        //         <div className="foto_info">
        //             <img src="https://www.cariverplate.com.ar/images/favicon-96x96.png" alt="logo River"/>
        //             <div className="info">
        //                 <h3>Guido Levy</h3>
        //                 <p>Tecnicatura Universitaria en Desarrollo de Software UADE 2023&copy;</p>
        //                 <p>Armonia de color: obtuve los colores extrayendolos del escudo de River, obteniendo una gama de rojos, y un color claro y uno oscuro, simil negro.</p>
        //                 <p>Tipografia utilizada: Barlow</p> 
        //             </div>
        //         </div>
        //         <div className="redes">
        //             <a href="https://es-es.facebook.com/riverplateoficial/" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1694629058/facebook.png" alt="facebook"/></a>
            
        //             <a href="https://www.x.com/riverplate" target="_blank" rel="noopener noreferrer"><img className="red2" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1694629360/x.png" alt="twitter"/></a>
            
        //             <a href="https://www.instagram.com/riverplate/?hl=es" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1694629275/instagram.png" alt="instagram"/></a>

        //             <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1698793894/github_logo.png" alt="github"/></a>
        //         </div>
        //     </footer>
            <footer>
                <div className="data">
                    <a href="/"><img className="logo" src="https://www.cariverplate.com.ar/images/favicon-96x96.png" alt="logo River"/></a>
                    <ul>
                        <li><a href="/" >Inicio</a></li>
                        <li><a href="/somos" >Somos</a></li>
                        <li><a href="/historia" >Historia</a></li>
                        <li><a href="/contacto" >Contacto</a></li>
                    </ul>
                </div>
                <div class="barra-horizontal"></div>
                <div className="socialmedia">
                    <p id="copyright">&copy; La Banda. All rights reserved.</p>
                    <div className="redes">
                        <a href="https://es-es.facebook.com/riverplateoficial/" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1713492808/facebook.png" alt="facebook"/></a>
            
                        <a href="https://www.x.com/riverplate" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1713492939/twitter.png" alt="twitter"/></a>
            
                        <a href="https://www.instagram.com/riverplate/?hl=es" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1713493482/instagram.png" alt="instagram"/></a>

                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img className="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1713493563/github.png" alt="github"/></a>
                    </div>
                </div>
            </footer>
    )
}