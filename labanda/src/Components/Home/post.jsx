import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../Redux/actions";
import './post.css' 
import Carrousel from "./carrousel";

export default function Post(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserImages())
    },[]);
    return(
        <div className="post">
            <h2>Subi tu foto en el monumental alentando a La Banda!!!</h2>
            <Carrousel/>
            {/* Aca un Subi la tuya aca! con un formulario mini con un boton que despache la imagen y despache la accion de traer todas las imagenes para poder verlas */}
            <form action=""></form>

        </div>
    )
}