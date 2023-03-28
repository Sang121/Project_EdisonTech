import axios from 'axios';

export const fetchProducts = () => {
    return axios.get('https://dummyjson.com/products')
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
