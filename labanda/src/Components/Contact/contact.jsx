import React from "react";
import Footer from "../Footer/footer";
import Vidriera from "../Vidriera/vidriera";
import Header from "../Header/header";
import Newsletter from "../Newsletter/newsletter";
import Form from "./form";

export default function Home(){
    const name = {name: "CONTACTO"}
    return(
        <>
            <Header/>
            <Vidriera {...name}/>
            <Form/>
            <Newsletter/>
            <Footer/>
        </>
    )
} 