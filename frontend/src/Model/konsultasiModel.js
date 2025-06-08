import { instance } from ".";

export default class KonsultasiModel {

    async createPredict(image) {
        const res = await instance.post('/predict-kulit', image, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res.data;
    }
}