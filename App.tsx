import { StatusBar } from 'expo-status-bar';
import { Base, Typog } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

import Home from "./components/Home";
import Pick from "./components/Pick";
import Deliveries from "./components/Deliveries";

//a0c82c076449042b3354aa91f9d5fb39

const Tab = createBottomTabNavigator();

const routeIcons = {
  "Lager": "home",
  "Plock": "menu",
  "Inleverans": "car"
};

export default function App() {
  const [products, setProducts] = useState([]);
  return (
    <SafeAreaView style={Base.container}>
      <NavigationContainer>
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            //@ts-ignore
            let iconName = routeIcons[route.name] || "alert";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveBackgroundColor: 'black',
          tabBarInactiveBackgroundColor: 'black',
          tabBarActiveTintColor: 'cyan',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Lager">
            {(props) => <Home {...props} products={products} setProducts={setProducts} />}
          </Tab.Screen>
          <Tab.Screen name="Plock">
            {(props) => <Pick {...props} setProducts={setProducts} />}
          </Tab.Screen>
          <Tab.Screen name="Inleverans">
            {(props) => <Deliveries {...props} setProducts={setProducts} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}