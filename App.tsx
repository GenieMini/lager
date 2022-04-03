import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Stock from './components/Stock';
import warehouse from './assets/warehouse.jpg';


//a0c82c076449042b3354aa91f9d5fb39

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.base}>
        <Text style={styles.text}>Skruv Shop 3000</Text>
        <Image source={warehouse}/>
        <Stock />
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  },
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
});
