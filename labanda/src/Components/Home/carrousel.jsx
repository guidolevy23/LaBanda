import React from "react"
import Slider from "react-slick"
import { useSelector } from "react-redux";

export default function Carrousel (){
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const userImages = useSelector(state => state.userImages)
    // const images = userImages.map((img) => {
    //     return(
    //         <div>
    //             <img src={img.url} alt="user post" />
    //             <p>{img.user}</p>
    //             <p>{img.description}</p>
    //         </div>)
    // })
    return (
        <Slider {...settings} className="slider">
            <div>
                <img src={userImages[0]?.url} alt="Imagen 1" />
                <div className="userInfo">
                    <p>{userImages[0]?.user}</p>
                    <p>{userImages[0]?.description}</p>
                </div>
            </div>
            <div>
                <img src={userImages[0]?.url} alt="Imagen 1" />
            </div>
            <div>
                <img src={userImages[0]?.url} alt="Imagen 1" />
            </div>

        </Slider>
    );

}