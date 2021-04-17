import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

export default function NavigationScreen() {
    return(
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name = "Home" component={HomeScreenNavigator} />
            <Drawer.Screen name = "Search" component={SearchScreenNavigator} />
            <Drawer.Screen name = "Categories" component={ProductScreenNavigator} />
            <Drawer.Screen name = "Wishlist" component={WishlistScreenNavigator} />
            <Drawer.Screen name = "ShoppingCart" component={ShoppingCartScreenNavigator} />
            <Drawer.Screen name = "Logout" component={LogoutScreenNavigator} />
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

import SearchScreen from '../SearchScreen/SearchScreen';

const SearchScreenStack = createStackNavigator()
function SearchScreenNavigator() {
    return(
        <SearchScreenStack.Navigator>
            <SearchScreenStack.Screen name ="Search" component={SearchScreen} options = {{headerTitle: 'Search', headerLeft: () => <MenuIcon />}}
            />
        </SearchScreenStack.Navigator>
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

import WishlistScreen from '../WishlistScreen/WishlistScreen';

const WishlisttScreenStack = createStackNavigator()
function WishlistScreenNavigator() {
    return(
        <WishlisttScreenStack.Navigator>
            <WishlisttScreenStack.Screen name ="Wishlist" component={WishlistScreen} options = {{headerTitle: 'Wishlist', headerLeft: () => <MenuIcon />}}
            />
        </WishlisttScreenStack.Navigator>
    )
}

import ShoppingCartScreen from '../ShoppingCartScreen/ShoppingCartScreen';

const ShoppingCartScreenStack = createStackNavigator()
function ShoppingCartScreenNavigator() {
    return(
        <ShoppingCartScreenStack.Navigator>
            <ShoppingCartScreenStack.Screen name ="ShoppingCart" component={ShoppingCartScreen} options = {{headerTitle: 'ShoppingCart', headerLeft: () => <MenuIcon />}}
            />
        </ShoppingCartScreenStack.Navigator>
    )
}

import SignOut from '../LogoutScreen/LogoutScreen'

const LogoutScreenstack = createStackNavigator()
function LogoutScreenNavigator() {
    return(
        <LogoutScreenstack.Navigator>
            <LogoutScreenstack.Screen name = 'Logout' component={SignOut} options = {{headerTitle: 'Logout'}} />
        </LogoutScreenstack.Navigator>
    )
}