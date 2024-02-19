import React from "react";
import data from './data'

export default function Match(){
    const plays = data.partidos.map((elemento)=>{
        return (
            <div className="partido">
                <div className="equipos">
                    <img className="river" src={elemento.river} alt="logo Club Atletico River Plate"/>
                    <img src={elemento.rival} alt={elemento.alt} />
                </div>
                <p>{elemento.date}</p>
                <button type="submit"className="entrada">SACAR ENTRADA</button>
            </div>
        )
    });
    return(
        <div className="partidos">
            {plays}
        </div>
    )
}