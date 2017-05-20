/**
 * Created by kai on 17-5-10.
 */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    WebView,
} from 'react-native';

var DSdetail = React.createClass({
    render() {
        const {params} = this.props.navigation.state;
        return (
            <WebView
                automaticallyAdjustContentInsets={false}
                source={{uri: params.url}}
                mixedContentMode='never'
            />
        );
    },
});
module.exports = DSdetail;
