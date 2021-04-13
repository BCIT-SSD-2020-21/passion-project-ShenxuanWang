import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../../components/ProductCard/ProductCard';
import styles from './styles';
import firebase from 'firebase';
import { useIsFocused } from '@react-navigation/native'

export default function ProductScreen({navigation}) {
    const db = firebase.firestore();
    const [uid, setUid] = useState('');
    const [positions, setPositions] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        const currUser = firebase.auth().currentUser;
        setUid(currUser.uid);
    }, []);

    const getWishlistProducts = async () => {
        try {
          const tempPositions = [];
          var snapshot = await db.collection('users')
          .doc(uid).collection("wishList").get();
          console.log(snapshot)
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
        getWishlistProducts();
      }, [isFocused]);

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


    return (
        <View style={styles.root}>
            <Text style={styles.text}>Your Favorite Product:</Text>
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