import axios from 'axios';
import { base_url } from './base-url';
export const fetchProducts = () => {
    return axios.get(`${base_url}/products?limit=72`)
        .then(response => {
            return response.data.products;

        })
        .catch(error => {
            console.error(error);
        });
};

export let products = [];

fetchProducts().then(data => {
    products = data;
});

export default fetchProducts;
