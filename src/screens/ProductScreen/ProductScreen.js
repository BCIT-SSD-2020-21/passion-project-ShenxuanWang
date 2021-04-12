import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './styles';
import firebase from 'firebase';

export default function ProductScreen({navigation}) {
    const db = firebase.firestore();
    const [positions, setPositions] = useState([]);

    

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
    
      //Call when component is rendered
      useEffect(() => {
        getProducts();
      }, []);

    // useEffect(() => {
    //     (async () => {
    //         // Get user auth from firestore auth
    //         const currentUser = firebase.auth().currentUser;

            // Set product details and user positions
    //         db.collection('users')
    //             .doc(currentUser.uid)
    //             .collection('Product')
    //             .onSnapshot((querySnapshot) => {
    //                 let tempPositions = [];

    //                 querySnapshot.forEach((docSnapshot) => {
    //                     tempPositions = (docSnapshot.data());
    //                 });

    //                 setPositions([...tempPositions]);
    //             });
    //     })();
    // }, []);

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
                    // price={item.price}
                    // weight={item.weight}
                    image={item.image}
                />
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.root}>
            <Text style={styles.portfolioText}>Categories:</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(data) =>
                    `${data.name} ${data.price} ${data.weight} ${data.image}`
                }
                data={positions}
                renderItem={createProductCard}
            />
        </View>
    );
}