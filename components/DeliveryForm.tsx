// components/DeliveryForm.tsx
import { useEffect, useState } from 'react';
import { Platform, ScrollView, Text, TextInput, Button, View } from "react-native";
import { Base, Typog, Forms } from '../styles';

import Delivery from '../interfaces/delivery';
import Product from '../interfaces/product';

import { Picker } from '@react-native-picker/picker';
import productModel from "../models/products";
import deliveryModel from "../models/deliveries";

import DateTimePicker from '@react-native-community/datetimepicker';


function DateDropDown(props: any) {
    const [dropDownDate, setDropDownDate] = useState<Date>(new Date());
    const [show, setShow] = useState<Boolean>(false);

    return (
        <View>
            {Platform.OS === "android" && (
                <Button onPress={() => {setShow(true)}} title="Visa datumväljare" />
            )}
            {(show || Platform.OS === "ios") && (
                <DateTimePicker
                    onChange={(event, date) => {
                        setDropDownDate(date);

                        props.setDelivery({
                            ...props.delivery,
                            delivery_date: date.toLocaleDateString('se-SV'),
                        });

                        setShow(false);
                    }}
                    value={dropDownDate}
                />
            )}
        </View>
    );
}

function ProductDropDown(props: any) {
    const [products, setProducts] = useState<Product[]>([]);
    let productsHash: any = {};

    useEffect(async () => {
        setProducts(await productModel.getProducts());
    }, []);

    const itemsList = products.map((prod, index) => {
        productsHash[prod.id] = prod;
        return <Picker.Item key={index} label={prod.name} value={prod.id} />;
    });

    return (
        <Picker
            selectedValue={props.delivery?.product_id}
            onValueChange={(itemValue) => {
                props.setDelivery({ ...props.delivery, product_id: itemValue });
                props.setCurrentProduct(productsHash[itemValue]);
            }}>
            {itemsList}
        </Picker>
    );
}

export default function DeliveryForm({ navigation }: any) {
    const [delivery, setDelivery] = useState<Partial<Delivery>>({});
    const [currentProduct, setCurrentProduct] = useState<Partial<Product>>({});

    let iFylld = false;
    if (delivery.delivery_date && delivery.comment && delivery.amount) {
        iFylld = true;
    }

    async function addDelivery(delivery: any) {
        await deliveryModel.addDelivery(delivery);

        const updatedProduct = {
            ...currentProduct,
            stock: (currentProduct.stock || 0) + (delivery.amount || 0)
        };
        await productModel.updateProduct(updatedProduct);
        navigation.navigate("List", { reload: true });
    }

    return (
        <ScrollView>
            <Text style={{ ...Typog.header2 }}>Ny inleverans</Text>

            <Text style={{ ...Typog.label }}>Produkt</Text>
            <ProductDropDown
                delivery={delivery}
                setDelivery={setDelivery}
                setCurrentProduct={setCurrentProduct}
            />

            <Text style={{ ...Typog.label }}>Datum</Text>
            <DateDropDown 
                delivery={delivery}
                setDelivery={setDelivery}
            />

            <Text style={{ ...Typog.label }}>Antal</Text>
            <TextInput
                style={{ ...Forms.input }}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, amount: parseInt(content) })
                }}
                value={delivery?.amount?.toString()}
                keyboardType="numeric"
            />

            <Text style={{ ...Typog.label }}>Kommentar</Text>
            <TextInput
                style={{ ...Forms.input }}
                onChangeText={(content: string) => {
                    setDelivery({ ...delivery, comment: content })
                }}
                value={delivery?.comment}
            />

            {iFylld ? (
                <Button
                    title="Gör inleverans"
                    onPress={() => {
                        addDelivery(delivery);
                    }}
                />
            ) : (
                <Text>Fyll i alla för att skicka</Text>
            )}
            
        </ScrollView>
    );
};