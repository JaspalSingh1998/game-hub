import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'b11fa6759c7d48169bf05d8d904c3889'
    }
})