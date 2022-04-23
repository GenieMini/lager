// Home.tsx
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import Stock from '../components/Stock';
import warehouse from '../assets/warehouse.jpg';
import { Base, Typog } from '../styles';

export default function Home({products, setProducts}) {
  return (
    <ScrollView style={Base.base1}>
        <Text style={Typog.bigtext}>Lager-Appen</Text>
        <Image source={warehouse} style={{ width: 320, height: 240, marginBottom: 28 }} />
        <Stock products={products} setProducts={setProducts} />
    </ScrollView>
);
}

/* const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center'
  },
  text: {
    color: 'cyan',
    fontSize: 42,
    textShadowColor: 'cyan',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
}) */
