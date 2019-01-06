import React, { Component } from 'react';
import { ProfileScreen } from "../screenNames";
import Button from 'react-native-button';
import { View, Text, StyleSheet } from 'react-native';

class Installation extends Component{
    render(){
        //const { navigation } = this.props;
        return(
            <View style={ styles.container }>
                <Text style={ styles.textIntroduction }>
                    This is the main
                </Text>
                <Button
                onPress={() => {
                    //navigation.nagivate(ProfileScreen);
                    this.props.navigation.navigate('Profile');
                }}>
                    Go to Profile
                </Button>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textIntroduction: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white',
    }
});

export default Installation;