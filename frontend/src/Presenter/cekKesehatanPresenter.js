

export default class KesehatanPresenter {

    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async startCekkesehatan() {
        this.#view.setLoading(true);
        try {
            const res = await this.#model.getCookie();
            console.log(res);
            if (res.status === "success") {
                
            }
        } catch (err) {
            this.#view.navigate("/login");
        } finally {
            this.#view.setLoading(false);
        }
    }

    async cekKesehatan(value) {
        this.#view.setLoading(true);
        try {
            const res = await this.#model.cekKesehatan(value);
            console.log(res);
            this.#view.setPredicted(res.predicted);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }

    async getPertanyaan(id) {
        this.#view.setLoading(true);

        try {
            const res = await this.#model.getPertanyaan(id);
            console.log(res);
            this.#view.setKategoriPertanyaan(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            this.#view.setLoading(false);
        }
    }
}