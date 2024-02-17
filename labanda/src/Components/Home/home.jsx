import React from "react";
import './estilos.css'

export default function Home(){
    return(
        <>
            <header>
                <div class="caja">
                    <img src="./img/favicon-96x96.png" alt="logo River"/>
                    <h1>LA BANDA</h1>
                </div>
                <nav>
                    <ul>
                        <li><a href="index.html" class="resaltado">Inicio</a></li>
                        <li><a href="somos.html">Somos</a></li>
                        <li><a href="ideas.html">Historia</a></li>
                        <li><a href="contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </header>
            <section id="vidrieraIndex">
                <h1>LA BANDA</h1>
            </section>
            <section id="newsletter">
                <div id="text">
                    <h2>Suscríbete a nuestro newsletter</h2>
                    <h4>Para enterarte de todo lo nuevo que pase en el mundo River! </h4>
                    <h4>Rumores de transferencias, remodelaciones, precios, cuotas, venta de entradas y mas!!!</h4>
                </div>
                <form action="envio.php" method="get">
                    <input type="email" name="correo" placeholder="Tu Email..."/>
                    <button type="submit" class="btn">Suscríbete</button>
                </form>
            </section>
            <section class="proximos_partidos">
                <h2>PROXIMOS PARTIDOS DE LOS MILLOS</h2>
                <div class="partidos">
                    <div class="partido">
                        <div class="equipos">
                            <img class="river" src="./img/favicon-152x152.png" alt="logo river"/>
                            <img src="./img/Escudo_de_Racing_Club.svg.png" alt=" logo racing" />
                        </div>
                        <p>Domingo 5 de noviembre 19:00hs</p>
                        <button type="submit"class="entrada">SACAR ENTRADA</button>
                    </div>
                    <div class="partido">
                        <div class="equipos">
                            <img src="./img/Boca_escudo.png" alt="logo boca" />
                            <img class="river" src="./img/favicon-152x152.png" alt="logo river"/>
                        </div>
                        <p>Domingo 12 de noviembre 17:00hs</p>
                        <button type="submit"class="entrada">SACAR ENTRADA</button>
                    </div>
                    <div class="partido">
                        <div class="equipos">
                            <img class="river" src="./img/favicon-152x152.png" alt="logo river" />
                            <img src="./img/Escudo_del_Club_Atlético_Independiente.svg.png" alt="logo independiente" />
                        </div>
                        <p>Domingo 19 de noviembre 21:00hs</p>
                        <button type="submit"class="entrada">SACAR ENTRADA</button>
                    </div>
                </div>
            </section>
            <footer>
                <div class="foto_info">
                    <img src="./img/favicon-96x96.png" alt="logo River"/>
                    <div class="info">
                        <h3>Guido Levy</h3>
                        <p>Tecnicatura Universitaria en Desarrollo de Software UADE 2023&copy;</p>
                        <p>Armonia de color: obtuve los colores extrayendolos del escudo de River, obteniendo una gama de rojos, y un color claro y uno oscuro, simil negro.</p>
                        <p>Tipografia utilizada: Barlow</p> 
                    </div>
                </div>
                <div class="redes">
                    <a href="https://es-es.facebook.com/riverplateoficial/" target="_blank" rel="noopener noreferrer"><img class="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1694629058/facebook.png" alt="facebook"/></a>
            
                    <a href="https://www.x.com/riverplate" target="_blank" rel="noopener noreferrer"><img class="red2" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1694629360/x.png" alt="twitter"/></a>
            
                    <a href="https://www.instagram.com/riverplate/?hl=es" target="_blank" rel="noopener noreferrer"><img class="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1694629275/instagram.png" alt="instagram"/></a>

                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><img class="red" src="https://res.cloudinary.com/di9meg3xu/image/upload/v1698793894/github_logo.png" alt="github"/></a>
                </div>
            </footer>
        </>
    )
} 