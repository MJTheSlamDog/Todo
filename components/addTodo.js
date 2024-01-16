import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function addTodo({ submitHandler }) {

    const [text, setText]= useState('');

    const changeHandler = (val) => {
        setText(val);
    }


    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder="New todo..."
                onChangeText={changeHandler}                
            />

            <Button onPress={() => submitHandler(text)} title='add todo' color='#00b8ff'/>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#00BCE1'
    }
})