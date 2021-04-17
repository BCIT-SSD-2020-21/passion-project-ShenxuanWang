import React, { useState } from 'react';
import { View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import ProductCard from '../../components/ProductCard/ProductCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './styles';
import firebase from 'firebase';

export default function ProductScreen({navigation}) {
    const db = firebase.firestore();
    const [result, setResult] = useState('');
    const [product, setProduct] = useState([]);


    const searchApi = async () => {
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
    );
}