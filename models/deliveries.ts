import config from "../config/config.json";

const deliveries = {
    getDeliveries: async function getDeliveries() {
        try {
            const response = await fetch(`${config.base_url}/deliveries?api_key=${config.api_key}`)
            const result = await response.json();

            return result.data;
        } catch (error) {
            console.log("Error: could not get deliveries");
        }
    },
    addDelivery: async function addDelivery(delivery: any) {
        try {
            delivery.api_key = config.api_key;

            await fetch(`${config.base_url}/deliveries`, {
                body: JSON.stringify(delivery),
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST'
            });
        } catch (error) {
            console.log("Error: couldnt post delivery");
        }
    }
}

export default deliveries;