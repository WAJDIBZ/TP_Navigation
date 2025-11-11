import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import SearchScreen from './screens/SearchScreen';
import SettingsScreen from './screens/SettingsScreen';
import CustomHeader from './components/CustomHeader';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitle: ({ children }) => <CustomHeader title={children} />,
      }}
    >
      <HomeStack.Screen name="Accueil" component={HomeScreen} />
      <HomeStack.Screen name="Détails" component={DetailScreen} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';
  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Accueil') {
              return <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />;
            }
            if (route.name === 'Recherche') {
              return <Ionicons name={focused ? 'search' : 'search-outline'} size={size} color={color} />;
            }
            return <Ionicons name={focused ? 'settings' : 'settings-outline'} size={size} color={color} />;
          },
          tabBarActiveTintColor: isDark ? '#0a84ff' : '#007aff',
          tabBarInactiveTintColor: isDark ? '#8e8e93' : '#8e8e93',
          tabBarStyle: {
            backgroundColor: isDark ? '#1c1c1e' : '#ffffff',
            height: 64,
            borderTopWidth: 0,
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
        })}
      >
        <Tab.Screen name="Accueil" component={HomeStackScreen} />
        <Tab.Screen name="Recherche" component={SearchScreen} />
        <Tab.Screen
          name="Paramètres"
          component={SettingsScreen}
          options={{ tabBarBadge: 3 }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
