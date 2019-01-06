import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blind extends Component {

    constructor(props){
        super(props);
        this.state = {
            showText: true
        };

        var taskToDo = () => {
            this.setState(
                previousState => {
                    return {
                        showText: !previousState.showText
                    };
                }
            );
        };
        const timeToBlick = 1000;
        setInterval(taskToDo, timeToBlick);
    }

    render(){
        let textToDisplay = this.state.showText ? this.props.inputText : ' ';
        return(
            <Text>{textToDisplay}</Text>
        );
    }
}

class TextBlind extends Component{
    render(){
        return(
            <View>
                <Blind inputTex t="Hi. How are you?" />
                <Blind inputText="I am fine" />
            </View>
                );
    };
}
export default TextBlind;