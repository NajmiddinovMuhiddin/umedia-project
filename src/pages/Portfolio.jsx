import React, {useEffect, useState} from 'react';
import Layout from "../Layout";
import {useDispatch, useSelector} from "react-redux";
import {portfolioItems} from "../store/action/PortfolioAction";



const Portfolio = () => {
    const [portfolioItem, setPortfolioItem] = useState()
    const portfolioData = useSelector((state) => state.portfol.portfolios)
    const dispatch = useDispatch()
    useEffect(()  => {
        dispatch(portfolioItems())
    },[])

    console.log(portfolioData)
    return (
        <Layout>
            <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Портфолио
                    </div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Портфолио</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>
            <main className="main">
                <section className="portfolio-all">
                    <div className="portfolio-all__container">
                        <div className="portfolio-all__sort">
                            <button className="portfolio-all__sort-button _icon-kubiks" type="button">button</button>

                            {portfolioData.categories && portfolioData.categories.map((item) =>(
                                <div className="portfolio-all__sort-items" key={item.id}>
                                    <div className="portfolio-all__sort-item" onClick={() => setPortfolioItem(item.portfolio)}>{item.title}</div>
                                    {/*<div className="portfolio-all__sort-item">Смм</div>
                                    <div className="portfolio-all__sort-item">ивент</div>
                                    <div className="portfolio-all__sort-item">ДИзайн</div>
                                    <div className="portfolio-all__sort-item">Смм</div>
                                    <div className="portfolio-all__sort-item">ивент</div>*/}
                                </div>
                            ))}
                        </div>

                        <div className="portfolio-all__row portfolio-all__row-1">
                            {/*{portfolioItem.portfolio && portfolioItem.portfolio.map((item) => (
                            <article key={item.id} className="portfolio-item portfolio-item__big">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                                <div className="portfolio-item-full">
                                    <div className="portfolio-item-full__pagination">
                                    </div>
                                    <div className="portfolio-item-full__center">
                                        <div className="portfolio-item-full__swiper swiper">
                                            <div className="swiper-wrapper">
                                                <div className="portfolio-item-full__slide swiper-slide ibg">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                                </div>
                                                <div className="portfolio-item-full__slide swiper-slide ibg">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                                </div>
                                                <div className="portfolio-item-full__slide swiper-slide ibg">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.png"} alt=""/></picture>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="portfolio-item-full__swiper-actions">
                                            <div className="portfolio-item-full__swiper-fraction">
                                                <div className="portfolio-item-full__swiper-current">1</div>
                                                <div className="portfolio-item-full__swiper-all"/>
                                            </div>
                                            <div className="portfolio-item-full__swiper-navigation">
                                                <div className="portfolio-item-full__swiper-prev _icon-arrow-small"/>
                                                <div className="portfolio-item-full__swiper-next _icon-arrow-small"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="portfolio-item-full__right">
                                        <div className="portfolio-item-full__title title-section"><span>smm</span>Lorem
                                            project
                                        </div>
                                        <a href="#" className="portfolio-item-full__link">View project</a>
                                        <div className="portfolio-item-full__right-circle"/>
                                    </div>
                                    <div className="portfolio-item-full__close">
                                        <picture>
                                            <source srcSet={process.env.PUBLIC_URL +"/assets/img/icons/close.webp"} type="image/webp"/>
                                            <img src={process.env.PUBLIC_URL +"/assets/img/icons/close.png"} alt=""/></picture>
                                    </div>
                                </div>
                            </article>))}*/}
                          {/*  <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>*/}
                        </div>
                        <div className="portfolio-all__row portfolio-all__row-2">
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item portfolio-item__big">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                        </div>
                        <div className="portfolio-all__row portfolio-all__row-3">
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item portfolio-item__big-1">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/03.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item portfolio-item__big-2">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item ">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                            <article className="portfolio-item">
                                <div className="portfolio-item__img ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL +"/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="portfolio-item__title">Lorem novast</div>
                                <div className="portfolio-item__subtitle">Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.
                                </div>
                            </article>
                        </div>
                        <div className="portfolio-all__footer">
                            <button className="portfolio-all__more button-blue">показать больше</button>
                        </div>
                    </div>
                    <div className="portfolio-all__anim-items">
                        <div className="portfolio-all__anim-circle portfolio-all__anim-circle-1" data-aos="zoom-in"/>
                        <div className="portfolio-all__anim-circle portfolio-all__anim-circle-2" data-aos="zoom-in"/>
                    </div>
                </section>
                <section className="reviews-portfolio">
                    <div className="reviews-portfolio__container">
                        <div className="reviews-portfolio__header" data-aos="fade-down">
                            <div className="reviews-portfolio__title title-section">
                                <span>Клиентов<b className="title-section__longline"/></span>отзывы
                            </div>
                            <div className="reviews-portfolio__swiper-actions">
                                <div className="reviews-portfolio__swiper-pagination"/>
                            </div>
                        </div>
                        <div className="reviews-portfolio__bottom">
                            <div className="reviews-portfolio__swiper swiper">
                                <div className="swiper-wrapper">
                                    <div className="reviews-portfolio__slide slide-reviews swiper-slide">
                                        <div className="slide-reviews__left" data-aos="fade-right">
                                            <div className="slide-reviews__clientinfo" data-swiper-parallax={-150}>
                                                <div className="slide-reviews__image">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/team/03.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/team/03.png"} alt=""/></picture>
                                                </div>
                                                <div className="slide-reviews__clientinfo-right"
                                                     data-swiper-parallax={-170}>
                                                    <div className="slide-reviews__name">Имя Фамилия клиента</div>
                                                    <div className="slide-reviews__subname">In lacus pellentesque n
                                                        lacus pellentesque.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-reviews__review" data-swiper-parallax={-200}>
                                                <div className="slide-reviews__review-img">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/icons/underscore.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/icons/underscore.png"} alt=""/></picture>
                                                </div>
                                                <div className="slide-reviews__review-text">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Ornare libero lacus mattis malesuada
                                                    eu, sit orci non malesuada.
                                                </div>
                                                <div className="slide-reviews__review-jumpto">Посмотреть проект: <a
                                                    href="#">Название проекта</a></div>
                                            </div>
                                        </div>
                                        <div className="slide-reviews__right" data-swiper-parallax={-220}
                                             data-aos="fade-left">
                                            <div className="slide-reviews__about-company">
                                                <div className="slide-reviews__about-company-title">О проекте</div>
                                                <div className="slide-reviews__about-company-text text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                                                        libero lacus mattis malesuada eu, sit orci non malesuada.
                                                        Ullamcorper aliquam sit odio pellentesque viverra vel. Ornare
                                                        aliquet aliquam morbi at nibh in laoreet quis.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                                                        libero lacus mattis malesuada eu, sit orci non malesuada. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-portfolio__slide slide-reviews swiper-slide">
                                        <div className="slide-reviews__left" data-aos="fade-right">
                                            <div className="slide-reviews__clientinfo" data-swiper-parallax={-150}>
                                                <div className="slide-reviews__image">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/team/03.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/team/03.png"} alt=""/></picture>
                                                </div>
                                                <div className="slide-reviews__clientinfo-right"
                                                     data-swiper-parallax={-170}>
                                                    <div className="slide-reviews__name">Имя Фамилия клиента</div>
                                                    <div className="slide-reviews__subname">In lacus pellentesque n
                                                        lacus pellentesque.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-reviews__review" data-swiper-parallax={-200}>
                                                <div className="slide-reviews__review-img">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/icons/underscore.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/icons/underscore.png"} alt=""/></picture>
                                                </div>
                                                <div className="slide-reviews__review-text">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Ornare libero lacus mattis malesuada
                                                    eu, sit orci non malesuada.
                                                </div>
                                                <div className="slide-reviews__review-jumpto">Посмотреть проект: <a
                                                    href="#">Название проекта</a></div>
                                            </div>
                                        </div>
                                        <div className="slide-reviews__right" data-swiper-parallax={-220}
                                             data-aos="fade-left">
                                            <div className="slide-reviews__about-company">
                                                <div className="slide-reviews__about-company-title">О проекте</div>
                                                <div className="slide-reviews__about-company-text text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                                                        libero lacus mattis malesuada eu, sit orci non malesuada.
                                                        Ullamcorper aliquam sit odio pellentesque viverra vel. Ornare
                                                        aliquet aliquam morbi at nibh in laoreet quis.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                                                        libero lacus mattis malesuada eu, sit orci non malesuada. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reviews-portfolio__slide slide-reviews swiper-slide">
                                        <div className="slide-reviews__left" data-aos="fade-right">
                                            <div className="slide-reviews__clientinfo" data-swiper-parallax={-150}>
                                                <div className="slide-reviews__image">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/team/03.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/team/03.png"} alt=""/></picture>
                                                </div>
                                                <div className="slide-reviews__clientinfo-right"
                                                     data-swiper-parallax={-170}>
                                                    <div className="slide-reviews__name">Имя Фамилия клиента</div>
                                                    <div className="slide-reviews__subname">In lacus pellentesque n
                                                        lacus pellentesque.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="slide-reviews__review" data-swiper-parallax={-200}>
                                                <div className="slide-reviews__review-img">
                                                    <picture>
                                                        <source srcSet={process.env.PUBLIC_URL +"/assets/img/icons/underscore.webp"} type="image/webp"/>
                                                        <img src={process.env.PUBLIC_URL +"/assets/img/icons/underscore.png"} alt=""/></picture>
                                                </div>
                                                <div className="slide-reviews__review-text">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit. Ornare libero lacus mattis malesuada
                                                    eu, sit orci non malesuada.
                                                </div>
                                                <div className="slide-reviews__review-jumpto">Посмотреть проект: <a
                                                    href="#">Название проекта</a></div>
                                            </div>
                                        </div>
                                        <div className="slide-reviews__right" data-swiper-parallax={-220}
                                             data-aos="fade-left">
                                            <div className="slide-reviews__about-company">
                                                <div className="slide-reviews__about-company-title">О проекте</div>
                                                <div className="slide-reviews__about-company-text text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                                                        libero lacus mattis malesuada eu, sit orci non malesuada.
                                                        Ullamcorper aliquam sit odio pellentesque viverra vel. Ornare
                                                        aliquet aliquam morbi at nibh in laoreet quis.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare
                                                        libero lacus mattis malesuada eu, sit orci non malesuada. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                <label htmlFor="feedbackFormInput1" className="feedback__form-label">Ф.И.О</label>
                                <input className="feedback__form-input" id="feedbackFormInput1" type="text" data-req
                                       data-error="error" placeholder="Введите имя"/>
                            </div>
                            <div className="feedback__form-group">
                                <label htmlFor="feedbackFormInput2" className="feedback__form-label">Номер
                                    телефона</label>
                                <div className="feedback__form-phone">
                                    <span className="feedback__form-phone-mask">+998</span>
                                    <input className="feedback__form-input" id="feedbackFormInput2" type="text"
                                           data-req="phone" data-error="Ошибка" placeholder="Введите номер телефона"/>
                                </div>
                            </div>
                            <button type="submit" className="feedback__form-submit button-blue">Отправить</button>
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

export default Portfolio;