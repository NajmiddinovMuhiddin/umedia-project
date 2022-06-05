import React from 'react';
import Layout from "../Layout";

const NewsItems = () => {

    return (
        <Layout>
            <main className="main">
                <section className="news-blade">
                    <div className="news-blade__container">
                        <div className="news-blade__left">
                            <div className="news-blade__sidebar" data-aos="fade-right">
                                <div className="news-blade__sidebar-date">22</div>
                                <div className="news-blade__sidebar-month">апреля</div>
                                <div className="news-blade__sidebar-year">2022</div>
                            </div>
                        </div>
                        <div className="news-blade__main" data-aos="fade-left">
                            <div className="news-blade__title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mi at.
                            </div>
                            <div className="news-blade__main-text text" data-aos="fade-left">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Vel suscipit aliquam amet lectus in malesuada sapien
                                scelerisque. Ac, lorem elit, nunc placerat massa euismod aenean. Laoreet enim, penatibus
                                congue mauris. Imperdiet odio duis felis lacinia sit. Vulputate ullamcorper vitae leo
                                morbi et netus vitae. Turpis fringilla tortor risus penatibus gravida. Nunc quis rutrum
                                elementum in leo. Tempor quis turpis ultrices eu, curabitur id rutrum. Bibendum eros,
                                mollis viverra nibh nibh ut ridiculus. Varius pulvinar lobortis vitae morbi id vitae
                                elementum. Turpis nisi, maecenas vel at. Ut nec scelerisque sagittis, sagittis, ac est.
                                Ac facilisis platea feugiat pellentesque habitasse. Vel ultricies ullamcorper integer
                                aliquet sed diam quis vulputate. In risus, phasellus diam lacus urna. Fermentum nibh at
                                nulla eget massa nec eleifend morbi elementum. Netus lacus.
                            </div>
                            <div className="news-blade__main-img" data-aos="fade-left">
                                <picture>
                                    <source srcSet={process.env.PUBLIC_URL + "/assets/img/news-blade/01.webp"} type="image/webp"/>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/news-blade/01.png"} alt=""/></picture>
                            </div>
                            <div className="news-blade__main-text text" data-aos="fade-left">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Enim, tincidunt pellentesque dis ultrices ipsum, aenean. Ut
                                enim sit duis vulputate eu et venenatis. Augue suspendisse felis nibh ac iaculis. Semper
                                non et elementum ac amet, ut tristique neque. Proin ultrices ullamcorper a, pretium sit
                                eget feugiat ut ligula. Ut blandit mattis fermentum, semper imperdiet fermentum leo
                                velit in. Vitae ullamcorper dictum eget suspendisse donec justo ipsum aliquam. Facilisis
                                curabitur in arcu cursus pulvinar molestie vivamus. Amet in amet eget auctor etiam
                                consequat. Nulla pellentesque enim ultricies feugiat. Eu sodales ipsum morbi nulla.
                                Cursus sed metus proin augue enim congue amet odio. Adipiscing aliquet consequat ac,
                                enim porttitor arcu. Eleifend lacus id nibh eros feugiat. Id ullamcorper elementum
                                faucibus urna diam. Mi mattis.
                            </div>
                            <div className="news-blade__main-img" data-aos="fade-left">
                                <picture>
                                    <source srcSet={process.env.PUBLIC_URL + "/assets/img/news-blade/02.webp"} type="image/webp"/>
                                    <img src={process.env.PUBLIC_URL + "/assets/img/news-blade/02.png"} alt=""/></picture>
                            </div>
                            <div className="news-blade__main-text text" data-aos="fade-left">Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Nam nunc eget arcu, nisl diam amet, pellentesque volutpat.
                                Et donec tellus ullamcorper nisi arcu nulla urna ut. Aliquam sit arcu morbi diam enim
                                praesent eu habitasse dui. Convallis cras interdum id congue hendrerit aenean. Morbi
                                ultrices arcu proin nisi pellentesque vel risus id sit. Quis euismod euismod pretium
                                amet non, eu, lorem. Pulvinar tristique est diam varius a aenean integer tempus arcu. A
                                eros, adipiscing leo ac cursus nunc. Etiam luctus velit pulvinar ac velit, a. Amet arcu
                                magna non id lectus aliquam ultrices ut. Sagittis duis pulvinar nibh imperdiet.
                                Phasellus sed in gravida vitae facilisis integer vitae etiam eu. Morbi est arcu leo
                                tellus id scelerisque placerat gravida. Mattis dictumst ipsum eu, porttitor magna
                                quisque molestie ac.
                            </div>
                        </div>
                    </div>
                    <div className="news-blade__anim-items">
                        <div className="news-blade__anim-circle" data-aos="zoom-in"/>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default NewsItems;