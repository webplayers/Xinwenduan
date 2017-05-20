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
    Text,
    View,
    Dimensions,
    Image,
} from 'react-native';

import ViewPager from 'react-native-viewpager';

var deviceWidth = Dimensions.get('window').width;

const BANNER_IMGS = [
    require('../img/icon1.png'),
    require('../img/icon2.png'),
    require('../img/icon3.png'),
    require('../img/icon4.png')
];

var DSfind =React.createClass({
    getInitialState:function (){
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        return{
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    },

    _renderPage(data) {
        return (
            <Image
                source={data}
                style={styles.page}/>
        );
    },

    /**
     dataSource: 提供页面数据,
     renderPage: 用于渲染页面视图,
     autoPlay: 为true 将自动播放,
     isLoop: 为true支持循环播放,
     locked: 为true禁止触摸滚动,
     onChangePage: 页面变化的回调,
     renderPageIndicator: 渲染自定义的 ViewPager indicator.
     */
    render() {
        return (
            <View style={styles.container}>
                <ViewPager
                    style={{height:100}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        height:100,
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    page: {
        width: deviceWidth,//设备宽(只是一种实现，此处多余)
        flex: 1,
        height: 100,
        resizeMode: 'stretch'
    },
});
module.exports = DSfind;
