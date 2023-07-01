import axios from "axios"

const customAuth = axios.create({
    baseURL: `https://api.unsplash.com/search/photos/?client_id=${
        import.meta.env.VITE_API_KEY
    }&query=`,
})
export default customAuth
