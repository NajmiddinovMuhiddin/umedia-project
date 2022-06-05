import React, {useEffect} from 'react';
import Layout from "../Layout";
import AboutUsInfo from "../companents/AboutUsInfo";
import {useDispatch, useSelector} from "react-redux";
import {image} from "../store/action/OrdersAction";
import useScript from "../useScript";


const About = () => {
    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');
    const images = useSelector((state) => state.img.images)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(image())
    }, [])

    return (
        <Layout>
            <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">О
                        компании
                    </div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">О
                        компании
                    </div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1"
                         data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2"
                         data-aos="zoom-in"/>
                </div>
            </section>
            <main className="main">
                <section className="mainpage-aboutus rtl background">
                    <div className="mainpage-aboutus__container">
                        <div className="mainpage-aboutus__left" data-aos="fade-left">
                            <div className="mainpage-aboutus__swiper swiper">
                                <div className="swiper-wrapper">
                                    <AboutUsInfo/>
                                </div>
                            </div>
                        </div>
                        <div className="mainpage-aboutus__right" data-aos="fade-right">
                            <div className="mainpage-aboutus__right-title title-section">
                                <span>о нас</span>UMEDIA
                            </div>
                            <div className="mainpage-aboutus__right-text text">
                                <p>Креативное Digital-агентство. Меняет будущее Вашей Компании у Вас на глазах,
                                    используя последние инструменты Digital-Маркетинга.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare libero lacus
                                    mattis malesuada eu, sit orci non malesuada. Ullamcorper aliquam sit odio
                                    pellentesque viverra vel. Ornare aliquet aliquam morbi at nibh in laoreet
                                    quis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare libero lacus
                                    mattis malesuada eu, sit orci non malesuada. </p>
                            </div>
                        </div>
                    </div>
                    <div className="mainpage-aboutus__anim-items">
                        <div className="mainpage-aboutus__anim-circle" data-aos="zoom-in"/>
                    </div>
                </section>
                <section className="our-values">
                    <div className="our-values__container">
                        <div className="our-values__left" data-aos="fade-right">
                            <div className="our-values__title title-section">
                                <span>Наши<b className="title-section__longline"/></span>
                                Ценности
                            </div>
                        </div>
                        <div className="our-values__right" data-aos="fade-left">
                            <div className="our-values__swiper-actions">
                                <div className="our-values__swiper-pagination"/>
                            </div>
                            <div className="our-values__swiper swiper">
                                <div className="swiper-wrapper">
                                    {images.customer_orientation && images.customer_orientation.map((data, key) =>
                                    <div className="our-values__slide swiper-slide" key={key}>
                                        <div className="our-values__slide-title"
                                             data-swiper-parallax={-50}>{data.title}
                                        </div>
                                        <div className="our-values__slide-text text"
                                             data-swiper-parallax={-100}>
                                            {data.description}
                                        </div>
                                    </div>)}

                                  {/*  <div className="our-values__slide swiper-slide">
                                        <div className="our-values__slide-title"
                                             data-swiper-parallax={-50}>Ориентация на клиента
                                        </div>
                                        <div className="our-values__slide-text text"
                                             data-swiper-parallax={-100}>UMEDIA – современные решения как для
                                            частного сектора, так и для бизнеса. Целью проекта является
                                            формирование новых стандартов и трендов. Какой бы не была
                                            технологичная база и инновации, мы строим их вокруг клиента, а не
                                            подбираем клиента под нее.
                                        </div>
                                    </div>
                                    <div className="our-values__slide swiper-slide">
                                        <div className="our-values__slide-title"
                                             data-swiper-parallax={-50}>Ориентация на клиента
                                        </div>
                                        <div className="our-values__slide-text text"
                                             data-swiper-parallax={-100}>UMEDIA – современные решения как для
                                            частного сектора, так и для бизнеса. Целью проекта является
                                            формирование новых стандартов и трендов. Какой бы не была
                                            технологичная база и инновации, мы строим их вокруг клиента, а не
                                            подбираем клиента под нее.
                                        </div>
                                    </div>
                                    <div className="our-values__slide swiper-slide">
                                        <div className="our-values__slide-title"
                                             data-swiper-parallax={-50}>Ориентация на клиента
                                        </div>
                                        <div className="our-values__slide-text text"
                                             data-swiper-parallax={-100}>UMEDIA – современные решения как для
                                            частного сектора, так и для бизнеса. Целью проекта является
                                            формирование новых стандартов и трендов. Какой бы не была
                                            технологичная база и инновации, мы строим их вокруг клиента, а не
                                            подбираем клиента под нее.
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-values__anim-items">
                        <div className="our-values__anim-circle our-values__anim-circle-1" data-aos="zoom-in"/>
                    </div>
                </section>
                <section className="fixed-wheels-items">
                    <div className="fixed-wheels-items__container">
                        <div className="fixed-wheels-items__left" data-aos="fade-right">
                            <div className="fixed-wheels-items__title title-section ">
                                <span>Наша</span>Команда
                            </div>
                            <div className="fixed-wheels-items__text text">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Tempor eleifend senectus in faucibus quam egestas
                                proin. Pharetra odio rutrum eget quis. Quam.
                            </div>
                        </div>
                        <div className="fixed-wheels-items__right wheels-right-block" data-aos="fade-left">
                            <div className="fixed-wheels-items__list">

                                {images.stuff && images.stuff.map((item, key) =>
                                    <>
                                        <div key={key} className="fixed-wheels-items__item fix-top-item ibg">
                                            <img src={item.image} alt={item.name}/>
                                        </div>
                                    </>
                                )}

                               {/* <div className="fixed-wheels-items__item fix-top-item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/team/04.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/team/04.png"} alt=""/></picture>
                                </div>*/}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="our-partners">
                    <div className="our-partners__container">
                        <div className="our-partners__title title-section" data-aos="fade-right">
                            <span>Наши</span>партнеры
                        </div>
                    </div>
                    <div className="our-partners__items" data-aos="fade-up">
                        <div className="our-partners__slider swiper">
                            <div className="swiper-wrapper">
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/01.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/01.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/02.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/02.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/03.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/03.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/04.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/04.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/05.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/05.png"} alt=""/></picture>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="our-partners__items" dir="rtl" data-aos="fade-up">
                        <div className="our-partners__slider swiper">
                            <div className="swiper-wrapper">
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/01.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/01.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/02.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/02.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/03.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/03.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/04.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/04.png"} alt=""/></picture>
                                </div>
                                <div className="our-partners__item ibg swiper-slide">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/news/05.webp"}
                                                type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/news/05.png"} alt=""/></picture>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="feedback">
                    <div className="feedback__container">
                        <div className="feedback__text" data-aos="fade-up">Хотите обсудить проект?</div>
                        <div className="feedback__title" data-aos="fade-up">Оставьте заявку</div>
                        <div className="feedback__subtitle" data-aos="fade-up">Мы вам скоро позвоним!</div>
                        <form action="#" className="feedback__form form" data-aos="fade-up">
                            <div className="feedback__form-group">
                                <label htmlFor="feedbackFormInput1"
                                       className="feedback__form-label">Ф.И.О</label>
                                <input className="feedback__form-input" id="feedbackFormInput1" type="text"
                                       data-req data-error="error" placeholder="Введите имя"/>
                            </div>
                            <div className="feedback__form-group">
                                <label htmlFor="feedbackFormInput2" className="feedback__form-label">Номер
                                    телефона</label>
                                <div className="feedback__form-phone">
                                    <span className="feedback__form-phone-mask">+998</span>
                                    <input className="feedback__form-input" id="feedbackFormInput2" type="text"
                                           data-req="phone" data-error="Ошибка"
                                           placeholder="Введите номер телефона"/>
                                </div>
                            </div>
                            <button type="submit" className="feedback__form-submit button-blue">Отправить
                            </button>
                        </form>
                    </div>
                    <div className="feedback__anim-items">
                        <div className="feedback__anim-item" data-aos="zoom-in"/>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default About;