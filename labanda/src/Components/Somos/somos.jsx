import React from "react";
import Header from "../Header/header";
import Vidriera from "../Vidriera/vidriera";
import Newsletter from "../Newsletter/newsletter";
import Footer from "../Footer/footer";
import SectionSomos from "./sectionSomos";

export default function Somos(){
    const name = {
        name: "SOMOS"
    }
    return(
        <>
            <Header/>
            <Vidriera {...name}/>
            <SectionSomos/>
            <Newsletter/>
            <Footer/>
        </>
    )
}