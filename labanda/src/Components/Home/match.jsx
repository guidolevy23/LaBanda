import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHomeImages } from "../../Redux/actions";

export default function Match(){
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getHomeImages())
    },[]);
    const homeImages = useSelector((state) => state.homeImages);
    const partidos = [];
    for (let i = 0; i < 3; i++) {
        if (i === 0 || i % 2 === 0) {
            const partido = {
                home: homeImages[0]?.url,
                away: homeImages[i+1]?.url,
                altHome: homeImages[0]?.alt,
                altAway: homeImages[i+1]?.alt,
                date: homeImages[i+1]?.date
            }
            partidos.push(partido)
        }else{
            const partido = {
                away: homeImages[0]?.url,
                home: homeImages[i+1]?.url,
                altAway: homeImages[0]?.alt,
                altHome: homeImages[i+1]?.alt,
                date: homeImages[i+1]?.date
            }
            partidos.push(partido)
        }
        
    }
    const plays = partidos.map((elemento)=>{
        return (
            <div className="partido">
                <div className="equipos">
                    <img className={elemento.altHome === "Escudo del Club Atletico River Plate" ? "river" : "visitante"} src={elemento.home} alt={elemento.altHome}/>
                    <img className={elemento.altAway === "Escudo del Club Atletico River Plate" ? "river" : "visitante"} src={elemento.away} alt={elemento.altAway} />
                </div>
                <p>{elemento.date}</p>
                <button type="submit"className={elemento.altHome === "Escudo del Club Atletico River Plate" ? "entrada" : "noEntrada"}>{elemento.altHome === "Escudo del Club Atletico River Plate" ? "SACAR ENTRADA" : "NO DISPONIBLE"}</button>
            </div>
        )
    });
    
    return(
        <div className="partidos">
            {plays}
        </div>
    )
}