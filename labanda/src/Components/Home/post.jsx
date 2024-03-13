import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserImages } from "../../Redux/actions";

export default function Post(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserImages())
    },[]);
    const userImages = useSelector(state => state.userImages)
    return(
        <div className="post">
            <h2>Subi tu foto en el monumental alentando a La Banda!!!</h2>
            
            <img src={userImages[0].url} alt="user post" />
            <p>{userImages[0].description}</p>
            <p>{userImages[0].user}</p>
            {/* Aca iria un carrusel de fotos que haya subidas */}
            {/* Aca un Subi la tuya aca! con un formulario mini con un boton que despache la imagen y despache la accion de traer todas las imagenes para poder verlas */}
            <form action=""></form>

        </div>
    )
}