import React from "react";
import './home.css'
import Matches from "./matches";
import Footer from "../Footer/footer";
import Vidriera from "../Vidriera/vidriera";
import Header from "../Header/header";

export default function Home(){
    const name = {name: "LA BANDA"}
    return(
        <>
            <Header></Header>
            <Vidriera {...name}/>
            <section id="newsletter">
                <div id="text">
                    <h2>Suscríbete a nuestro newsletter</h2>
                    <h4>Para enterarte de todo lo nuevo que pase en el mundo River! </h4>
                    <h4>Rumores de transferencias, remodelaciones, precios, cuotas, venta de entradas y mas!!!</h4>
                </div>
                <form action="envio.php" method="get">
                    <input type="email" name="correo" placeholder="Tu Email..."/>
                    <button type="submit" className="btn">Suscríbete</button>
                </form>
            </section>
            <Matches/>
            <Footer></Footer>
        </>
    )
} 