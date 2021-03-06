import React, { Component } from 'react'
import {
    StyleSheet, Text, View, SafeAreaView, TextInput,
    ScrollView, Platform, StatusBar, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category';


class Explore extends Component {
    componentWillMount() {
        this.startHeaderHeight = 80;
        if (Platform.OS == "android") {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <View style={{
                        height: this.startHeaderHeight,
                        backgroundColor: "white",
                        borderBottomWidth: 1, borderBottomColor: "#dddddd"
                    }}>
                        <View style={{
                            flexDirection: "row", padding: 10, backgroundColor: "white",
                            marginHorizontal: 20, shadowOffset: { width: 0, height: 0 },
                            shadowColor: "black", shadowOpacity: 0.2, elevation: 1,
                            marginTop: Platform.OS == "android" ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput placeholder="Enter here" placeholderTextColor="grey"
                                underlineColorAndroid="transparent"
                                style={{
                                    flex: 1, fontWeight: "700",
                                    backgroundColor: "white"
                                }} />

                        </View>

                    </View>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: "700", textAlign: "center", paddingHorizontal: 20 }}
                            >What can we help you find?</Text>
                        </View>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView horizontal={true}
                                showsHorizontalScrollIndicator={false}>
                                <Category name="Home" />
                                <Category name="Home" />
                                <Category name="Home" />
                                <Category name="Home" />
                                <Category name="Home" />
                            </ScrollView>
                        </View>
                    </ScrollView>

                </View>
            </SafeAreaView>
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


export default Explore
