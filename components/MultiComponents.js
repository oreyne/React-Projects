import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Geetings extends Component {
    render(){
        return(
            <Text>Hello { this.props.name }</Text>
        );
    }
}

class MultiComponents extends Component {
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Geetings name="Oreyne Lang Santiesteban"></Geetings>
                <Geetings name="Maczel Lang Santiesteban"></Geetings>
            </View>
        );
    }
}

export default MultiComponents;