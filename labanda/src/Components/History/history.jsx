import React from "react";
import Footer from "../Footer/footer";
import Vidriera from "../Vidriera/vidriera";
import Header from "../Header/header";
import Newsletter from "../Newsletter/newsletter";
import Line from "./line";

export default function History(){
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