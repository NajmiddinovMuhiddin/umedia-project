import React from 'react';
import {Link} from "react-router-dom";

const Notfound = () => {
    return (
            <div className="wrapper">
                <main className="main">
                    <section className="not-found">
                        <div className="not-found__container">
                            <div className="not-found__text">404</div>
                            <div className="not-found__subtext">Упс, что то пошло не так</div>
                            <Link to={"/"} className="not-found__link button-grey">Вернутся назад</Link>
                        </div>
                    </section>
                </main>
            </div>
    )
};

export default Notfound;