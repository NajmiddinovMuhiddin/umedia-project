import React, {useEffect} from 'react';
import Layout from "../Layout";
import useScript from "../useScript";
import NewsItems from "../companents/NewsItems";


const News = () => {
    useScript(process.env.PUBLIC_URL + '/assets/js/app.js');

    return (
        <Layout>
            <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Новости</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Новости</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>
            <main className="main">
                <section className="news background">
                    <div className="news__container">
                        <NewsItems/>
                    </div>
                    <div className="news__anim-items">
                        <div className="news__anim-circle news__anim-circle-1"/>
                        <div className="news__anim-circle news__anim-circle-2"/>
                    </div>
                </section>
            </main>
           {/* <section className="bigtitle-section">
                <div className="bigtitle-section__container">
                    <div className="bigtitle-section__bgtitle _anim-items parallax-layer" data-depth="0.6">Новости</div>
                    <div className="bigtitle-section__title _anim-items parallax-layer" data-depth="0.4">Новости</div>
                </div>
                <div className="bigtitle-section__anim-items">
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-1" data-aos="zoom-in"/>
                    <div className="bigtitle-section__anim-circle bigtitle-section__anim-circle-2" data-aos="zoom-in"/>
                </div>
            </section>*/}

        </Layout>
    );
};

export default News;