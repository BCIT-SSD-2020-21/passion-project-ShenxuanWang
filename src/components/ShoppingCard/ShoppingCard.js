import React from 'react';
import { View, Text } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './styles';

export default function ShoppingCard({ name, price, quantity, image}) {
    var totalPrice = price*quantity

    return (
        <Card>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <Card.Title>{name}</Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: image}} style={styles.images}>
                </Card.Image>
                <Text>Price: ${price}</Text>
                <Text>Quantity: {quantity}</Text>
                <Text>Total Price: ${totalPrice.toFixed(2)}</Text>
            </View>
        </Card>
    );
}