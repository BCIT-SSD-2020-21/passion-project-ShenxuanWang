import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, Button} from 'react-native';
import styles from './styles';
import firebase from 'firebase';
import { TextInput } from 'react-native-gesture-handler';

export default function ProductDetailScreen(props) {
    const [product, setProduct] = useState(props.route.params);
    const [uid, setUid] = useState('');
    const [quantity, setQuantity] = useState(0);
    const db = firebase.firestore();

    useEffect(() => {
        const currUser = firebase.auth().currentUser;
        setUid(currUser.uid);
    }, []);

    const handleWishList = async () => {
        await db
            .collection('users')
            .doc(uid)
            .collection('wishList')
            .doc(product.name)
            .set({
                name: product.name,
                price: product.price,
                weight: product.weight,
                image: product.image,
                nutrition: product.nutrition,
            }, {merge: true})
            .then(alert('Product added to wish list!'));
    };

    const handleShoppingCart = async () => {
        var totalPrice = product.price * parseInt(quantity)
        await db
            .collection('users')
            .doc(uid)
            .collection('shoppingCart')
            .doc(product.name)
            .set({
                name: product.name,
                price: product.price,
                weight: product.weight,
                image: product.image,
                nutrition: product.nutrition,
                quantity: parseInt(quantity),
                totalPrice: totalPrice,
            }, {merge: true})
            .then(alert('Product added to shopping cart!'));
    };

    return (
        <View style={styles.root}>
            <ScrollView>
            <Image source={{uri: product.image}} style={styles.logo}/>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.name}>Price: ${product.price}</Text>
            <Text style={styles.name}>Weight: {product.weight}</Text>
            <Text style={{color: 'black', fontSize: 20, margin: 20}}>Ingredient: </Text>           
            <Text style={styles.desc}>{product.nutrition}</Text>
            </ScrollView>
            <View style={styles.button}>
                <Button
                    onPress={handleWishList}
                    title="Add to Wish List"
                    color="#F6AAB2"
                />
                <TextInput 
                    value={quantity}
                    placeholder='0'
                    onChangeText={text => setQuantity(text)}
                    keyboardType='numeric'
                    style={{borderWidth: 1, width: 80, textAlign: 'center'}}
                /> 
                <Button
                    onPress={handleShoppingCart}
                    title="Add to Cart"
                    color="#F3E260"
                />                
            </View>           
        </View>
    );
}
