import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Styling extends Component {
    render(){

        return(
            <View style={ styles.container }>
                <Text style={ styles.firsText }>First Text</Text>
                <Text style={ styles.secondText }>Second Text</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#243223',
        borderWidth: 2,
        borderColor: '#576555',
    },
    firsText: {
        margin: 5,
        color: 'white'
    },
    secondText: {
        margin: 5,
        color: 'yellow',
        fontWeight: 'bold'
    }
});

export default Styling;