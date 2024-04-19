import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";

export default function Line(){
    const pageImages = useSelector(state => state.pageImages)
    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const images = pageImages.map((elemento) => {
        return(
            <div class="evento">
                <div class="event-content">
                    <div className="text">
                        <div class="event-date">{elemento.year}</div>
                        <div class="event-title">{elemento.title}</div>
                        <div class="event-description">{elemento.description}</div>
                    </div>
                    <div className="imagen">
                        <img src={elemento.url} alt={elemento.alt} />
                    </div>
                </div>
            </div>
            )
    })
    return (
        <div className="slider1">
            <Slider {...settings} className="myCustomSlider">
                {images}
            </Slider>

        </div>
    )
    // const items = pageImages.map((elemento) => {
    //     return(
    //         <div class="event">
    //             <div class="event-content">
    //             <div class="event-date">{elemento.year}</div>
    //             <div class="event-title">{elemento.title}</div>
    //             <div class="event-description">{elemento.description}</div>
    //             <img src={elemento.url} alt={elemento.alt} />
    //             </div>
    //         </div>
    //     )
    // })
    // return(
    //     <section class="ideas">
    //         <h1>122 años de historia llena de momentos como estos</h1>
    //         <div class="timeline">
    //             <>{items}</>
    //         </div>
    //     </section>
    // )
}