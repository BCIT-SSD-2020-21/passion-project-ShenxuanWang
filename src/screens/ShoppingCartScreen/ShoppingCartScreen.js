import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ShoppingCard from '../../components/ShoppingCard/ShoppingCard';
import styles from './styles';
import firebase from 'firebase';
import { useIsFocused } from '@react-navigation/native'

export default function ShoppingCartScreen({navigation}) {
    const db = firebase.firestore();
    const [uid, setUid] = useState('');
    const [positions, setPositions] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        const currUser = firebase.auth().currentUser;
        setUid(currUser.uid);
    }, []);

    const getShoppingCartProducts = async () => {
        try {
          const tempPositions = [];
          var snapshot = await db.collection("users").doc(uid).collection('shoppingCart').get();
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

    const calcTotalPrice = () => {
        var initialValue = 0
        positions.forEach((position) => {
            initialValue +=  position.totalPrice
        })
        return initialValue
    }

    //Call once uid have changed
    useEffect(() => {
        getShoppingCartProducts();
        }, [uid]);

    //Call when component is rendered
    useEffect(() => {
        getShoppingCartProducts();
        }, [isFocused]);

    const deleteShoppingCartProducts = ({item}) => {
        db
        .collection('users')
        .doc(uid)
        .collection('shoppingCart')
        .doc(item.name)
        .delete()
        .then(getShoppingCartProducts(),
        alert('Product removed from shopping cart!'));
    };

    const createProductCard = ({ item }) => {

        return (
            <View>
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
                    <ShoppingCard
                        name={item.name}
                        image={item.image}
                        price={item.price}
                        quantity={item.quantity}
                    />
                </TouchableOpacity>
                <View style={[{ width: "90%", marginTop: 10, marginLeft: 15}]}>
                    <Button
                        onPress={() => deleteShoppingCartProducts({item})}
                        title="delete" 
                        color="#F6AAB2"
                    />
                </View>
            </View>
        );
    };

    return (
        <View style={styles.root}>
            <Text style={{fontWeight: 'bold', fontSize: 18, textAlign: 'center', padding: 10}}>Total Price of All Products: ${calcTotalPrice().toFixed(2)}</Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(data) =>
                    `${data.name} ${data.price} ${data.quantity} ${data.image}`
                }
                data={positions}
                renderItem={createProductCard}
            />
        </View>
    )

};