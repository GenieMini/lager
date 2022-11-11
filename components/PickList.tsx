//PickList
import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import orderModel from "../models/orders";
import productModel from "../models/products";

//@ts-ignore
export default function PickList({ route, navigation, setProducts }) {
    const { reload } = route.params || false;
    const { order } = route.params;
    const [productsList, setProductsList] = useState([]);

    if (reload) {
        reloadProducts();
    }

    async function reloadProducts() {
        setProductsList(await productModel.getProducts());
    }

    useEffect(() => {
        reloadProducts();
    }, []);

    async function pick() {
        await orderModel.pickOrder(order);
        setProducts(await productModel.getProducts());
        navigation.navigate("List", { reload: true });
    }

    let inStock = true;
    const orderItemsList = order.order_items.map((item: any, index: any) => {
        if (item.amount > item.stock) {
            inStock = false;
        }
        return <Text key={index} >
                {item.name} - amount {item.amount} - @ {item.location} - stock {item.stock}
            </Text>;
    });

    return (
        <View>
            <Text>{order.name}</Text>
            <Text>{order.address}</Text>
            <Text>{order.zip} {order.city}</Text>

            <Text>Produkter:</Text>

            {orderItemsList}

            {inStock ? (
                <Button title="Plocka order" onPress={pick} />
            ) : (
                <Text>Inte tillräckligt i lager</Text>
            )}
            
        </View>
    )
};