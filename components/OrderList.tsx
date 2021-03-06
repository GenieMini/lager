// OrderList.tsx
import { useState, useEffect } from 'react';
import { ScrollView, Text, Button } from "react-native";
import orderModel from "../models/orders";
import { Base, Typog } from '../styles';

//@ts-ignore
export default function OrderList({ route, navigation }) {
    const { reload } = route.params || false;
    const [allOrders, setAllOrders] = useState([]);

    if (reload) {
        reloadOrders();
        route.params = false;
    }

    async function reloadOrders() {
        setAllOrders(await orderModel.getOrders());
    }

    useEffect(() => {
        reloadOrders();
    }, []);

    const listOfOrders = allOrders
        .filter(order => order.status === "Ny")
        .map((order, index) => {
            return <Button
                title={order.name}
                key={index}
                onPress={() => {
                    navigation.navigate('Details', {
                        order: order
                    });
                }}
            />
        });

    return (
        <ScrollView style={Base.base1}>
            <Text style={{ ...Typog.header2 }}>Ordrar redo att plockas</Text>
            {listOfOrders}
        </ScrollView>
    );
}