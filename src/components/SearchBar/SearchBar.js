import React from 'react';
import { View, TextInput } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import styles from './styles';

export default function SearchBar ({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.background}>        
            <EvilIcons style={styles.icon} name="search" />
            <TextInput 
                value={term}
                style={styles.input}
                placeholder="Search" 
                autoFocus={true}
                onChangeText={term => onTermChange(term)}
                onEndEditing={() => onTermSubmit()} 
            />           
        </View>
    );
}