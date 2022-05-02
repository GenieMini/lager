// del av components/DeliveriesList.tsx
import { useEffect, useState } from "react";
import { ScrollView, View, Text, Button } from "react-native";
import { Base, Typog } from '../styles';

import deliveryModel from "../models/deliveries";
import productsModel from "../models/products";

export default function DeliveriesList({ route, navigation, setProducts }: any) {
    const { reload } = route.params || false;
    const [allDelivs, setDelivs] = useState([]);

    if (reload) {
        reloadDeliveries();
        route.params = false;
    }

    async function reloadDeliveries() {
        setDelivs(await deliveryModel.getDeliveries());
        setProducts(await productsModel.getProducts());
    }

    useEffect(() => {
        reloadDeliveries();
    }, []);

    const listOfDeliveries = allDelivs
        .map((delivery, index) => {
            return <View style={Base.deliveryBox} key={index} >
                <Text style={Typog.label}>{delivery.amount} st. {delivery.product_name}</Text>
                <Text>Levererad: {delivery.delivery_date}</Text>
                <Text>Kommentar: {delivery.comment}</Text>
            </View>
        })
        .reverse();

    return (
        <ScrollView style={Base.base1}>
            <Text style={Typog.header2}>Inleveranser</Text>
            <Button
                title="Skapa ny inleverans"
                onPress={() => {
                    navigation.navigate('Form');
                }}
            />
            <Text style={Typog.label}>Historik:</Text>
            {listOfDeliveries}

        </ScrollView>
    );
}
