import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
    LoginScreen,
    RegistrationScreen,
    NavigationScreen,
} from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createStackNavigator();

export default function App() {

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={NavigationScreen}  options={{headerShown: false}}/>                    
                    <Stack.Screen name="Registration" component={RegistrationScreen} />                                     
                </Stack.Navigator>               
            </NavigationContainer>
        </SafeAreaProvider>
    );
}