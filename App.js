import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Header } from 'react-native-elements';

function OpenUp({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.headerText}>Chats & groepen</Text>
    </View>
  );
}

function Digimind() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.headerText}>Digimind</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Header
        statusBarProps={{ barStyle: 'light-content' }}
        barStyle="light-content" // or directly
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Vitaminds', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
        containerStyle={{
          backgroundColor: '#49beb7',
          justifyContent: 'space-around',
        }}
      />
    <Tab.Navigator 
    initialRouteName="Chats & groepen"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Chats & groepen') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'Digimind') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#8e0000',
      inactiveTintColor: 'gray',
    }}
    >
      <Tab.Screen name="Chats & groepen" component={OpenUp}  options={{ title: 'Chats & groepen',
    headerStyle: {
      backgroundColor: '#8e0000',
    },
    headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20
        }, }} />
      <Tab.Screen name="Digimind" component={Digimind}  options={{ title: 'Digimind' }} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
