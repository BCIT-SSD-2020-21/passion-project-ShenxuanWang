import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './styles';
import firebase from 'firebase';
import Uri from './TabUri'

export default function ProductScreen({navigation}) {
    const db = firebase.firestore();
    const [positions, setPositions] = useState([]);
    const [canPositions, setCanPositions] = useState([]);
    const [result, setResult] = useState('');
    const [product, setProduct] = useState([]);

    const getProducts = async () => {
        try {
          const tempPositions = [];
          var snapshot = await db.collection("Product").get();
          snapshot.forEach((doc) => {
            tempPositions.push(doc.data());
          });
          setPositions([...tempPositions]);
        } catch (e) {
          console.log(
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
            console.log(
            "Loading Error"
            );
        }
    };
    
    //Call when component is rendered
    useEffect(() => {
        getProducts();
        getCanFood();
    }, []);

    const searchApi = async () => {
        console.log(result)
        try {
            const productPositions = [];
            var canFood = await db.collection("CanFood").where("name", ">=", result).get();
            canFood.forEach((doc) => {
                productPositions.push(doc.data());
            });
            var dryFood = await db.collection("Product").where("name", ">=", result).get();
            dryFood.forEach((doc) => {
                productPositions.push(doc.data());
            });
            setProduct([...productPositions]);
        } catch (e) {
            console.log(
            "Loading Error"
            );
        }
    };

    const createProductCard = ({ item }) => {

        return (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Detail', {
                        name: item.name,
                        price: item.price,
                        weight: item.weight,
                        image: item.image,
                        nutrition: item.nutrition,
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

    function SearchScreen() {
        return (
            <View style={styles.root}>
                <SearchBar
                    term={result}
                    onTermChange={result => setResult(result)}
                    onTermSubmit={() => searchApi()}
                />
                {product && (
                    <FlatList
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(data) =>
                        `${data.name} ${data.price} ${data.weight} ${data.image}`
                    }
                    data={product}
                    renderItem={createProductCard}
                />
                )}
            </View>
        )
    }

    // useEffect(() => {
    //     searchApi();
    // }, [result]);

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Search" 
                component={SearchScreen} 
                options={{
                    tabBarLabel: 'Search',
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