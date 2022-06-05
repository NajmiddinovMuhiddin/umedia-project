import axios from "axios";

const API_URL = 'http://umedia.travelticket.uz/api';


export const getAbout = async () => {
    const response = await axios.get(`${API_URL}/site/about/company`);
    return response.data;
}

export const getServices = async () => {
    const response = await axios.get(`${API_URL}/site/services`);
    return response.data;
}

export const getNews = async () => {
    const response = await axios.get(`${API_URL}/site/news`);
    return response.data;
}

