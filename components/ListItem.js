import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

const ListItem = ({ item, deleteItem }) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Text style={styles.removeIcon} onPress={() => deleteItem(item.id)}>X</Text>
            </View>
        </TouchableOpacity>

    )
}


const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 1,
        borderColor: "#eee"
    },
    listItemView: {
        padding: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    removeIcon: {
        fontSize: 18,
        color: "firebrick"
    }
    // listItem: {
    //     height: 60,
    //     padding: 15,
    //     backgroundColor: "darkslateblue"
    // },
    // listItemText: {
    //     color: "#fff",
    //     fontSize: 23,
    //     textAlign: "center"
    // }
})


export default ListItem;
