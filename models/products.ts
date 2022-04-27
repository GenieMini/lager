import config from "../config/config.json";
import Product from "../interfaces/product";

const products = {
    getProducts: async function getProducts() {
        try{
            const response = await fetch(`${config.base_url}/products?api_key=${config.api_key}`);
            const result = await response.json();

            return result.data;
        } catch (error) {
            console.log("Error: couldnt get products");
        }
    },
    updateProduct: async function updateProduct(prods: any/* Partial<Product[]> */) {
        try{
            //prods.api_key = config.api_key;

            await fetch(`${config.base_url}/products?api_key=${config.api_key}`, {
                body: JSON.stringify(prods),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'PUT'
            });
        } catch (error) {
            console.log("Error: Could not update product")
        }
    }
};

export default products;