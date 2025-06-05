import { instance } from ".";

export default class Kesehatan {

    async cekKesehatan(value) {
        const res = await instance.post('cek-kesehatan', {
            symptoms: value
        });

        return res.data;
    }

    async getPertanyaan(id) {
        const res = await instance.get(`/api/questions/${id}`);
        return res.data;
    }
}