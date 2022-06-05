import axios from "axios";

const url = `http://umedia.travelticket.uz/api`

const request = {
    portfolioReq: () => axios.get(`${url}/site/portfolio`),
    image: () => axios.get(`${url}/site/about/company`),
    service: () => axios.get(`${url}/site/services`),
    newsItem: () => axios.get(`${url}/site/news`)
}

export  default request;