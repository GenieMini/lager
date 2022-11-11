// Home.tsx
import { Text, View, Image, ScrollView } from 'react-native';
import Stock from '../components/Stock';
import warehouse from '../assets/warehouse.jpg';
import { Base, Typog } from '../styles';

export default function Home({products, setProducts}: any) {
    return (
        <ScrollView style={Base.base1}>
            <View style={{alignItems: 'center'}}>
                <Text style={Typog.bigtext}>Lager-Appen</Text>
                <Image source={warehouse} style={{ width: 320, height: 240, marginBottom: 28 }} />
            </View>
            <Stock products={products} setProducts={setProducts} />
        </ScrollView>
);
}