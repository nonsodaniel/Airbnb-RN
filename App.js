import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open Up in the container</Text>
      </View>
    )
  }
}



//bottom navigator has 4 screens
export default createBottomTabNavigator({
  Expolore: {
    screen: Explore
  },
  Saved: {
    screen: Saved
  },
  Trips: {
    screen: Trips
  },
  Inbox: {
    screen: Inbox
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

