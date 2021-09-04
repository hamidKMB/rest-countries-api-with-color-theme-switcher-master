import axios from "axios";


const baseUrl = "https://restcountries.eu/rest/v2"

export default async function ApiRequest(url, method) {
    try {
        const response = await axios.request({
            baseURL: baseUrl,
            url,
            method
        })
        return response
    } catch (error) {
        const errorResponse = await error.response
        return errorResponse.data
    }
}