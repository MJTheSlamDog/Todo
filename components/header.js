import React from 'react';
import { StyleSheet, Text, View,  } from 'react-native';

export default function Header(){
    return(
        <View style={styles.header}>
            <Text style={styles.title}>What To Do?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
       paddingTop: 38,
       backgroundColor: '#00b8ff' 
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
});