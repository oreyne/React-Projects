/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, Text, View, Image } from 'react-native';
import { StackNavigation } from 'react-navigation';
import FetchLocation from './components/FetchLocation';
import MultiComponents from "./components/MultiComponents";
import Blind from "./components/Blind";
import TextBlind from "./components/Blind";
//import const IMAGENAME = require
//import Styling from "./components/Styling";

import { createStackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
    render() {
        var imageSource = {
            uri: 'ic_launcher_round.png'
        };
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image source={ require('./img/test.jpg') } style={{ width: 100, height: 100 }}></Image>
                <Text>Home Screen</Text>
                <Button
                    title="Go! to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
            </View>
        );
    }
}

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}