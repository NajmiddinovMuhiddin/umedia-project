import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {image} from "../store/action/OrdersAction";

const AboutUsInfo = () => {
    const images = useSelector((state) => state.img.images)
    const dispatch = useDispatch()
    useEffect(()  => {
        dispatch(image())
    },[])

    return (
        <>
            {images.pictures && images.pictures.map((item) => (
                <div  key={item.id}  className="mainpage-aboutus__slide swiper-slide">
                    <div className="mainpage-aboutus__slide-img ibg">
                        <img src={item.image} alt=""/>
                    </div>
                    <div className="mainpage-aboutus__slide-text">{item.title}</div>
                </div>
            ))}
        </>
    )
};

export default AboutUsInfo;