// Home.tsx
import { Text, View, Image, StyleSheet } from 'react-native';
import Stock from '../components/Stock';
import warehouse from '../assets/warehouse.jpg';

export default function Home() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Skruv Shop 3000</Text>
      <Image source={warehouse}/>
      <Stock />
    </View>
  );
}

const styles = StyleSheet.create({
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
})
