import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

import useScript from "../useScript";
import {useDispatch, useSelector} from "react-redux";
import {service} from "../store/action/ServicesAction"


const ServicesItems = () => {
    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    const serviceItems = useSelector((state) => state.serve.services)
    const dispatch = useDispatch()
    useEffect(()  => {
        dispatch(service())
    },[])


    return (
        <>
            {serviceItems.services && serviceItems.services.map((item =>
                <article key={item.id} className="services__item" data-aos="zoom-in">
                <Link to={"/service"} className="services__item-title">{item.title}</Link>
                <div className="services__item-text text">{item.description}</div>
                <div className="services__item-info info-services-item">
                    <ul className="info-services-item__list">
                        <li className="info-services-item__item text">
                            {item.subdescription}
                        </li>
                    </ul>
                </div>
            </article>))}
        </>
    );
};

export default ServicesItems;