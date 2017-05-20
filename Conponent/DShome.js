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
    ListView,
    TouchableOpacity,
    Image,
    TextInput,
    Button,
} from 'react-native';

import {StackNavigator} from 'react-navigation';
var DSdetail = require('../Conponent/DSdetail');
var url_api = "http://v.juhe.cn/toutiao/index?type=";
var urls_api = "&key=7547c9db15256d8cece1e8bf1a93015b";

var HomeScreen = React.createClass({
    getInitialState(){
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    },
    render() {
        var content = this.state.dataSource.getRowCount() === 0 ?
            <Text style={styles.blanktext}>
                消息显示区域
            </Text> : <ListView
                ref="listview"
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        return (
            <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    placeholder="输入需要找的内容"
                    style={styles.searchBarInput}
                    onEndEditing={this.onSearchChange}
                />
                {content}
            </View>
        );
    },
    renderRow(rowData){
        const {navigate} = this.props.navigation;
        var url=rowData.url;
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={(rowData) => navigate('Chat',{url})}>
                <View style={styles.TitleStyles}>
                    <Image source={{uri: rowData.thumbnail_pic_s}} style={styles.ImageStyle}/>
                    <View style={{width: 280, paddingLeft: 10}}>
                        <Text style={styles.stitleStyle}>{rowData.title}</Text>
                        <Text style={styles.btitleStyle}>{rowData.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    onSearchChange(event){
        var srarchchTerm = event.nativeEvent.text.toLowerCase(); //toLowerCase() 方法用于把字符串转换为小写
        var queryURL = url_api + encodeURIComponent(srarchchTerm) + urls_api;
        fetch(queryURL)
            .then((response) => response.json())
            .then((responseData) => {
                var jsonData = responseData.result.data;
                var listDataArr = [];
                for (var i = 0; i < jsonData.length; i++) {
                    var data = jsonData[i];
                    listDataArr.push(data)
                }
                this.setState({
                    dataSource: this.state.dataSource.cloneWithRows(listDataArr)
                });
            });
    },
});
const DShome = StackNavigator({
        Home: {screen: HomeScreen},
        Chat: {screen: DSdetail},
    },
    {
        initialRouteName: 'Home', // 默认显示界面
        headerMode: 'none',
    });

const styles = StyleSheet.create({
    ImageStyle: {
        height: 70,
        width: 70,
    },
    TitleStyles: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#939393',
        borderBottomWidth: 0.5
    },
    stitleStyle: {
        fontSize: 14,
        marginBottom: 5
    },
    atitleStyle: {},
    btitleStyle: {
        position: 'absolute',
        right: 5,
        bottom: 5
    },
    blanktext: {},
    container: {},
    searchBarInput: {},
});

module.exports = DShome;
