import React from 'react';
import { View } from 'react-native'
import { Card } from 'react-native-elements'
import styles from './styles';

export default function ProductCard({ name, price, weight, image}) {

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
            </View>
        </Card>
    );
}