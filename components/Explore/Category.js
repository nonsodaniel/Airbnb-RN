import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: "#dddddd" }}>
                <View style={{ flex: 2 }}>
                    <Image
                        style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
                        source={{ uri: 'https://facebook.github.io/react-native/img/tiny_logo.png' }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
                    <Text>Home</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})


export default Category
