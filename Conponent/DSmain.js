import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

//引入tabbar支持包
var HOme =require('../Conponent/DShome');
var MEssage =require('../Conponent/DSmessage');
var FInd =require('../Conponent/DSfind');
var MIne =require('../Conponent/DSmine');
import TabNavigator from 'react-native-tab-navigator';

const TAB_NORMAL_1 = require('../TabBar/tabbar_home@2x.png');
const TAB_NORMAL_2 = require('../TabBar/tabbar_discover@2x.png');
const TAB_NORMAL_3 = require('../TabBar/tabbar_message_center@2x.png');
const TAB_NORMAL_4 = require('../TabBar/tabbar_profile@2x.png');

var DSmain = React.createClass({
    getInitialState: function () {
        return {
            selectedTab: 'Home'
        };
    },

    /**
     tab点击方法
     **/
    onPress(tabName) {
        if (tabName) {
            this.setState(
                {
                    selectedTab: tabName,
                }
            );
        }
    },

    /**
     渲染每项
     **/
    renderTabView(title, tabName, TabContent) {
        var tabNomal;
        switch (tabName) {
            case 'Home':
                tabNomal = TAB_NORMAL_1;
                break;
            case 'Video':
                tabNomal = TAB_NORMAL_2;
                break;
            case 'Follow':
                tabNomal = TAB_NORMAL_3;
                break;
            case 'Mine':
                tabNomal = TAB_NORMAL_4;
                break;
            default:

        }
        return (
            <TabNavigator.Item
                title={title}
                renderIcon={() => <Image style={styles.tabIcon} source={tabNomal}/>}
                selected={this.state.selectedTab === tabName}
                selectedTitleStyle={{color: '#f85959'}}
                onPress={() => this.onPress(tabName)}
            >
               <TabContent />
            </TabNavigator.Item>
        );
    },

    /**
     自定义tabbar
     **/
    tabBarView() {
        return (
            <TabNavigator
                tabBarStyle={styles.tab}
            >
                {this.renderTabView('头条', 'Home', HOme)}
                {this.renderTabView('视频', 'Video', MEssage)}
                {this.renderTabView('关注', 'Follow', FInd)}
                {this.renderTabView('我的', 'Mine', MIne)}
            </TabNavigator>
        );
    },


    render() {
        var tabBarView = this.tabBarView();
        return (
            <View style={styles.container}>
                {tabBarView}
            </View>
        );
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    tab: {
        height: 52,
        alignItems: 'center',
        backgroundColor: '#f4f5f6',
    },
    tabIcon: {
        width: 25,
        height: 25,
    },
    badgeView: {
        width: 22,
        height: 14,
        backgroundColor: '#f85959',
        borderWidth: 1,
        marginLeft: 10,
        marginTop: 3,
        borderColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    badgeText: {
        color: '#fff',
        fontSize: 8,
    }
});

module.exports = DSmain;
