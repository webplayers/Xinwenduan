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
var DSmine = require('../Conponent/DSmine');

class HomeScreen extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    home
                </Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="点击跳转"/>
            </View>
        );
    }
}
const DSmessage = StackNavigator({
        Home: {screen: HomeScreen},
        Chat: {screen: DSmine},
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

module.exports = DSmessage;
