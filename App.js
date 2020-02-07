import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons'

import Explore from './screens/Explore'
import Inbox from './screens/Inbox'
import Saved from './screens/Saved'
import Trips from './screens/Trips'
import Profile from './screens/Profile'

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
    screen: Explore,
    navigationOptions: {
      tabBarLabel: "EXPOLORE",
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-search" color={tintcolor} size={24} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "SAVED",
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-heart" color={tintcolor} size={24} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: "TRIPS",
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-jet" color={tintcolor} size={24} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: "INBOX",
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-chatboxes" color={tintcolor} size={24} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "PROFILE",
      tabBarIcon: ({ tintcolor }) => (
        <Icon name="ios-person" color={tintcolor} size={24} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: "red",
    inactiveTintColor: "grey",
    style: {
      backgroundColor: "white",
      borderTopWidth: 0,
      shadowOffSet: { width: 5, height: 3 },
      shadowColor: "black",
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
}
)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

