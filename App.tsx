import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home";
import Pick from "./components/Pick";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


//a0c82c076449042b3354aa91f9d5fb39

const Tab = createBottomTabNavigator();

const routeIcons = {
  "Lager": "home",
  "Plock": "menu"
};

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer theme={MyTheme}>
        <Tab.Navigator  screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = routeIcons[route.name] || "alert";
      
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        >
          <Tab.Screen name="Lager" component={Home} />
          <Tab.Screen name="Plock" component={Pick} />
        </Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'black'
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan'
  },
  navi: {
    backgroundColor: 'black'
  },
  text: {
	  color: 'cyan',
    fontSize: 42,
    textShadowColor: 'cyan',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
  }
});
