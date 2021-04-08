import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

export default function NavigationScreen() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name = "Home" component={HomeScreenNavigator} />
            <Drawer.Screen name = "Login" component={LoginScreenNavigator} />
            <Drawer.Screen name = "Categories" component={ProductScreenNavigator} />
            {/* <Drawer.Screen name = "Logout" component={LogoutScreenNavigator} /> */}
        </Drawer.Navigator>
    )
}

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../HomeScreen/HomeScreen';
import MenuIcon from './MenuIcon';

const HomeScreenStack = createStackNavigator()
function HomeScreenNavigator() {
    return(
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen name = "Home" component={HomeScreen} options = {{headerTitle: 'Home', headerLeft: () => <MenuIcon />}}
            />
        </HomeScreenStack.Navigator>
    )
}

import LoginScreen from '../LoginScreen/LoginScreen';

const LoginScreenStack = createStackNavigator()
function LoginScreenNavigator() {
    return(
        <LoginScreenStack.Navigator>
            <LoginScreenStack.Screen name ="Login" component={LoginScreen} options = {{headerTitle: 'Login', headerLeft: () => <MenuIcon />}}
            />
        </LoginScreenStack.Navigator>
    )
}

import ProductScreen from '../ProductScreen/ProductScreen';

const ProductScreenStack = createStackNavigator()
function ProductScreenNavigator() {
    return(
        <ProductScreenStack.Navigator>
            <ProductScreenStack.Screen name ="Categories" component={ProductScreen} options = {{headerTitle: 'Products', headerLeft: () => <MenuIcon />}}
            />
        </ProductScreenStack.Navigator>
    )
}

// import SignOut from '../LogoutScreen/Logout'
// import HomeScreen from '../HomeScreen/HomeScreen';
// import ProductScreen from '../ProductScreen/ProductScreen';

// const LogoutScreenstack = createStackNavigator()
// function LogoutScreenNavigator() {
//     return(
//         <LogoutScreenstack.Navigator>
//             <LogoutScreenstack.Screen name = 'Logout' component={SignOut} options = {{headerTitle: 'Logout'}} />
//         </LogoutScreenstack.Navigator>
//     )
// }