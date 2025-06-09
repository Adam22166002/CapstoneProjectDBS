
export default class ForgotPasswordPresenter {

    #model;
    #view;

    constructor({ model, view }) {
        this.#model = model;
        this.#view = view;
    }

    async ForgotPassword(email) {
        this.#view.setLoading(true);

        try {
            const res = await this.#model.ForgotPassword(email);
            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }
}