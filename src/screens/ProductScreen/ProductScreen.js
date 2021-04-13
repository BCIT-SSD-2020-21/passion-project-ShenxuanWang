import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../../components/ProductCard/ProductCard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import firebase from 'firebase';
import Uri from './TabUri'

export default function ProductScreen({navigation}) {
    const db = firebase.firestore();
    const [positions, setPositions] = useState([]);
    const [canPositions, setCanPositions] = useState([]);

    const getProducts = async () => {
        try {
          const tempPositions = [];
          var snapshot = await db.collection("Product").get();
          snapshot.forEach((doc) => {
            tempPositions.push(doc.data());
          });
          setPositions([...tempPositions]);
        } catch (e) {
          setErrorMessage(
            "Loading Error"
          );
        }
      };

      const getCanFood = async () => {
        try {
          const tempPositions = [];
          var snapshot = await db.collection("CanFood").get();
          snapshot.forEach((doc) => {
            tempPositions.push(doc.data());
          });
          setCanPositions([...tempPositions]);
        } catch (e) {
          setErrorMessage(
            "Loading Error"
          );
        }
      };
    
      //Call when component is rendered
      useEffect(() => {
        getProducts();
        getCanFood();
      }, []);

    const createProductCard = ({ item }) => {

        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Categories', {
                        name: item.name,
                    })
                }
            >
                <ProductCard
                    name={item.name}
                    image={item.image}
                />
            </TouchableOpacity>
        );
    };

    function CatDryfoodScreen() {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Cat Dry Food:</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(data) =>
                        `${data.name} ${data.price} ${data.weight} ${data.image}`
                    }
                    data={positions}
                    renderItem={createProductCard}
                />
            </View>
        )
    }

    function CatCanfoodScreen() {
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Cat Can Food:</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(data) =>
                        `${data.name} ${data.price} ${data.weight} ${data.image}`
                    }
                    data={canPositions}
                    renderItem={createProductCard}
                />
            </View>
        )
    }

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="CatDryfood" 
                component={CatDryfoodScreen} 
                options={{
                    tabBarLabel: 'Cat Dry Foods',
                    tabBarIcon: ({size,focused,color}) => {
                        return (
                        <Image
                            style={{ width: size, height: size }}
                            source={{
                            uri: Uri.dryFoodUri,
                            }}
                            />
                        );
                    },
                }}
            />
            <Tab.Screen 
                name="Cat Can food" 
                component={CatCanfoodScreen} 
                options={{
                    tabBarLabel: 'Cat Can Foods',
                    tabBarIcon: ({size,focused,color}) => {
                        return (
                        <Image
                            style={{ width: size, height: size }}
                            source={{
                            uri: Uri.canFoodUri,
                            }}
                            />
                        );
                    },
                }}
            />
        </Tab.Navigator>
    );
}