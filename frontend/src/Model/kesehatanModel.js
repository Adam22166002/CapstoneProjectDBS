import { instance } from ".";
import Cookie from "./accessCookie";

export default class Kesehatan {

    async PredictKesehatan(value) {
        const res = await instance.post('/predict-kesehatan', {
            symptoms: value
        });

        return res.data;
    }

    async getPertanyaan(id) {
        const res = await instance.get(`/api/questions/${id}`);
        return res.data;
    }

    async getUser() {
        const cookie = await Cookie.getCookie();
        const res = await instance.get('/api/user', {
            headers: {
                Authorization: `Bearer ${cookie.accessToken}`
            }
        });
        return res.data;
    }
}