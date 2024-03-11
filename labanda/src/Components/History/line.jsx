import React from "react";
import { useSelector } from "react-redux";

export default function Line(){
    const pageImages = useSelector(state => state.pageImages)
    const items = pageImages.map((elemento) => {
        return(
            <div class="event">
                <div class="event-content">
                <div class="event-date">{elemento.year}</div>
                <div class="event-title">{elemento.title}</div>
                <div class="event-description">{elemento.description}</div>
                <img src={elemento.url} alt={elemento.alt} />
                </div>
            </div>
        )
    })
    return(
        <section class="ideas">
            <h1>122 años de historia llena de momentos como estos</h1>
            <div class="timeline">
                <>{items}</>
            </div>
        </section>
    )
}