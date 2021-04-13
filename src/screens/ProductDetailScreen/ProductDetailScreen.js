import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';

export default function ProductDetailScreen(props) {
    const [product, setProduct] = useState(props.route.params);

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
        </View>
    );
}
