import axios from "axios";

const url = "https://api.themoviedb.org/3";
const API_KEY = "46f5c878efbe670367da2dea544ed4f5";

const endpoints = {
    originals: "/discover/tv",
    trending: "/trending/all/week",
    now_playing: "/movie/now_playing",
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    upcoming: "/movie/upcoming",
};

export const fetchData = (param) => {
    return axios.get(`${url}${endpoints[param]}?api_key=${API_KEY}`);
}
