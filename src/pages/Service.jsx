import React from 'react';
import Layout from "../Layout";

const  Service = () => {
    return (
        <Layout>
            <main className="main">
                <section className="pageservice-mainbanner">
                    <div className="pageservice-mainbanner__container">
                        <div className="pageservice-mainbanner__left" data-aos="fade-right">
                            <div className="pageservice-mainbanner__title title-section"><span>Услуга</span>Наружная
                                реклама
                            </div>
                            <div className="pageservice-mainbanner__text text">
                                <p>Для захвата внимания целевого клиента, важно не просто нарисовать картинку, а создать
                                    продающий дизайн, который не оставит без внимания потребителя. Если продукт/услугу
                                    не закажут, то расскажут знакомым на сколько крутая «подача» со стороны Вашей
                                    компании, что может быть первыми шагами для успешной сделки</p>
                                <p>Важно делать не обычно, с идеей и качественной подачей. Только в этом случае Вы
                                    добьетесь хорошей конверсии и требуемых лидов.</p>
                            </div>
                        </div>
                        <div className="pageservice-mainbanner__right" data-aos="fade-left">
                            <div className="pageservice-mainbanner__right-title">Мы с радостью сделаем бесплатную оценку
                                вашего проекта
                            </div>
                            <a href="#" className="pageservice-mainbanner__button button-blue">Заполнить бриф </a>
                        </div>
                    </div>
                    <div className="pageservice-mainbanner__anim-items">
                        <div className="pageservice-mainbanner__anim-circle" data-aos="zoom-in"/>
                        <div className="pageservice-mainbanner__anim-logo">
                            <picture>
                                <source srcSet={process.env.PUBLIC_URL + "/assets/img/u-logo.webp"} type="image/webp"/>
                                <img src={process.env.PUBLIC_URL + "/assets/img/u-logo.png"} alt=""/></picture>
                        </div>
                    </div>
                </section>
                <section className="pageservice-result">
                    <div className="pageservice-result__container">
                        <div className="pageservice-result__left" data-aos="fade-right">
                            <div className="pageservice-result__title title-section"><span>как</span>достигается
                                результат?
                            </div>
                        </div>
                        <div className="pageservice-result__right" data-aos="fade-left">
                            <div className="pageservice-result__items">
                                <article className="pageservice-result__item" data-aos="zoom-in">
                                    <div className="pageservice-result__item-img">
                                        <picture>
                                            <source srcSet={process.env.PUBLIC_URL + "/assets/img/result/01.webp"} type="image/webp"/>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/result/01.png"} alt=""/></picture>
                                    </div>
                                    <div className="pageservice-result__item-title">РАЗРАБОТКА</div>
                                    <div className="pageservice-result__item-text text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Porttitor mauris, adipiscing nibh mollis.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </article>
                                <article className="pageservice-result__item" data-aos="zoom-in">
                                    <div className="pageservice-result__item-img">
                                        <picture>
                                            <source srcSet={process.env.PUBLIC_URL + "/assets/img/result/02.webp"} type="image/webp"/>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/result/02.png"} alt=""/></picture>
                                    </div>
                                    <div className="pageservice-result__item-title">ДИЗАЙН</div>
                                    <div className="pageservice-result__item-text text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Porttitor mauris, adipiscing nibh mollis.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </article>
                                <article className="pageservice-result__item" data-aos="zoom-in">
                                    <div className="pageservice-result__item-img">
                                        <picture>
                                            <source srcSet={process.env.PUBLIC_URL + "/assets/img/result/03.webp"} type="image/webp"/>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/result/03.png"} alt=""/></picture>
                                    </div>
                                    <div className="pageservice-result__item-title">ТЕСТИРОВАНИЕ</div>
                                    <div className="pageservice-result__item-text text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Porttitor mauris, adipiscing nibh mollis.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </article>
                                <article className="pageservice-result__item" data-aos="zoom-in">
                                    <div className="pageservice-result__item-img">
                                        <picture>
                                            <source srcSet={process.env.PUBLIC_URL + "/assets/img/result/04.webp"} type="image/webp"/>
                                            <img src={process.env.PUBLIC_URL + "/assets/img/result/04.png"} alt=""/></picture>
                                    </div>
                                    <div className="pageservice-result__item-title">АНАЛИЗ</div>
                                    <div className="pageservice-result__item-text text">Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit. Porttitor mauris, adipiscing nibh mollis.Lorem
                                        ipsum dolor sit amet, consectetur adipiscing elit.
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className="pageservice-result__anim-items">
                        <div className="pageservice-result__anim-circle" data-aos="zoom-in"/>
                    </div>
                </section>
                <section className="fixed-wheels-items">
                    <div className="fixed-wheels-items__container">
                        <div className="fixed-wheels-items__left" data-aos="fade-right">
                            <div className="fixed-wheels-items__title title-section ">
                                <span>Примеры</span>Работы каторые мы сделали
                            </div>
                        </div>
                        <div className="fixed-wheels-items__right wheels-right-block" data-aos="fade-left">
                            <div className="fixed-wheels-items__list">
                                <div className="fixed-wheels-items__item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="fixed-wheels-items__item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="fixed-wheels-items__item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/03.png"} alt=""/></picture>
                                </div>
                                <div className="fixed-wheels-items__item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/01.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/01.png"} alt=""/></picture>
                                </div>
                                <div className="fixed-wheels-items__item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/02.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/02.png"} alt=""/></picture>
                                </div>
                                <div className="fixed-wheels-items__item ibg">
                                    <picture>
                                        <source srcSet={process.env.PUBLIC_URL + "/assets/img/portfolio/page/03.webp"} type="image/webp"/>
                                        <img src={process.env.PUBLIC_URL + "/assets/img/portfolio/page/03.png"} alt=""/></picture>
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

export default Service;