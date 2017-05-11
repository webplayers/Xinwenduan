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
} from 'react-native';

var DShome = React.createClass({
    getDefaultProps(){
        return {
            url_api: "http://v.juhe.cn/toutiao/index?type=yule&key=7547c9db15256d8cece1e8bf1a93015b"
        }
    },
    getInitialState(){
        return {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        }
    },
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            />
        );
    },
    renderRow(rowData){
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.TitleStyles}>
                    <Image source={{uri:rowData.thumbnail_pic_s}} style={styles.ImageStyle} />
                    <View style={{width:280,paddingLeft:10}}>
                        <Text style={styles.stitleStyle}>{rowData.title}</Text>
                        <Text style={styles.btitleStyle}>{rowData.date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },
    componentDidMount(){
        this.loadDataNet();
    },
    loadDataNet(){
        fetch(this.props.url_api)
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

const styles = StyleSheet.create({
    ImageStyle:{
        height:70,
        width:70,
    },
    TitleStyles:{
        flexDirection:'row',
        paddingBottom:5,
        borderBottomColor:'#92B1AE'
    },
    stitleStyle:{
        fontSize:14,
        marginBottom:5
    },
    atitleStyle:{},
    btitleStyle:{
        position:'absolute',
        right:5,
        bottom:5
    },
});

module.exports = DShome;
