import React, {useEffect, useState} from 'react';
import Layout from "../Layout";
import {Link} from "react-router-dom";
import MyMap from "../companents/MyMap";
import AboutUsInfo from "../companents/AboutUsInfo";
import calcData from "../json/calculator";
import useScript from "../useScript";
import {useDispatch, useSelector} from "react-redux";
import {Newsitem} from "../store/action/NewsAction";
import {portfolioItems} from "../store/action/PortfolioAction";

const Home = () => {
    const [regionData, setRegion] = useState([]);
    const [address, setAddress] = useState([]);
    const [duration, setDuration] = useState([]);
    const [price, setPrice] = useState('');
    const [salePrice, setSalePrice] = useState('');
    const newsItems = useSelector((state) => state.newsImg.news)
    const portfolioData = useSelector((state) => state.portfol.portfolios)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(Newsitem())
        dispatch(portfolioItems())
    }, []);

const porfolioBlock = portfolioData.categories

    return (
        <Layout>
            <main className="main">
                <section className="first-section">
                    <div className="first-section__container">
                        <div className="first-section__title" data-aos="fade-up">
                            Мир меняет <br/> <br className="first-section__title-texts-br"/>
                            <div className="first-section__title-texts">
                                <div className="first-section__title-texts-list">
                                    <span>идея!</span>
                                    <span>дизайн!</span>
                                    <span>креатив!</span>
                                    <span>текст!</span>
                                    <span>доброта!</span>
                                    <span>коммуникация!</span>
                                    <span>ТЗ!</span>
                                </div>
                            </div>
                        </div>
                        <div className="first-section__subtitle" data-aos="fade-up">Мы строим будущее Вашей
                            компании.
                        </div>
                        <div className="first-section__links" data-aos="fade-up">
                            <Link to="/feedback" className="button-blue">оставить заявку</Link>
                            <a href="tel:900096009" className="button-grey">Позвоните нам</a>
                        </div>
                    </div>

                    <div className="first-section__anim-items">
                        <div className="first-section__anim-item first-section__anim-item-2"
                             data-aos="fade-left">UMEDIA
                        </div>
                        <div className="first-section__anim-circle first-section__anim-circle-1 "
                             data-aos="zoom-in"/>
                        <div className="first-section__anim-circle first-section__anim-circle-2"
                             data-aos="zoom-in"/>
                    </div>
                </section>
                <section className="mainpage-aboutus">
                    <div className="mainpage-aboutus__container">
                        <div className="mainpage-aboutus__left" data-aos="fade-right">
                            <div className="mainpage-aboutus__swiper swiper">
                                <div className="swiper-wrapper">

                                    <AboutUsInfo/>

                                    {/*  <div className="mainpage-aboutus__slide swiper-slide"
                                         style={{width: '343px', marginRight: '30px'}}>
                                        <div className="mainpage-aboutus__slide-img ibg">
                                            <picture>
                                                <source
                                                    srcSet={process.env.PUBLIC_URL + "/assets/img/about-us/01.webp"}
                                                    type="image/webp"/>
                                                <img src={process.env.PUBLIC_URL + "img/about-us/01.png"}
                                                     alt=""/>
                                            </picture>
                                        </div>
                                        <div className="mainpage-aboutus__slide-text">Lorem impsum doler sit
                                            amet
                                        </div>
                                    </div>
                                    <div className="mainpage-aboutus__slide swiper-slide"
                                         style={{width: '343px', marginRight: '30px'}}>
                                        <div className="mainpage-aboutus__slide-img ibg">
                                            <picture>
                                                <source
                                                    srcSet={process.env.PUBLIC_URL + "/assets/img/about-us/02.webp"}
                                                    type="image/webp"/>
                                                <img
                                                    src={process.env.PUBLIC_URL + "/assets/img/about-us/02.png"}
                                                    alt=""/>
                                            </picture>
                                        </div>
                                        <div className="mainpage-aboutus__slide-text">Lorem impsum doler sit
                                            amet
                                        </div>
                                    </div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="mainpage-aboutus__right" data-aos="fade-left">
                            <div className="mainpage-aboutus__right-title title-section _anim-items">
                                <span>Коротка</span>о нас
                            </div>
                            <div className="mainpage-aboutus__right-text text"><p>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Ornare libero lacus mattis malesuada eu, sit orci
                                non
                                malesuada. Ullamcorper aliquam sit odio pellentesque viverra vel. Ornare aliquet
                                aliquam morbi at nibh in laoreet
                                quis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare libero lacus
                                    mattis malesuada eu, sit orci non malesuada. </p>
                            </div>
                            <div className="mainpage-aboutus__right-links">
                                <Link to="/feedback" className="button-blue">оставить заявку</Link>
                                <a href="tel:900096009" className="button-grey">Позвоните нам</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="services__container">
                        <div className="services__title title-section" data-aos="fade-up"><span>Наши</span>услуги
                        </div>
                        <div className="services__items">
                            <article className="services__item" data-aos="fade-up">
                                <Link to={"/service"} className="services__item-title">Наружная реклама</Link>
                                <div className="services__item-text text">(автобусы, метро, лед остановки, лед
                                    экраны) Non congue ut placerat tellus viverra.Non congue ut placerat tellus
                                    viverra.
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="fade-up">
                                <Link to={"/service"} className="services__item-title">Наружная реклама</Link>
                                <div className="services__item-text text">(автобусы, метро, лед остановки, лед
                                    экраны) Non congue ut placerat tellus viverra.Non congue ut placerat tellus
                                    viverra.
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="fade-up">
                                <Link to={"/service"} className="services__item-title">Наружная реклама</Link>
                                <div className="services__item-text text">(автобусы, метро, лед остановки, лед
                                    экраны) Non congue ut placerat tellus viverra.Non congue ut placerat tellus
                                    viverra.
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="fade-up">
                                <Link to={"/service"} className="services__item-title">Наружная реклама</Link>
                                <div className="services__item-text text">(автобусы, метро, лед остановки, лед
                                    экраны) Non congue ut placerat tellus viverra.Non congue ut placerat tellus
                                    viverra.
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="fade-up">
                                <Link to={"/service"} className="services__item-title">Наружная реклама</Link>
                                <div className="services__item-text text">(автобусы, метро, лед остановки, лед
                                    экраны) Non congue ut placerat tellus viverra.Non congue ut placerat tellus
                                    viverra.
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                        </li>
                                    </ul>
                                </div>
                            </article>
                            <article className="services__item" data-aos="fade-up">
                                <Link to={"/service"} className="services__item-title">Наружная реклама</Link>
                                <div className="services__item-text text">(автобусы, метро, лед остановки, лед
                                    экраны) Non congue ut placerat tellus viverra.Non congue ut placerat tellus
                                    viverra.
                                </div>
                                <div className="services__item-info info-services-item">
                                    <ul className="info-services-item__list">
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                            congue
                                            ut placerat tellus viverra.
                                        </li>
                                        <li className="info-services-item__item text">(автобусы, метро, лед
                                            остановки, лед экраны) Non congue ut placerat tellus viverra.Non
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                {calcData && (
                    <section className="calculate-section">
                        <div className="calculate-section__container">
                            <div className="calculate-section__title title-section" data-aos="fade-up">
                                <span>услуг</span>Калькулятор
                            </div>
                            <div className="calculate-box" data-aos="fade-up">
                                <div className="calculate">
                                    <div className="calculate__body">
                                        <div className="calculate__row calculate__row-1">
                                            <div className="calculate__form-group">
                                                <div className="form-group">
                                                    <div className="form-group__label">Выберите услугу</div>
                                                    <div className="form-group__action _iselect_">
                                                        <span className="_iselect_title_">-Наружная реклама</span>
                                                        <ul className="_iselect_items_" role="listbox">
                                                            {calcData.map((item, key) => (
                                                                <li role="option" key={key} className="_iselect_item_"
                                                                    onClick={() => {
                                                                        console.log(item)
                                                                        if (item.region) {
                                                                            setRegion(item.region)
                                                                        }
                                                                        if (item.address) {
                                                                            setAddress(item.address)
                                                                        }
                                                                    }}>{item.title}
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            {regionData && (
                                                <div className="calculate__form-group">
                                                    <div className="form-group">
                                                        <div className="form-group__label">Выберите районы</div>
                                                        <div className="form-group__action _iselect_">
                                                            <span className="_iselect_title_">Выберите районы</span>
                                                            <ul className="_iselect_items_" role="listbox">
                                                                {regionData.map((item, key) =>
                                                                    <li role="option" key={key}
                                                                        className="_iselect_item_"
                                                                        onClick={() => {
                                                                            setAddress(item.address)
                                                                        }}
                                                                    >
                                                                        - {item.title}
                                                                    </li>
                                                                )}

                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            <div className="calculate__form-group">
                                                <div className="form-group">
                                                    <div className="form-group__label">Выберите адрес</div>

                                                    <div className="form-group__action _iselect_">
                                                        <span className="_iselect_title_">Выберите адрес</span>
                                                        <ul className="_iselect_items_" role="listbox">
                                                            {address.map((addr, key) => (
                                                                <li role="option" key={key} className="_iselect_item_"
                                                                    onClick={() => {
                                                                        console.log(addr);
                                                                        setDuration(addr.duration)
                                                                    }}
                                                                >
                                                                    - {addr.address}
                                                                </li>
                                                            ))}

                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="calculate__row calculate__row-2">
                                            <div className="calculate__form-group calculate-info">

                                                {duration && (
                                                    <div className="form-group">
                                                        <div className="form-group__label">Выберите длительность видео
                                                        </div>
                                                        <div className="form-group__action _iselect_">
                                                            <span className="_iselect_title_">Выберите длительность видео</span>
                                                            <ul className="_iselect_items_" role="listbox">

                                                                {duration.map((durationItem, key) => (
                                                                    <li role="option" key={key}
                                                                        className="_iselect_item_"
                                                                        onClick={() => {
                                                                            if (durationItem.sale_percent > 0) {
                                                                                let priceBase = parseInt(durationItem.price.replaceAll(' ', ''));
                                                                                let percent = parseInt(durationItem.sale_percent) / 100;
                                                                                let salePrice = priceBase * percent;
                                                                                setSalePrice(priceBase - salePrice);
                                                                            }
                                                                            //setPrice(durationItem.price);
                                                                            setPrice(durationItem.price);
                                                                        }}
                                                                    >
                                                                        {durationItem.time}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>
                                            <div className="form-group__action" data-quantity="true">
                                                <div className="form-group__label">Кол-во показов</div>
                                                <input className="show-action" type="text" data-quantity-value="true"
                                                       value="300" disabled/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="calculate__footer">
                                        <div className="calculate__total">
                                            <div className="calculate__total-label">Приблизительная <br/> стоимость
                                            </div>

                                            <div
                                                className={"calculate__total-summ " + (salePrice > 0 ? 'old-price' : '')}>{price && price}</div>

                                            <div
                                                className="calculate__total-summ">{salePrice && new Intl.NumberFormat('ru-RU', {
                                                minimumFractionDigits: 0
                                            }).format(salePrice)}</div>
                                        </div>
                                    </div>
                                    <div className="calculate-box__footer">
                                        <div className="calculate-box__footer-text text">Понимаем, сложно
                                            определиться,
                                            мы вам поможем, звоните прямо сейчас
                                        </div>
                                        <a href="tel:900096009" className="calculate-box__footer-link button-grey">Позвоните
                                            нам</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="calculate-section__anim-items">
                            <div className="calculate-section__anim-circle calculate-section__anim-circle-1"
                                 data-aos="zoom-in"/>
                            <div className="calculate-section__anim-circle calculate-section__anim-circle-2"
                                 data-aos="zoom-in"/>
                        </div>
                    </section>
                )}
                <section className="mainpage-portfolio">
                    <div className="mainpage-portfolio__container">
                        <div className="mainpage-portfolio__title title-section"><span>Наша</span>ПОРТФОЛИО
                        </div>
                    </div>
                    <div className="mainpage-portfolio__swiper swiper">
                        <div className="swiper-wrapper">
                            {porfolioBlock && porfolioBlock.map((porfolioItem, blockIndex) => (
                                <div key={blockIndex} className="mainpage-portfolio__slide swiper-slide"
                                     style={{width: "344.75px", marginRight: "40px"}} data-aos="zoom-in">
                                    {porfolioItem.portfolio && porfolioItem.portfolio.map((data, key) => (
                                        <div key={key}>
                                            <div className="mainpage-portfolio__slide-img ibg">
                                                <img src={data.image[0]}/>
                                            </div>
                                            <a href="#" className="mainpage-portfolio__slide-link">{data.title}</a>
                                        </div>

                                    ))}
                                    {console.log(porfolioItem)}
                                </div>
                            ))}
                            {/*<div className="mainpage-portfolio__slide swiper-slide"
                                 style={{width: "344.75px", marginRight: "40px"}} data-aos="zoom-in">
                                <div className="mainpage-portfolio__slide-img ibg">
                                    <picture>
                                        <source
                                            srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/02.webp"}
                                            type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/02.png"}
                                             alt=""/>
                                    </picture>
                                </div>
                                <a href="#" className="mainpage-portfolio__slide-link">Service item lorem impsum
                                    doler </a>
                            </div>
                            <div className="mainpage-portfolio__slide swiper-slide"
                                 style={{width: "344.75px", marginRight: "40px"}} data-aos="zoom-in">
                                <div className="mainpage-portfolio__slide-img ibg">
                                    <picture>
                                        <source
                                            srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/03.webp"}
                                            type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/03.png"}
                                             alt=""/>
                                    </picture>
                                </div>
                                <a href="#" className="mainpage-portfolio__slide-link">Service item lorem impsum
                                    doler </a>
                            </div>
                            <div className="mainpage-portfolio__slide swiper-slide"
                                 style={{width: "344.75px", marginRight: "40px"}} data-aos="zoom-in">
                                <div className="mainpage-portfolio__slide-img ibg">
                                    <picture>
                                        <source
                                            srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/04.webp"}
                                            type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/04.png"}
                                             alt=""/>
                                    </picture>
                                </div>
                                <a href="#" className="mainpage-portfolio__slide-link">Service item lorem impsum
                                    doler </a>
                            </div>
                            <div className="mainpage-portfolio__slide swiper-slide"
                                 style={{width: "344.75px", marginRight: "40px"}} data-aos="zoom-in">
                                <div className="mainpage-portfolio__slide-img ibg">
                                    <picture>
                                        <source
                                            srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/01.webp"}
                                            type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/01.png"}
                                             alt=""/>
                                    </picture>
                                </div>
                                <a href="#" className="mainpage-portfolio__slide-link">Service item lorem impsum
                                    doler </a>
                            </div>*/}
                        </div>
                    </div>
                    <div className="mainpage-portfolio__anim-items">
                        <div className="mainpage-portfolio__anim-circle mainpage-portfolio__anim-circle-1"
                             data-aos="zoom-in"/>
                        <div className="mainpage-portfolio__anim-circle mainpage-portfolio__anim-circle-2"
                             data-aos="zoom-in"/>
                    </div>
                    <div className="mainpage-portfolio-footer__container">
                        <Link to={"/portfolio"} className="mainpage-portfolio__link button-blue">Посмотреть все</Link>
                    </div>
                </section>
                <section className="news">
                    <div className="news__container">
                        <div className="news__title title-section">Новости</div>
                        <div className="news__items">
                            {newsItems.news && newsItems.news.map((item, key) =>
                                <Link key={key} to={"/news-info"}
                                      className={`news__item news__item-${key + 1} item-news`}
                                      data-aos="fade-up">
                                    <div className="item-news__img ibg">
                                        <img src={item.image[0]} alt=""/>
                                    </div>
                                    <div className="item-news__title">{item.title}</div>
                                    <div className="item-news__subtitle">{item.description}</div>
                                </Link>
                            )}
                        </div>
                        <div className="news__footer">
                            <Link to={"/news"} className="mainpage-news__link button-blue">Посмотреть все</Link>
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
                                       data-req
                                       data-error="error" placeholder="Введите имя"/>
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
                <section className="contacts">
                    <div className="contacts__container">
                        <div className="contacts__map">
                            <div className="contacts__map-map">
                                <div id="contacts__map-iframe" data-aos="fade-right"
                                     style={{position: 'relative', overflow: 'hidden'}}>
                                    <a
                                        href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
                                        style={{
                                            color: '#eee',
                                            fontSize: '12px',
                                            position: 'absolute',
                                            top: '0px'
                                        }}>Ташкент</a><a
                                    href="https://yandex.uz/maps/profile?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12"
                                    style={{
                                        color: '#eee',
                                        fontSize: '12px',
                                        position: 'absolute',
                                        top: '14px'
                                    }}>Яндекс&nbsp;Карты — транспорт, навигация, поиск мест</a>
                                    <MyMap/>
                                </div>
                            </div>
                        </div>
                        <div className="contacts__info" data-aos="fade-left">
                            <div className="contacts__title">Свяжитесь с нами</div>
                            <div className="contacts__group">
                                <div className="contacts__group-title">Контакты</div>
                                <div className="contacts__group-items">
                                    <div className="contacts__group-item">Lorem ipsum dolor sit amet,
                                        consectetur
                                        adipiscing elit. Ut eu pharetra dolor viverra.
                                    </div>
                                    <a href="tel:900096009" className="contacts__group-item">(90)009 6009</a>
                                </div>
                            </div>
                            <div className="contacts__group">
                                <div className="contacts__group-title">По вопросам работы</div>
                                <div className="contacts__group-items">
                                    <a href="mailto:info@umedia.gmail.com"
                                       className="contacts__group-item">info@umedia.gmail.com</a>
                                    <a href="tel:900096009" className="contacts__group-item">(90)009 6009</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    );
};


export default Home;