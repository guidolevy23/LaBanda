import React, { useEffect } from "react";
import Footer from "../Footer/footer";
import Vidriera from "../Vidriera/vidriera";
import Header from "../Header/header";
import Newsletter from "../Newsletter/newsletter";
import Line from "./line";
import { useDispatch } from "react-redux";
import { getPageImages } from "../../Redux/actions";

export default function History(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPageImages())
    },[]);
    const name = {name: "HISTORIA"}
    return(
        <>
            <Header/>
            <Vidriera {...name}/>
            <Line/>
            <Newsletter/>
            <Footer/>
        </>
    )
} 