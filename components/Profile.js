import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from 'react-native-button';


class Profile extends Component{
    render(){
        return(
            <View style={ styles.containerProfile }>
                <Text style={ styles.textProfile }>
                    This is the details
                </Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    containerProfile: {
        backgroundColor: 'mediumseagreen',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textProfile: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
    }
});

export default Profile;