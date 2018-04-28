import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class ProductCard extends Component {
    render() {
        const { title, artist, url, image, thumbnail_image} = this.props.product;
        return (
            <View style={{borderWidth: 1, borderRadius: 5}}>
                <Text>{title}</Text>    
                <Text>{artist}</Text>    
                <Text>{url}</Text>    
                <Text>{image}</Text>    
                <Image style={{width: 50, height: 50}} source={{uri: thumbnail_image}} />    
            </View>    
        );
    }
}