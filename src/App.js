import React, {useEffect} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import {useRoutes} from "react-router-dom";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import News from "./pages/News";
import Feedback from "./pages/Feedback";
import Notfound from "./pages/Notfound";
import NewsItems from "./pages/NewsItems";
import Service from "./pages/Service";
import AOS from 'aos';


function App() {



    useEffect(() => {
        AOS.init({
            once: !0,
            offset: 150,
            duration: 1e3,
            delay: 200
        });
    }, []);

    const routes = useRoutes([

        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/about-company",
            element: <About />
        },
        {
            path: "/services",
            element: <Services />
        },
        {
            path: "/service",
            element: <Service/>
        },
        {
            path: "/portfolio",
            element: <Portfolio />
        },
        {
            path: "/news",
            element: <News />
        },
        {
            path: "/feedback",
            element: <Feedback />
        },
        {
            path: "/not-found",
            element: <Notfound/>
        },
        {
            path: "/news-info",
            element: <NewsItems/>
        }
        ]);
    return (
        <>
            {routes}
        </>
    );
}

export default App;