import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_Nv3x6XUeduZp1eGfTlt7xSTn1gK0zO0jl97lKYd5');

const currencyConvertor  = async (from, to, units) => {
    const res = await freecurrencyapi.latest({
        base_currency: from,
        currencies: to
    });
    const amount = res.data[to];
    return amount*units;
}

export default currencyConvertor;