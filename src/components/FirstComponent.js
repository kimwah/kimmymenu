import React from 'react';
import { Text } from 'react-native';

export default class FirstComponent extends React.Component {
    render() {
        
        return (
            <Text>I m First Component {this.props.message} </Text>
        );
    }
}