// Pick.tsx
import { Text, View, StyleSheet } from 'react-native';

export default function Pick() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Plocklista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
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
