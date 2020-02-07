import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Open Up in the Profile place</Text>
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


export default Profile
