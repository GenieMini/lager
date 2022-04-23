// Pick.tsx
import { Text, View, StyleSheet } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OrderList from './OrderList';
import PickList from './PickList';

const Stack = createNativeStackNavigator();

export default function Pick(props) {
  return (
      <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={OrderList} />
          <Stack.Screen name="Details">
              {(screenProps) => <PickList {...screenProps} setProducts={props.setProducts} />}
          </Stack.Screen>
      </Stack.Navigator>
  );
}

/* export default function Pick() {
  return (
    <View style={styles.base}>
      <Text style={styles.text}>Plocklista</Text>
    </View>
  );
} */

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
