import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'

const AddItem = ({ addItem }) => {
    const [text, setText] = useState("")
    const addItems = () => {
        if (text === "") {
            return Alert.alert("Error", "Item can not be empty", { text: "Ok" })
        }
        addItem(text)
    }
    const onChange = textValue => setText(textValue)

    return (
        <View>
            <TextInput placeholder="Enter Item" keyboardType="default"
                style={styles.input} onChangeText={onChange} />
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText} onPress={addItems}>
                    <Text style={{ fontSize: 30 }}>+</Text> Add Item
            </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: "center",
    }
})


export default AddItem;
