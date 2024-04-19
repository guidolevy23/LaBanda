import React from "react";
import './home.css'
import Matches from "./matches";
import Footer from "../Footer/footer";
import Vidriera from "../Vidriera/vidriera";
import Header from "../Header/header";
import Newsletter from "../Newsletter/newsletter";
import Post from "./post";


export default function Home(){
    const name = {name: "LA BANDA"}
    return(
        <>
            <Header/>
            <Vidriera {...name}/>
            <Newsletter/>
            <Matches/>
            {/* <Post/> */}
            <Footer/>
        </>
    )
} 