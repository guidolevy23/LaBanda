import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sendEmail } from "../../Redux/actions";


export default function Newsletter(){
    const [email , setEmail] = useState('');
    const dispatch = useDispatch();
    const handleOnClick = (e) =>{
        e.preventDefault()
        dispatch(sendEmail(email))
        setEmail('')
    }
    const handleEmailChange = (e) =>{
        e.preventDefault()
        setEmail(e.target.value)
    }
    return(
        <section id="newsletter">
            <div id="text">
                <h2>Suscríbete a nuestro newsletter</h2>
                <h4>Para enterarte de todo lo nuevo que pase en el mundo River! </h4>
                <h4>Rumores de transferencias, remodelaciones, precios, cuotas, venta de entradas y mas!!!</h4>
            </div>
            <div className="form">
                <input type="email" value={email} onChange={handleEmailChange} name="correo" placeholder="Tu Email..."/>
                <button onClick={handleOnClick} type="submit" className="btn">Suscríbete</button>
            </div>
        </section>
    )
}