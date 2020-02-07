import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Trips extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open Up in the Trips place</Text>
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


export default Trips
