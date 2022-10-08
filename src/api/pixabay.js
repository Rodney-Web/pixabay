import axios from "axios";

const baseURL = "https://pixabay.com/api/"

export default axios.create({
    baseURL: baseURL
})