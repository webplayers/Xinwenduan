/**
 * Created by kai on 17-5-10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
var DSmessage=require('../Conponent/DSmessage');

var HomeScreen = React.createClass({
    static: navigationOptions = {
        title: 'Welcome',
    },
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    home
                </Text>
                <Button
                    onPress={() => navigate('Chat', {user: 'Lucy'})}
                    title="Chat with Lucy"/>
            </View>
        );
    }
})
const DShome = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: DSmessage},
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

module.exports = DShome;
